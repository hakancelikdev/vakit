---
name: seo-baseline-2026-11
description: Search Console baseline before the 2026-11-25 title/description/heroSub SEO change — compare after 2026-12-09
metadata:
  node_type: memory
  type: project
  originSessionId: 6c86ab28-a478-48bc-9f74-9e3cbb8fda06
  modified: 2026-11-25T14:21:10.183Z
---

On 2026-11-25 the tr/en/ur `META` title+description and `heroSub` were rewritten for search (commits 6c6a598, then the heroSub one); indexing was requested in Search Console for `/`, `/en/`, `/ur/`.

Baseline (Search Console, property `sc-domain:hakancelik.dev`, page filter contains `vakit.hakancelik.dev`, 2026-08-24 → 2026-11-23):
- total 41 clicks · ~2.9K impressions · CTR 1.4% · avg position 7.2
- `/` 15 clicks / 487 impr / 3.1% / pos 5.7 · `/en/` 5 / 659 / 0.8% / 4.5 · `/ur/` 1 / 465 / 0.2% / 7.6
- Türkiye: 33 impr, avg pos 12.6 · query "vakit": 618 impr, CTR 0.6%, pos 5.1
- Indexing: all 127 sitemap URLs indexed; mobile CWV 15/15 good

**Why:** the change only means something against these numbers.
**How to apply:** from 2026-12-09 on, open the same report (Chrome, Search Console) and compare Türkiye position and `/en/` + `/ur/` CTR; Urdu copy still wants a native-speaker check.
