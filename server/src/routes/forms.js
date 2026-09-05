import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { customAlphabet } from 'nanoid';
import { save, counts } from '../store.js';
import { validateAppointment, validateContact, validateSubscriber } from '../middleware/validate.js';

const router = Router();
const refId = customAlphabet('ABCDEFGHJKLMNPQRSTUVWXYZ23456789', 6);

// Forms are public, so keep them behind a modest limit.
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 12,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many submissions from this device. Please try again in a few minutes, or call us directly.' }
});

// Honeypot: real users never fill a hidden field.
const isBot = (body) => Boolean(body && String(body.website || '').trim());

router.post('/appointments', formLimiter, async (req, res, next) => {
  try {
    if (isBot(req.body)) return res.status(202).json({ ok: true, reference: 'IGNORED' });
    const { data, errors, valid } = validateAppointment(req.body);
    if (!valid) return res.status(422).json({ ok: false, errors });

    const record = {
      id: `APT-${refId()}`,
      ...data,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    await save('appointments', record);

    res.status(201).json({
      ok: true,
      reference: record.id,
      message: `Thank you ${data.name.split(' ')[0]}. Your request is received. Our front desk will call you on ${data.phone} to confirm the slot, usually within 2 working hours.`
    });
  } catch (err) {
    next(err);
  }
});

router.post('/contact', formLimiter, async (req, res, next) => {
  try {
    if (isBot(req.body)) return res.status(202).json({ ok: true, reference: 'IGNORED' });
    const { data, errors, valid } = validateContact(req.body);
    if (!valid) return res.status(422).json({ ok: false, errors });

    const record = {
      id: `MSG-${refId()}`,
      ...data,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    await save('contacts', record);

    res.status(201).json({
      ok: true,
      reference: record.id,
      message: 'Your message has been received. We reply to most queries within one working day. For anything urgent, please call our 24x7 helpline.'
    });
  } catch (err) {
    next(err);
  }
});

router.post('/subscribe', formLimiter, async (req, res, next) => {
  try {
    if (isBot(req.body)) return res.status(202).json({ ok: true });
    const { data, errors, valid } = validateSubscriber(req.body);
    if (!valid) return res.status(422).json({ ok: false, errors });

    await save('subscribers', { email: data.email, createdAt: new Date().toISOString() });
    res.status(201).json({ ok: true, message: 'You are subscribed. We send one health digest a month, nothing else.' });
  } catch (err) {
    next(err);
  }
});

// Simple counters, useful for a future admin screen.
router.get('/submissions/summary', async (_req, res, next) => {
  try {
    res.json({ ok: true, counts: await counts() });
  } catch (err) {
    next(err);
  }
});

export default router;
