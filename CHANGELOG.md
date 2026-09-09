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
