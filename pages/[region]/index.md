# Futureworld shareholder value analytics

```sql start_year
SELECT
    DISTINCT year,
    year::VARCHAR as year_str
FROM
    regions
WHERE year IS NOT NULL
ORDER BY year
```

```sql end_year
SELECT
    *
FROM
    ${start_year}
WHERE
    year >= CAST(${inputs.start_date.value} AS INT)
```

```sql category
SELECT
  *
FROM
  (SELECT 
    'market_cap' as metric, 'Perception' as category,  'usd' as unit, 2 as "order"
  UNION ALL
  SELECT 'intrinsic_value', 'Performance', 'usd', 1
  UNION ALL
  SELECT 'tsr', 'Pay off', 'pct', 3)
ORDER BY "order"
```

```sql pay_offs
SELECT
  *
FROM
  (SELECT 
    'tsr' as metric, 'Total shareholder return' as metric_name, 1 as "order"
  UNION ALL
  SELECT 'discount_or_premium', 'Discount/Premium', 2)
ORDER BY "order"
```

```sql sectors
SELECT
    DISTINCT sector
FROM
    regions
WHERE sector IS NOT NULL 
```

```sql sector_by_year
WITH yearly_metrics AS (
    SELECT
        year,
        region,
        sector,
        avg(market_cap) as 'Market capitalization',
        avg(intrinsic_value) as 'Intrinsic value',
        avg(tsr) as yearly_tsr,
        (avg(market_cap) - avg(intrinsic_value))/ avg(intrinsic_value) as discount_or_premium
    FROM
        regions
    WHERE
        region = '${params.region}'
        AND sector IN ${inputs.sector_multi.value}
        AND year between ${inputs.start_date.value}::INT and ${inputs.end_date.value}::INT
    GROUP BY ALL
),
compound_tsr AS (
    SELECT
        *,
        EXP(SUM(LN(1 + yearly_tsr)) OVER (
            PARTITION BY sector
            ORDER BY year
        )) - 1 as cumulative_tsr
    FROM yearly_metrics
)
SELECT
    year,
    region,
    sector,
    "Market capitalization",
    "Intrinsic value",
    discount_or_premium,
    yearly_tsr,
    cumulative_tsr
FROM
    compound_tsr
ORDER BY
    sector,
    year
```

```sql output
WITH yearly_market_cap AS (
    SELECT 
        sector,
        MAKE_DATE(year::INT, 1, 1) AS year_date,  -- converting numeric year to date
        AVG("Market capitalization") AS yearly_market_cap,
        AVG("Intrinsic value") AS yearly_iv,
        AVG("discount_or_premium") AS yearly_dp,
        AVG("cumulative_tsr") AS yearly_tsr,
    FROM 
        ${sector_by_year}
    GROUP BY 
        sector, year
    ORDER BY year_date desc, yearly_market_cap desc
)
SELECT 
    sector,
    sum(yearly_market_cap) as total_market_cap,
    ARRAY_AGG({'year': year_date, 'market_cap': yearly_market_cap}) AS market_cap_data,
    ARRAY_AGG({'year': year_date, 'iv': yearly_iv}) AS iv_data,
    ARRAY_AGG({'year': year_date, 'dp': yearly_dp}) AS dp_data,
    ARRAY_AGG({'year': year_date, 'tsr': yearly_tsr}) AS tsr_data
FROM 
    yearly_market_cap
GROUP BY 
    sector
```

<Dropdown
    data={start_year} 
    name=start_date
    value=year_str
    title="Start year"
    defaultValue="2008.0"
    label=year
/>

<Dropdown
    data={end_year} 
    name=end_date
    value=year_str
    title="End year"
    defaultValue="2024.0"
    label=year
    order=year desc
/>

<Details title="Data breakdown">
<DataTable data={output} downloadable=false>
    <Column id=sector />
    <Column id=iv_data title="Intrinsic value" contentType=sparkarea sparkX=year sparkY=iv sparkColor=#45c4d3 colGroup="Performance"/>
    <Column id=market_cap_data title="Market cap" contentType=sparkarea sparkX=year sparkY=market_cap  sparkColor=#fcd031 colGroup="Perception"/>
    <Column id=dp_data title="Discount/Premium" contentType=sparkarea sparkX=year sparkY=dp sparkColor=#fe4a49 colGroup="Pay off"/>
    <Column id=tsr_data title="TSR" contentType=sparkarea sparkX=year sparkY=tsr sparkColor=#50c778 colGroup="Pay off"/>
</DataTable>
<DownloadData data={sector_by_year}/>
</Details>

<ButtonGroup 
    data={category} 
    name=button
    value=metric
    label=category
    display=tabs
    defaultValue=intrinsic_value
    color='#fe4a49'
/>

<Dropdown 
    data={sectors} 
    name=sector_multi 
    value=sector 
    title="Select a sector" 
    multiple=true
    defaultValue={['Financial Services', 'Materials', 'Metals & Mining', 'Semiconductors & Semiconductor Equipment', 'Information Technology']}
/>

{#if inputs.button == 'market_cap'}

<LineChart 
    data={sector_by_year}
    x=year
    y='Market capitalization' 
    yFmt = usd2b
    yAxisTitle="Average Market Capitalization"
    series=sector
>
    <ReferenceLine x='2022' label="Launch of ChatGPT" hideValue=true/>  
</LineChart>

{:else if inputs.button == 'intrinsic_value'}

<LineChart 
    data={sector_by_year}
    x=year
    y='Intrinsic value' 
    yFmt = usd2b
    yAxisTitle="Average Intrinsic Value"
    series=sector
>
    <ReferenceLine x='2022' label="Launch of ChatGPT" hideValue=true/>  
</LineChart>

{:else }

<ButtonGroup 
    data={pay_offs} 
    name=pay_offs 
    value=metric_name
    defaultValue='Total shareholder return'
/>

    {#if inputs.pay_offs == 'Total shareholder return' }

    <LineChart 
        data={sector_by_year}
        x=year
        y='cumulative_tsr' 
        yFmt = pct
        yAxisTitle="Cumulative TSR"
        series=sector
    >
        <ReferenceLine x='2022' label="Launch of ChatGPT" hideValue=true/>
    </LineChart>


    {:else }

    <LineChart 
        data={sector_by_year}
        x=year
        y='discount_or_premium' 
        yFmt = pct
        yAxisTitle="Average Discount/Premium"
        series=sector
    >
        <ReferenceLine x='2022' label="Launch of ChatGPT" hideValue=true/>  
        <ReferenceArea yMax=0 color=negative label="Discount" labelPosition=bottomRight/>
        <ReferenceArea yMin=0 color=positive label="Premium" labelPosition=topRight/>
    </LineChart>

    {/if}

{/if}

<Details title='Sector definitions'>
<Details title='Agriculture' open=true>
Fertilizers and agricultural chemicals, agricultural and farm machinery, agricultural products and services
</Details>
<Details title='Banks' open=true>
Conventional banking services incl. retail banking and small and medium corporate lending, and a diverse range of financial services.
</Details>
<Details title='Consumer Staples' open=true>
Manufacturing and distributing companies that are less sensitive to economic cycles (excl., Agricultural products & services). Additionally, distributors and retailers of consumer staples.
</Details>
<Details title='Energy' open=true>
Exploration & production, refining & marketing, and storage & transportation of oil & gas, coal & consumables fuels, incl. equipment and services.
</Details>
<Details title='Financial Services' open=true>
Conventional banking services incl. retail banking, small and medium corporate lending, and a diverse range of financial services.
</Details>
<Details title='Healthcare Equip & Services' open=true>
Healthcare providers & services, manufacturers & distributors of healthcare equipment & supplies, healthcare technology companies.
</Details>
<Details title='Industrials' open=true>
Manufacturers and distributors of capital goods, providers of commercial & professional services. Additionally, companies providing transportation services.
</Details>
<Details title='Information Technology' open=true>
Companies offering software and information technology services, manufacturers and distributors of technology hardware & equipment.
</Details>
<Details title='Materials' open=true>
Companies that manufacture chemicals, construction materials, forest products, glass, paper, and related packaging products.
</Details>
<Details title='Metals & Mining' open=true>
Includes metals, minerals, and mining companies, and steel producers.
</Details>
<Details title='Pharmaceuticals & Biotech Consumer Discretionary' open=true>
Manufacturing and services companies most sensitive to economic cycles, including distributors and retails of the products and services
</Details>
<Details title='Real Estate' open=true>
Companies involved in real estate development and operation, including companies offering related services and REITS.
</Details>
<Details title='Renewable Electricity' open=true>
Independent power producers and energy traders, and companies that engage in generation and distribution of electricity using renewable sources.
</Details>
<Details title='Semiconductors' open=true>
Companies manufacturing and distributing semiconductors and related equipment and materials. Communications Services Companies facilitating communication and offering related content and information through various mediums, including companies engaged in distribution.
</Details>
<Details title='Utilities' open=true>
Companies such as electric, gas and water utilities. Insurance Companies involved in insurance activities.
</Details>
</Details>