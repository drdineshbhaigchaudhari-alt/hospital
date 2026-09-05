// Tiny JSON-file store for form submissions. Swap for a real database
// (Postgres, MongoDB) by replacing the two exported functions below.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, '../data');
const FILE = path.join(DATA_DIR, 'submissions.json');

const empty = { appointments: [], contacts: [], subscribers: [], feedback: [] };

let writeQueue = Promise.resolve();

async function readAll() {
  try {
    const raw = await fs.readFile(FILE, 'utf8');
    return { ...empty, ...JSON.parse(raw) };
  } catch (err) {
    if (err.code === 'ENOENT') return { ...empty };
    throw err;
  }
}

export async function save(collection, record) {
  // Serialise writes so two concurrent submissions cannot clobber each other.
  writeQueue = writeQueue.then(async () => {
    const db = await readAll();
    if (!db[collection]) db[collection] = [];
    db[collection].push(record);
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(FILE, JSON.stringify(db, null, 2), 'utf8');
  });
  await writeQueue;
  return record;
}

export async function list(collection) {
  const db = await readAll();
  return db[collection] ?? [];
}

export async function counts() {
  const db = await readAll();
  return Object.fromEntries(Object.entries(db).map(([k, v]) => [k, v.length]));
}
