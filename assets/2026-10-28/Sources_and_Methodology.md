# Market Moves — market sizes and one-week changes
Prepared October 28, 2026. Scope: the four indexes, eleven S&P sectors, and five non-index categories represented in tonight's performance charts. USD throughout. These are not directly comparable or additive economic measures.

## Equity calculations: estimates, not observed changes in total capitalization
For each company, the source market cap is anchored on October 27 (tradmap CSV), or October 28 for four missing entries: ECHO $27.42B, VYLR $48.26B, ARM $251.96B and PDD $110.26B (Stock Analysis dated pages). Each cap is revalued to October 21 and October 28 using Yahoo daily **unadjusted closing-price ratios**. The reported endpoints are estimates on a fixed-share/fixed-membership basis, not two independently observed historical aggregate caps. They exclude share issuance, buybacks and membership changes during the week. Raw close rather than dividend-adjusted total return is appropriate to this price revaluation. They are not money flowing into or out of the market.

Formula per company: endpoint estimate = anchor cap × endpoint close / anchor close. Aggregate changes = sum(end estimates) − sum(start estimates); percent change = aggregate end / aggregate start − 1. Each company's anchor, dates, prices, caps and source URL are saved in constituent_audit.csv; full raw daily responses are retained locally.

Tradmap's CSV assigns whole-company cap once for Alphabet, Fox and News Corp; the secondary GOOG/FOX/NWS rows carry no cap and are excluded from the sum, not treated as three more companies. This avoids whole-company share-class double counting. The representative class's return is used to revalue that company's cap; this is an additional approximation. Provider share-count dates can lag. The chart is not an official index-provider float-adjusted market-cap series. External website headline aggregates can differ because of timestamp, missing caps and share-class treatment; we do not combine mismatched headline numbers.

S&P 500 membership matches the union of the 11 issuer sector ETF equity baskets. Issuer holdings are as of October 27; sector classifications come from those baskets, NOT tradmap's incompatible industry taxonomy. Cash, futures and the de minimis Hologic contingent-value right are excluded. The 11 sector cap estimates reconcile to the S&P total. The three large-cap indexes overlap and must not be added. Dow market size is the sum of constituent company caps, NOT the change in the price-weighted Dow index.

Sources:
- https://tradmap.com/lists/sp500.csv
- https://tradmap.com/lists/nasdaq100.csv
- https://tradmap.com/lists/dow30.csv
- https://www.ssga.com/library-content/products/fund-data/etfs/us/holdings-daily-us-en-spy.xlsx
- https://www.ssga.com/library-content/products/fund-data/etfs/us/holdings-daily-us-en-dia.xlsx
- Sector files use the same issuer URL pattern with xlk, xlf, xlv, xly, xlc, xli, xlp, xle, xlu, xlre and xlb.
- https://stockanalysis.com/stocks/echo/market-cap/
- https://stockanalysis.com/stocks/vylr/market-cap/
- https://stockanalysis.com/stocks/arm/market-cap/
- https://stockanalysis.com/stocks/pdd/market-cap/
- Yahoo chart API: https://query1.finance.yahoo.com/v8/finance/chart/{ticker}

## Russell 2000 — material gap
Current aggregate capitalization and one-week dollar change could not be verified. The $3.5T shown is LSEG's rounded preliminary reconstitution snapshot based on **April 30, 2026 rank-day data**, not an October cap. It is deliberately not extrapolated over six months or presented as current. The September 30 factsheet provides dollar-weighted average cap and holdings count, which cannot validly be multiplied to obtain total cap. Both weekly change fields remain unverified—not zero.
- https://www.lseg.com/en/insights/ftse-russell/russell-reconstitution-june-2026-larger-leaders-stronger-small-caps
- https://research.ftserussell.com/Analytics/FactSheets/Home/DownloadSingleIssue?issueName=US2000USD&isManual=True

## Bitcoin — observed cap changes
CoinGecko circulating-supply market caps, matched observations at October 21 and October 28 **00:00 UTC**. These are exactly seven days apart, but not equity close times. Do not use the API's trailing live observation as the October 28 midnight endpoint.
- https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=8&interval=daily

## Physical assets — price-driven illustrative values
Quantities are fixed at the dated estimates below. October 21/28 Yahoo daily futures closes are used as transparent pricing proxies, not spot quotes or independently verified exchange settlements. Physical_inputs.csv records every quantity, unit and price. Daily continuous futures series can be affected by roll conventions. These estimates show price-driven revaluation, not growth/depletion in inventories or reserves.

- **Gold:** WGC 222,600 metric tonnes above-ground at end-Q2 2026 × 32,150.7465686 troy ounces/tonne × GC=F close. This is whole above-ground metal, not just investable bullion.
  https://www.gold.org/goldhub/data/how-much-gold
- **Silver:** 1,751,000 tonnes historically mined, CPM 2019 estimate cited by CompaniesMarketCap, × the same ounce conversion × SI=F close. **Illustrative historical-output value**: includes consumed/lost metal, not current available inventory or a standard market cap.
  https://companiesmarketcap.com/silver/marketcap/
- **Oil:** 1,572.459 billion barrels proven crude reserves, end-2025 OPEC ASB quantity tabulated by Baratelli, × BZ=F Brent futures close. **Gross notional reserve value, not economic value or NPV**; no extraction costs, taxes, discounting, quality differences or subsequent depletion.
  https://baratelliinstitute.com/oil-proven-reserves
  https://www.opec.org/annual-statistical-bulletin.html
  https://x.com/OPECSecretariat/status/2052630885300617222

## Defense — explicitly limited proxy
The defense category uses tradmap's 12-company public-company basket: GE, RTX, LMT, BA, GD, NOC, TDG, LHX, AXON, LDOS, HII and KTOS. It is **not** a claim to total global defense industry value, and **not** the complete holdings of ITA. It includes diversified aerospace businesses. The same fixed-share method is applied. This subset overlaps the indexes and industrials sector.
- https://tradmap.com/lists/defense.csv

## Files and verification
Three comparison PNGs and a three-page PDF; combined five-slide PowerPoint containing the two original performance charts plus the three market-size tables; summary CSV, constituent audit, physical input CSV and these notes. Validated all numeric weekly arithmetic, expected daily endpoints, all 20 category rows, sector-to-index reconciliation, and slide bounds. Missing Russell weekly data is explicitly flagged rather than fabricated.
