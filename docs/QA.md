# QA

Targets: desktop ~1440px, mobile ~390px.

Checks
- [x] Nav overlay on hero; mobile menu button 44px
- [x] Hero image covers; headline wraps
- [x] CTAs 48px tall
- [x] Work grid 1 / 2 / 3 columns
- [x] tel: and mailto: use first-party values
- [x] Form discloses mailto behavior
- [x] `/outreach` not in nav or footer
- [x] robots.txt disallows /outreach
- [ ] Production pass after Vercel deploy (local production build passed 2026-09-27; re-run against production after the asset PR merges)
- [x] Capture pass (2026-09-27, local production build of the asset branch; BEFORE = live site as served: SiteGround robot challenge, HTTP 202)

Known limitation: live original site may show captcha or unstyled HTML; BEFORE capture documents that state, not a reconstructed 2015 theme.
