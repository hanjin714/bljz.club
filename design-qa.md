# Design QA

final result: passed

## Scope

Rebuilt the `personal-blog` homepage into a public-facing `悖论矩阵 / BLJZ.club` content operating system.

## Checks

- Desktop hero at 1440 x 1100 renders without console errors.
- Mobile hero at 390 x 844 renders without horizontal overflow.
- Three.js atlas canvas renders nonblank pixels on desktop and mobile.
- Scroll state changes from `内容不是终点` to `系统从复盘长出来`.
- Course section renders 7 public course rows.
- Articles section renders 4 public article rows.
- Public cases section renders 4 cards.
- Course rows link to internal `/course/day-xx` pages.
- Article rows link to internal `/articles/...` pages.
- Public case cards link to internal `/cases/...` pages.
- Internal content pages keep a Feishu knowledge-base link.
- Navigation and content pages include a quiet enterprise-service link to `https://beilunjuzhen.cn`.
- Non-hero sections no longer mount extra Three.js canvases; this keeps scrolling lighter and smoother.
- Course section is now a sticky lightweight 2D business wheel. Scrolling changes the active node, active day, title, axis, and internal lesson link.
- Article rows, case cards, and judgement items use scroll-linked transforms rather than only static reveal.
- Enterprise-service link appears once per page through the main navigation only.
- No visible `undefined` / `NaN` text.
- `npm run build` completes successfully.

## Notes

- The large Three.js dependency triggers a Vite chunk-size warning. This is expected for the interactive 3D atlas and does not block the static build.
- Current implementation keeps all content public-safe and avoids exposing internal workflow wiring, private conversion mechanics, or full delivery SOPs.
