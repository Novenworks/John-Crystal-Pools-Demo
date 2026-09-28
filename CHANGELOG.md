# CHANGELOG

## 2026-09-09
- Prospect 22/40 John Crystal Pools speculative demo started.
- Live site is behind SiteGround challenge; CSS/JS often fail and homepage renders as unstyled HTML. Confirmed via browser + curl 202 captcha response.
- First-party photography recovered from Wayback captures of johncrystalpools.com/images (2016–2017 galleries + 2017/2024 front slider and logo). 21 usable images acquired.
- Agency sanity check: no agency credit on homepage, about, or contact.
- CSLB: aggregator records conflict (291722 inactive; 1008762 Coastal Design and Build Inc dba John Crystal Pools). Official live CSLB page not confirmed. License claims omitted from customer-facing copy.
- LA Times profile exists as first-party PDF. Historical “700 projects” figure omitted as a current stat.
- Stack: Next.js 14 App Router, TypeScript, Tailwind. No Vite.
- Contact form uses mailto to customerservice@johncrystalpools.com. No lead store.
- `/outreach` added, noindex, unlinked from nav/footer.
- Repo persisted at https://github.com/Novenworks/John-Crystal-Pools-Demo (public).
- Outreach GitHub URL corrected to the Novenworks org repo.
- Homepage images use first-party Wayback `im_` URLs so GitHub/Vercel render without binary uploads through the GitHub file API. Local copies remain in workspace `public/images` and `public/outreach`.

## 2026-09-27
- Committed the first-party images the homepage actually renders to `public/images/` (logo.png, front-s01, front-s03, front-s05, bh-vanish-s01, bh-vanish-s02, bh-vanish-s07, bh-water-s01, la-living-s01), re-downloaded from the same Wayback `im_` URLs and checked against ASSET-INVENTORY dimensions (1600×750 photos, 250×225 logo). Homepage and header now load them locally instead of hotlinking web.archive.org, which was slow and intermittently blocked (ERR_BLOCKED_BY_ORB). No images added or substituted; layout unchanged.
- Capture pass completed into `public/outreach/` (per docs/CAPTURES.md): BEFORE is the live johncrystalpools.com as served to Chromium at 1440×900 — the SiteGround robot-challenge page (HTTP 202); AFTER desktop 1440×900, AFTER mobile 390×844, scroll GIF/MP4 from the local production build. `/outreach` now shows the three stills inline.
