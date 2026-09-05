# Deploying LifeV 24 Care Hospital

The site is **one Node application**. Express serves the API *and* the built React
front end from the same port, so you deploy a single app — not a separate frontend
and backend.

Requires **Node 18 or newer** (`.nvmrc` asks for 20).

---

## Hostinger (VPS / any panel with Node.js support)

| Field | Value |
|---|---|
| Application type / framework | **Node.js** |
| Node version | **20** (18 minimum) |
| Application root | the repository root |
| Install command | `npm install` |
| Build command | `npm run build` |
| Start command | `npm start` |
| Startup file *(if it asks instead of a start command)* | `server/src/index.js` |
| Port | leave blank — the app reads `process.env.PORT` |

Environment variables:

```
NODE_ENV=production
CLIENT_ORIGIN=https://lifev24carehospital.com
```

`CLIENT_ORIGIN` only matters if you ever call the API from another domain. The site
itself is same-origin, so it works without it.

### The order matters

`npm run build` **must** run before `npm start`. The Express server looks for
`client/dist` and only serves the website if that folder exists. If you start without
building, `/api/health` will answer but every page will 404.

---

## Any other Node host

Railway, Render, Fly.io, a plain VPS, cPanel with Node — same three commands:

```bash
npm install      # installs root + client + server (npm workspaces)
npm run build    # builds the React app into client/dist
npm start        # serves API + site on $PORT
```

On a bare VPS, run it under a process manager and put nginx in front:

```bash
npm install -g pm2
pm2 start server/src/index.js --name lifev24care --env production
pm2 save && pm2 startup
```

---

## Troubleshooting

**`sh: vite: command not found` during build**
The host installed only the root dependencies. This repo uses npm workspaces, so a
plain `npm install` at the root installs `client/` and `server/` too — make sure the
install command is `npm install` and that it runs in the repository root. If your
panel runs `npm ci`, that works as well.

**Build succeeds but every page is blank or shows an error box**
`client/dist` is missing or the API is not reachable. Confirm the build step ran, and
open `https://yourdomain/api/health` — it should return JSON.

**`npm install` fails on `sharp`**
`sharp` is an optional dependency used only by the local photo scripts. Install with
`npm install --omit=optional` and everything still builds and runs.

**Node version errors (`Unexpected token`, `SyntaxError`, `Unsupported engine`)**
The host is on Node 16 or older. Raise it to 20 in the panel.

**Port already in use**
Do not hardcode a port. The app uses `process.env.PORT`; leave the port field empty.

---

## Static-only hosting (shared hosting, no Node)

Hostinger's shared/Premium/Business plans are PHP-only and cannot run Node. Uploading
`client/dist` there would load the site, but every page would be empty — all content
(doctors, departments, packages, articles) is fetched from the Node API at runtime.

If you are on shared hosting, the site needs converting to a static build: content
inlined at build time, and the appointment and contact forms pointed at a hosted form
service. Ask and it can be done — it is a contained change.
