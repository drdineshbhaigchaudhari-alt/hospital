import 'dotenv/config';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

import contentRoutes from './routes/content.js';
import formRoutes from './routes/forms.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === 'production';

app.set('trust proxy', 1);
app.use(
  helmet({
    // The SPA is served from the same origin in production; relax CORP so
    // images and the built bundle load without extra headers.
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: false
  })
);
app.use(compression());
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));
app.use(morgan(isProd ? 'combined' : 'dev'));

const allowed = (process.env.CLIENT_ORIGIN || 'http://localhost:5173,http://localhost:4173')
  .split(',')
  .map((s) => s.trim());

// CORS is only needed for the API. It is mounted on /api so that the built SPA,
// which is served from this same origin, is never blocked by it. A disallowed
// origin simply gets no CORS headers rather than a thrown 500.
app.use(
  '/api',
  cors({
    origin(origin, cb) {
      cb(null, !origin || allowed.includes(origin));
    }
  })
);

app.get('/api/health', (_req, res) =>
  res.json({ ok: true, service: 'lifev24care-api', time: new Date().toISOString() })
);

app.use('/api', contentRoutes);
app.use('/api', formRoutes);

// ---- Serve the built React app in production ----
const clientDist = path.resolve(__dirname, '../../client/dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist, { maxAge: isProd ? '7d' : 0 }));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.use('/api', (_req, res) => res.status(404).json({ ok: false, error: 'Endpoint not found' }));

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error('[error]', err.message);
  const status = err.status || 500;
  res.status(status).json({
    ok: false,
    error: isProd && status === 500 ? 'Something went wrong at our end.' : err.message
  });
});

app.listen(PORT, () => {
  console.log(`\n  LifeV 24 Care API running on http://localhost:${PORT}`);
  console.log(`  Health check: http://localhost:${PORT}/api/health\n`);
});
