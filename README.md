# CastWise WA — Washington State Fishing Companion

A mobile-first fishing companion app for Washington State anglers. Features WDFW regulations search, a license wizard, fish migration and stocking calendars, a beginner knot/gear guide, and public fishing access points.

**Stack:** React + Vite + Tailwind CSS v4 + lucide-react

---

## Running locally

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173**

Vite's dev server has hot module replacement (HMR) — edits to any source file reload instantly in the browser without losing state.

### Viewing in mobile layout

The app is designed for a 430px mobile shell. To preview it as it would look on a phone:

- **Chrome/Edge:** Open DevTools → toggle Device Toolbar (Ctrl+Shift+M / Cmd+Shift+M) → select any iPhone or Pixel preset, or set a custom 430×932 viewport.
- **Firefox:** Open DevTools → Responsive Design Mode (Ctrl+Shift+M).

### Building for production

```bash
npm run build       # outputs to dist/
npm run preview     # serves the dist/ build locally for final QA
```

---

## Deployment options

| Option | Best for | Notes |
|---|---|---|
| **Vercel** | Quickest path to live URL | Connect the GitHub repo, zero config needed — Vite is auto-detected. Free tier is generous. |
| **Netlify** | Same ease as Vercel | Drag-and-drop the `dist/` folder for a one-off deploy, or connect the repo for CI. |
| **GitHub Pages** | Free, stays in the repo | Requires `base: '/FishingApp/'` in `vite.config.js` and a `gh-pages` deploy action. |
| **Cloudflare Pages** | Best global performance | Free tier, very fast CDN, connects to GitHub like Vercel. |
| **AWS S3 + CloudFront** | Production-grade / custom domain | More setup, but cheapest at scale and fully customizable. |

**Recommended starting point:** Vercel or Netlify — connect the `zuriahn-yun/fishingapp` GitHub repo, point it at the `claude/castwise-wa-fishing-app-ks1Vd` branch (or merge to main first), and you'll have a live HTTPS URL in under two minutes with automatic re-deploys on every push.

> **Note:** CastWise WA is currently a fully static front-end app (no backend/API). Any of the above options works without a server. If WDFW live regulation data or user accounts are added later, the recommendation would shift toward Vercel/Netlify serverless functions or a lightweight Node backend.
