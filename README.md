# Skystay 3D — Hotel Tycoon

A single-file 3D hotel tycoon game (three.js). Build rooms, hire staff, add stairs and sprinklers, expand your land left and right without limit, stack unlimited floors, and watch the seasons change with the months.

## Play / deploy

`index.html` is the whole game (three.js is bundled inside, no build step, works offline).

- **GitHub Pages:** in the repo go to *Settings → Pages → Source: Deploy from a branch → main / (root)*.
- **Netlify / Vercel / Cloudflare Pages:** import the repo, no build command, output directory `.`
- Installable on phones via "Add to Home Screen" (manifest + service worker included).

This standalone version is single player; progress saves in each player's own browser.

## Mac app

```
cd mac-app
npm install
npm run build
```
Produces unsigned `Skystay.app` bundles for Apple Silicon and Intel in `mac-app/out/`.

## Folders

- `index.html` — the deployable game
- `source/skystay3d-claude-version.html` — the version published on claude.ai (loads three.js from a CDN and includes multiplayer through Claude's artifact storage)
- `legacy-2d/` — the earlier 2D version
- `mac-app/` — Electron wrapper
