// Small hand-rolled validators. No schema library needed for four forms.

const NAME_RE = /^[a-zA-Zऀ-ॿ .'-]{2,60}$/; // Latin + Devanagari
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const PHONE_RE = /^(\+91[\s-]?)?[6-9]\d{9}$/; // Indian mobile numbers

const clean = (v) => (typeof v === 'string' ? v.trim() : '');

export function validateAppointment(body) {
  const errors = {};
  const data = {
    name: clean(body.name),
    phone: clean(body.phone).replace(/[\s-]/g, ''),
    email: clean(body.email),
    speciality: clean(body.speciality),
    doctor: clean(body.doctor),
    date: clean(body.date),
    slot: clean(body.slot),
    message: clean(body.message).slice(0, 1000),
    consent: body.consent === true || body.consent === 'true'
  };

  if (!NAME_RE.test(data.name)) errors.name = 'Please enter your full name (2-60 letters).';
  if (!PHONE_RE.test(data.phone)) errors.phone = 'Enter a valid 10-digit Indian mobile number.';
  if (data.email && !EMAIL_RE.test(data.email)) errors.email = 'That email address does not look right.';
  if (!data.speciality) errors.speciality = 'Please choose a department.';
  if (!data.date) {
    errors.date = 'Please choose a preferred date.';
  } else {
    const chosen = new Date(`${data.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(chosen.getTime())) errors.date = 'That date is not valid.';
    else if (chosen < today) errors.date = 'Please choose today or a future date.';
  }
  if (!data.slot) errors.slot = 'Please choose a preferred time.';
  if (!data.consent) errors.consent = 'Please agree to be contacted so we can confirm the appointment.';

  return { data, errors, valid: Object.keys(errors).length === 0 };
}

export function validateContact(body) {
  const errors = {};
  const data = {
    name: clean(body.name),
    phone: clean(body.phone).replace(/[\s-]/g, ''),
    email: clean(body.email),
    subject: clean(body.subject),
    message: clean(body.message).slice(0, 2000)
  };

  if (!NAME_RE.test(data.name)) errors.name = 'Please enter your full name.';
  if (!PHONE_RE.test(data.phone)) errors.phone = 'Enter a valid 10-digit Indian mobile number.';
  if (data.email && !EMAIL_RE.test(data.email)) errors.email = 'That email address does not look right.';
  if (!data.subject) errors.subject = 'Please choose what your message is about.';
  if (data.message.length < 10) errors.message = 'Please tell us a little more (at least 10 characters).';

  return { data, errors, valid: Object.keys(errors).length === 0 };
}

export function validateSubscriber(body) {
  const errors = {};
  const data = { email: clean(body.email).toLowerCase() };
  if (!EMAIL_RE.test(data.email)) errors.email = 'Please enter a valid email address.';
  return { data, errors, valid: Object.keys(errors).length === 0 };
}
