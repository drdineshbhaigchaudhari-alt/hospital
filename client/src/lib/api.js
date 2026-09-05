const BASE = import.meta.env.VITE_API_URL || '/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  let payload = null;
  try {
    payload = await res.json();
  } catch {
    payload = null;
  }

  if (!res.ok) {
    const error = new Error(payload?.error || `Request failed (${res.status})`);
    error.status = res.status;
    error.fieldErrors = payload?.errors || null;
    throw error;
  }
  return payload;
}

export const api = {
  bootstrap: () => request('/bootstrap'),
  hospital: () => request('/hospital'),
  specialities: () => request('/specialities'),
  speciality: (slug) => request(`/specialities/${slug}`),
  doctors: (params = {}) => {
    const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v)).toString();
    return request(`/doctors${qs ? `?${qs}` : ''}`);
  },
  doctor: (slug) => request(`/doctors/${slug}`),
  facilities: () => request('/facilities'),
  packages: () => request('/packages'),
  testimonials: () => request('/testimonials'),
  faqs: () => request('/faqs'),
  insurers: () => request('/insurers'),
  blogs: (params = {}) => {
    const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v)).toString();
    return request(`/blogs${qs ? `?${qs}` : ''}`);
  },
  blog: (slug) => request(`/blogs/${slug}`),

  bookAppointment: (body) => request('/appointments', { method: 'POST', body: JSON.stringify(body) }),
  sendMessage: (body) => request('/contact', { method: 'POST', body: JSON.stringify(body) }),
  subscribe: (body) => request('/subscribe', { method: 'POST', body: JSON.stringify(body) })
};

export default api;
