# AstroLife

> Endless grass. Astronaut footsteps. Stars above.  
> Recovered from [false-earth.mingjyunhung.com](https://false-earth.mingjyunhung.com/) with **GAMETA**.

**Twitter:** [@astrolifegame](https://x.com/astrolifegame)  
**Token:** `$ASTROLIFE` — soon

---

## Quick start

```bash
cd ~/Desktop/AstroLife
npm start
```

Open **http://localhost:3456**

---

## Project layout

| Path | Purpose |
|------|---------|
| `site/` | Live site — deploy this folder |
| `site/assets/` | Game engine bundle (React + Three.js / WebGPU) |
| `site/models/` | Astronaut GLB + walk / run / idle animations |
| `site/textures/` | KTX2, HDR sky, starmap |
| `site/audio/` | Grass footsteps + ambience |
| `site/vat/` | Rose vertex-animation assets |
| `site/astrolife-ui.*` | Buttons, info panel, ticker |
| `site/astrolife-optimize.js` | Performance caps (DPR, tab pause) |
| `_source/` | Full GAMETA harvest archive (backup) |

---

## Edit guide

### UI & branding
**`site/astrolife-ui.js`** — text, Twitter link, info content  
**`site/astrolife-ui.css`** — fonts, transparency, button positions

### In-game intro
**`site/assets/index-BFLB12Kf.js`** — minified; search for `ASTROLIFE` to change start screen copy

### Performance
**`site/astrolife-optimize.js`** — `MAX_DPR` caps render resolution (default `1.5`)  
Bundle also runs with `antialias: false` and `powerPreference: high-performance`

---

## Deploy (Vercel)

Repo: [github.com/rapkuryer/astrolife](https://github.com/rapkuryer/astrolife)  
Domain: **astrolife.pump**

```bash
# from repo root — Vercel reads vercel.json (outputDirectory: site)
vercel --prod

# add custom domain (once per project)
vercel domains add astrolife.pump
```

Or connect the GitHub repo in [Vercel Dashboard](https://vercel.com) — zero build step, static output from `site/`.

---

## What's inside

- 5 character animation models
- Astronaut KTX2 texture set (body + details)
- 4K starmap + HDR environment
- 8 audio files (footsteps + field loop)
- Rose VAT effects
- ~2.5 MB game bundle

---

## Links

- Game: run locally or host `site/`
- X: https://x.com/astrolifegame
- Original (archived): https://false-earth.mingjyunhung.com/
