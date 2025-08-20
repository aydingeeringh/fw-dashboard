SELECT
  b.sector,
  b.region as region,
  a.year,
  sum(a.intrinsic_value)*10^6 as intrinsic_value,
  sum(a.market_cap)*10^6 as market_cap,
  avg(a.tsr) as tsr,
  median(latitude) as lat,
  median(longitude) as long
FROM final_metrics a
LEFT JOIN final_data b
  ON a.stock_id = b.stock_id
WHERE year > 2007 AND intrinsic_value != 0
GROUP BY ALL
