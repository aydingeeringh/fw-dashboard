---
title: Futureworld shareholder value analytics
---

<style>
  :global([data-theme='dark'] .__evidence-leaflet-tile-layer__) {
    filter: none !important;
  }
</style>

```sql link_data
SELECT 
    DISTINCT region,
    '/' || region as link
FROM 
    regions
WHERE region IS NOT NULL
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
    'tsr' as metric, 'TSR' as metric_name, 1 as "order"
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

```sql years
WITH min_max AS (
    SELECT 
        MIN(year) as min_year,
        MAX(year) as max_year
    FROM regions
    WHERE year IS NOT NULL
)
SELECT 
    distinct r.year,
    m.min_year,
    m.max_year
FROM 
    regions r
CROSS JOIN min_max m
WHERE r.year IS NOT NULL
ORDER BY r.year
```

```sql base_data
WITH overall_coords AS (
  SELECT 
    region,
    MEDIAN(lat) as overall_lat,
    MEDIAN(long) as overall_long
  FROM regions
  WHERE region IS NOT NULL
  GROUP BY region
),
base_data AS (
  SELECT
    r.region,
    AVG(market_cap) as "Market capitalization",
    AVG(sqrt(market_cap)) as log_market_cap,
    AVG(intrinsic_value) as "Intrinsic value",
    AVG(sqrt(intrinsic_value)) as log_intrinsic_value,
    (AVG(market_cap) - AVG(intrinsic_value))/AVG(intrinsic_value) as discount_or_premium,
    AVG(tsr) as tsr,
    oc.overall_lat as lat,
    oc.overall_long as long
  FROM regions r
  JOIN overall_coords oc ON r.region = oc.region
  WHERE year = ${inputs.year_slider} 
    AND r.region IS NOT NULL 
    AND sector IN ${inputs.sector_multi.value}
  GROUP BY r.region, oc.overall_lat, oc.overall_long
)
SELECT 
    base_data.*,
    CASE 
        WHEN tsr = 0 THEN 0
        WHEN tsr > 0 THEN tsr * (MAX(ABS(tsr)) OVER () / MAX(tsr) OVER ())
        ELSE tsr * (MAX(ABS(tsr)) OVER () / ABS(MIN(tsr) OVER ()))
    END as "Total shareholder return",
    (tsr - MIN(tsr) OVER ()) / (MAX(tsr) OVER () - MIN(tsr) OVER ()) + 0.02 as normalized_tsr,
    CASE 
        WHEN discount_or_premium = 0 THEN 0
        WHEN discount_or_premium > 0 THEN discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / MAX(discount_or_premium) OVER ())
        ELSE discount_or_premium * (MAX(ABS(discount_or_premium)) OVER () / ABS(MIN(discount_or_premium) OVER ()))
    END as "Discount/Premium",
    (discount_or_premium - MIN(discount_or_premium) OVER ()) / (MAX(discount_or_premium) OVER () - MIN(discount_or_premium) OVER ()) + 0.02 as normalized_dp
FROM base_data
```

```sql regions
SELECT 
    *
FROM
    ${base_data} b
JOIN ${link_data} l ON b.region = l.region
```

```sql pos_tsr
SELECT
  tsr
FROM
  ${regions}
WHERE tsr >= 0
```

```sql pos_dp
SELECT
  discount_or_premium
FROM
  ${regions}
WHERE discount_or_premium >= 0
```

{#each link_data as row}

<a href={row.link}/>

{/each}

<Slider
    title="Year" 
    name=year_slider
    data={years}
    defaultValue=max_year
    maxColumn=max_year
    minColumn=min_year
    size=large
/>

<Details title="Data breakdown">
<DataTable data={regions} link=link sort="log_intrinsic_value desc">
  <Column id=region />
	<Column id="Intrinsic value" fmt=usd contentType=bar barColor=#45c4d3 colGroup="Performance"/>
	<Column id="Market capitalization" fmt=usd contentType=bar barColor=#fcd031 colGroup="Perception"/>
  <Column id="Total shareholder return" fmt=pct2 contentType=bar barColor=#50c778 negativeBarColor=#fe4a49 colGroup="Pay off"/>
  <Column id="discount_or_premium" title="Discount/Premium" fmt=pct2 contentType=bar barColor=#50c778 negativeBarColor=#fe4a49 colGroup="Pay off"/>
</DataTable>
</Details>

<ButtonGroup 
    data={category} 
    name=button
    value=metric
    label=category
    display=tabs
    defaultValue="intrinsic_value"
    color='#fe4a49'
/>

<Dropdown 
    data={sectors} 
    name=sector_multi 
    value=sector 
    title="Sectors" 
    multiple=true
    selectAllByDefault=true
/>

{#if inputs.button == 'market_cap'}

<BubbleMap 
    data={regions} 
    lat=lat 
    long=long 
    size='log_market_cap'
    value='Market capitalization' 
    valueFmt=usd2b
    pointName=region
    colorPalette={['#828081', '#fe4a49']}
    selectedColor= #45c4d3
    tooltipType=hover
    link=link
    tooltip={[
        {id: 'region', showColumnName: false, valueClass: 'text-lg font-semibold'},
        {id: 'Market capitalization', fmt: 'usd2b', fieldClass: 'font-light', valueClass: 'font-semibold text-[#45c4d3]'}
    ]}
/>

{:else if inputs.button == 'intrinsic_value'}

<BubbleMap 
    data={regions} 
    lat=lat 
    long=long 
    size='log_intrinsic_value'
    value='Intrinsic value' 
    valueFmt=usd2b
    pointName=region
    colorPalette={['#828081', '#fe4a49']}
    selectedColor= #45c4d3
    selectedBorderColor= #45c4d3
    tooltipType=hover
    link=link
    tooltip={[
        {id: 'region', showColumnName: false, valueClass: 'text-lg font-semibold'},
        {id: 'Intrinsic value', fmt: 'usd2b', fieldClass: 'font-light', valueClass: 'font-semibold text-[#45c4d3]'}
    ]}
/>

{:else }

<ButtonGroup 
    data={pay_offs} 
    name=pay_offs 
    value=metric_name
    defaultValue='TSR'
    color='#fe4a49'
/>

    {#if inputs.pay_offs == 'TSR' }

      {#if pos_tsr.length == 5}

      <BubbleMap 
              data={regions} 
              lat=lat 
              long=long 
              size='normalized_tsr'
              value='Total shareholder return' 
              valueFmt=pct
              pointName=region
              colorPalette={['#828081', '#50c778']}
              selectedColor= #45c4d3
              selectedBorderColor= #45c4d3
              tooltipType=hover
              link=link
              tooltip={[
                  {id: 'region', showColumnName: false, valueClass: 'text-lg font-semibold'},
                  {id: 'tsr', title: 'Total shareholder return', fmt: 'pct', fieldClass: 'font-light', valueClass: 'font-semibold text-[#45c4d3]'}
              ]}
          />


      {:else if pos_tsr.length == 0}

      <BubbleMap 
              data={regions} 
              lat=lat 
              long=long 
              size='normalized_tsr'
              value='Total shareholder return' 
              valueFmt=pct
              pointName=region
              colorPalette={['#fe4a49', '#828081']}
              selectedColor= #45c4d3
              selectedBorderColor= #45c4d3
              tooltipType=hover
              link=link
              tooltip={[
                  {id: 'region', showColumnName: false, valueClass: 'text-lg font-semibold'},
                  {id: 'tsr', title: 'Total shareholder return', fmt: 'pct', fieldClass: 'font-light', valueClass: 'font-semibold text-[#45c4d3]'}
              ]}
          />

      {:else}

      <BubbleMap 
              data={regions} 
              lat=lat 
              long=long 
              size='normalized_tsr'
              value='Total shareholder return' 
              valueFmt=pct
              pointName=region
              colorPalette={['#fe4a49', '#828081', '#50c778']}
              selectedColor= #45c4d3
              selectedBorderColor= #45c4d3
              tooltipType=hover
              link=link
              tooltip={[
                  {id: 'region', showColumnName: false, valueClass: 'text-lg font-semibold'},
                  {id: 'tsr', title: 'Total shareholder return', fmt: 'pct', fieldClass: 'font-light', valueClass: 'font-semibold text-[#45c4d3]'}
              ]}
          />

{/if}

    {:else }

      {#if pos_dp.length == 5}

      <BubbleMap 
              data={regions} 
              lat=lat 
              long=long 
              size='normalized_dp'
              value='Discount/Premium' 
              valueFmt=pct
              pointName=region
              colorPalette={['#828081', '#50c778']}
              selectedColor= #45c4d3
              selectedBorderColor= #45c4d3
              tooltipType=hover
              link=link
              tooltip={[
                  {id: 'region', showColumnName: false, valueClass: 'text-lg font-semibold'},
                  {id: 'discount_or_premium', title: 'Discount/Premium', fmt: 'pct', fieldClass: 'font-light', valueClass: 'font-semibold text-[#45c4d3]'}
              ]}
          />

      {:else if pos_dp.length == 0}

      <BubbleMap 
              data={regions} 
              lat=lat 
              long=long 
              size='normalized_dp'
              value='Discount/Premium' 
              valueFmt=pct
              pointName=region
              colorPalette={['#fe4a49', '#828081']}
              selectedColor= #45c4d3
              selectedBorderColor= #45c4d3
              tooltipType=hover
              link=link
              tooltip={[
                  {id: 'region', showColumnName: false, valueClass: 'text-lg font-semibold'},
                  {id: 'discount_or_premium', title: 'Discount/Premium', fmt: 'pct', fieldClass: 'font-light', valueClass: 'font-semibold text-[#45c4d3]'}
              ]}
          />

      {:else}

      <BubbleMap 
              data={regions} 
              lat=lat 
              long=long 
              size='normalized_dp'
              value='Discount/Premium' 
              valueFmt=pct
              pointName=region
              colorPalette={['#fe4a49', '#828081', '#50c778']}
              selectedColor= #45c4d3
              selectedBorderColor= #45c4d3
              tooltipType=hover
              link=link
              tooltip={[
                  {id: 'region', showColumnName: false, valueClass: 'text-lg font-semibold'},
                  {id: 'discount_or_premium', title: 'Discount/Premium', fmt: 'pct', fieldClass: 'font-light', valueClass: 'font-semibold text-[#45c4d3]'}
              ]}
          />

{/if}


    {/if}

{/if}



<Details title="Definitions">

## Categories

### Performance
A measure of a company's fundamental worth, determined by its inherent characteristics and future cash flows, independent of its market price.

<Details title="Intrinsic Value">

A comprehensive proprietary valuation approach that addresses the four main drivers of enterprise value: profitability, competition, growth, and cost of capital. This method goes beyond traditional discounted cash flow (DCF) models by incorporating insights into competitive advantage periods as well as market dynamics.

*Calculation:*
A modified Discounted Cash Flow (DCF):
- Sum of all future cash flows discounted to present value
- Adjustments for debt and cash positions
- Modified long term assumptions

</Details>

### Perception
A measure of the collective market sentiment and investor expectations about a company's value, potential and future prospects.

<Details title="Market Capitalisation">

The total value of a company's outstanding shares in the stock market, reflecting the market's perception of the company's worth.

*Calculation:*
Current share price × Total number of outstanding shares

</Details>

### Pay Off
A measure that quantifies actual returns and value created for shareholders, comparing market valuation against fundamental worth.

<Details title="Total shareholder return">

A measure of the total financial benefits generated for shareholders, including both capital gains and dividends.

*Calculation:*
((End share price - Initial share price) + Dividends) ÷ Initial share price × 100%

</Details>

<Details title="Discount/Premium">

The percentage difference between a company's market price and its intrinsic value, indicating potential over or undervaluation.

*Calculation:*
((Market Price - Intrinsic Value) ÷ Intrinsic Value) × 100%
- Positive percentage = Premium
- Negative percentage = Discount

</Details>

</Details>
