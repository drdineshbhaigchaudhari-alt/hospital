/**
 * Two icon sets:
 *  <Icon name="phone" />      24x24 stroke icons used across the UI
 *  <SpecIcon name="heart" />  filled department glyphs (same shapes as the artwork)
 */

const S = {
  phone: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z|M22 7 12 13 2 7',
  pin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z|C12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  clock: 'C12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z|M12 6v6l4 2',
  calendar: 'M8 2v4M16 2v4|M3 6h18v16H3z|M3 11h18',
  check: 'M20 6 9 17l-5-5',
  checkCircle: 'C12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z|M8 12l3 3 5-6',
  plus: 'M12 5v14M5 12h14',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  arrowUp: 'M12 19V5M6 11l6-6 6 6',
  chevronDown: 'm6 9 6 6 6-6',
  chevronLeft: 'm15 18-6-6 6-6',
  chevronRight: 'm9 18 6-6-6-6',
  menu: 'M3 6h18M3 12h18M3 18h18',
  close: 'M18 6 6 18M6 6l12 12',
  search: 'C11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z|m21 21-4.3-4.3',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2|C12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2|C9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z|M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
  heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21.2l7.7-7.8 1.1-1a5.5 5.5 0 0 0 0-7.8Z',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z',
  shieldCheck: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z|m9 12 2 2 4-4',
  stethoscope:
    'M4.5 2v5.5a5.5 5.5 0 0 0 11 0V2|M4.5 2h-2M15.5 2h2|M10 13v2.5a5 5 0 0 0 10 0V15|C20 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  ambulance: 'M3 7h11v10H3z|M14 10h4l3 4v3h-7z|M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z|M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z|M8 10h2M9 9v3',
  rupee: 'M6 3h12M6 8h12M14 21 6 13h3a5 5 0 0 0 0-10',
  award: 'C12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z|m8.2 13.9-1.4 7.3 5.2-3 5.2 3-1.4-7.3',
  star: 'm12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2-6.2 3.2L7 14.2l-5-4.9 6.9-1Z',
  quote: 'M7 7h4v5a5 5 0 0 1-5 5V7Zm10 0h4v5a5 5 0 0 1-5 5V7Z',
  send: 'm22 2-7 20-4-9-9-4Z|M22 2 11 13',
  alert: 'M12 9v4M12 17h.01|M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z',
  info: 'C12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z|M12 16v-4M12 8h.01',
  bed: 'M2 20V8M2 12h16a4 4 0 0 1 4 4v4|M2 16h20|C7 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  activity: 'M22 12h-4l-3 9L9 3l-3 9H2',
  building: 'M3 21h18M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17|M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1',
  facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z',
  instagram: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z|C12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z|M17.5 6.5h.01',
  youtube:
    'M22.5 6.4a3 3 0 0 0-2.1-2.1C18.6 3.8 12 3.8 12 3.8s-6.6 0-8.4.5A3 3 0 0 0 1.5 6.4 31 31 0 0 0 1 12a31 31 0 0 0 .5 5.6 3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-5.6Z|m10 15 5-3-5-3Z',
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v1.5A6 6 0 0 1 16 8Z|M6 9H2v12h4z|C4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  whatsapp:
    'M20.5 3.5A11 11 0 0 0 3.2 17L2 22l5.2-1.2A11 11 0 1 0 20.5 3.5Z|M8.5 8c.3 0 .6 0 .8.5l1 2c.1.3 0 .5-.2.7l-.5.6c-.2.2-.2.4 0 .7a8 8 0 0 0 3.2 3c.3.2.5.1.7-.1l.6-.6c.2-.2.4-.3.7-.2l2 1c.4.2.5.4.5.7 0 1.2-1 2.2-2.2 2.2-3.6 0-8-4.4-8-8C6.3 9 7.3 8 8.5 8Z'
};

export function Icon({ name, size = 20, strokeWidth = 1.9, className = '', ...rest }) {
  const raw = S[name];
  if (!raw) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {/* a leading "C" in the table marks a closed shape, expanded to a moveto here */}
      {raw.split('|').map((d, i) => (
        <path key={i} d={d.startsWith('C') ? `M${d.slice(1)}` : d} />
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------- */
/* Department glyphs - filled shapes, drawn on a -100..100 canvas        */
/* -------------------------------------------------------------------- */

const G = {
  heart: <path d="M0 62C-70 12-78-34-46-54c22-14 40-2 46 14 6-16 24-28 46-14 32 20 24 66-46 116Z" />,
  brain: (
    <>
      <path d="M-6-64c-24-6-44 8-44 28 0 5 1 9 3 13-12 8-14 26-3 36-4 16 8 31 26 31 6 0 13-2 18-5Z" />
      <path d="M6-64c24-6 44 8 44 28 0 5-1 9-3 13 12 8 14 26 3 36 4 16-8 31-26 31-6 0-13-2-18-5Z" opacity=".74" />
      <g fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity=".5">
        <path d="M-30-36c10 2 14 10 12 20M-34 6c12 0 18 8 18 20" />
        <path d="M30-36c-10 2-14 10-12 20M34 6c-12 0-18 8-18 20" />
      </g>
    </>
  ),
  bone: (
    <>
      <rect x="-46" y="-14" width="92" height="28" rx="14" />
      <circle cx="-52" cy="-22" r="20" />
      <circle cx="-52" cy="20" r="20" />
      <circle cx="52" cy="-22" r="20" />
      <circle cx="52" cy="20" r="20" />
    </>
  ),
  stomach: (
    <path d="M-40-58c0-9 7-16 16-16s16 7 16 16v12c0 9 6 13 15 16 25 7 37 27 37 48 0 28-22 50-50 50-24 0-44-16-49-38l27-7c3 11 12 18 22 18 14 0 24-11 24-24 0-12-9-22-22-25-24-5-36-19-36-38Z" />
  ),
  kidney: (
    <>
      <path d="M-26-58c22 0 38 26 38 58s-16 58-38 58c-18 0-32-15-32-33 0-9 5-15 5-21s-5-12-5-21c0-23 14-41 32-41Z" />
      <path d="M28-40c15 5 26 21 26 40s-11 35-26 40c6-12 10-25 10-40s-4-28-10-40Z" opacity=".62" />
    </>
  ),
  urology: (
    <>
      <path d="M-46-6c0-18 20-30 46-30s46 12 46 30c0 30-20 54-46 66-26-12-46-36-46-66Z" />
      <path d="M-8-64h16v34h-16Z" />
      <path d="M-30 46c-6 12-4 22 4 28M30 46c6 12 4 22-4 28" fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round" />
    </>
  ),
  ribbon: (
    <>
      <path d="M0-66q34 34 20 70l-20 60-20-60q-14-36 20-70Z" />
      <path d="M-22 6-48 52l30-8Zm44 0 26 46-30-8Z" opacity=".7" />
    </>
  ),
  lungs: (
    <>
      <rect x="-5" y="-66" width="10" height="52" rx="5" />
      <path d="M-8-20q0-18-22-14-30 6-34 52-4 42 16 46 34 6 40-30Z" />
      <path d="M8-20q0-18 22-14 30 6 34 52 4 42-16 46-34 6-40-30Z" />
    </>
  ),
  mother: (
    <>
      <circle cx="-14" cy="-42" r="24" />
      <path d="M-56 60q0-50 42-50t42 50Z" />
      <circle cx="40" cy="10" r="18" />
      <path d="M18 62q0-28 22-28t22 28Z" />
    </>
  ),
  child: (
    <>
      <circle cx="0" cy="-34" r="30" />
      <path d="M-44 62q0-52 44-52t44 52Z" />
    </>
  ),
  scalpel: (
    <>
      <path d="M-56 34 2-24q22-22 34-10t-10 34l-58 58Z" />
      <rect x="14" y="26" width="60" height="16" rx="8" transform="rotate(-45 44 34)" />
    </>
  ),
  ear: (
    <path d="M-6-64q46 0 46 44 0 30-24 44-16 10-16 28 0 14-18 14t-20-22q0-26 22-40 16-10 16-24 0-16-16-16-14 0-16 14-2 12-18 10t-14-20q4-32 58-32Z" />
  ),
  eye: (
    <>
      <path d="M-70 0q70-54 140 0-70 54-140 0Z" />
      <circle cx="0" cy="0" r="24" fill="#fff" opacity=".85" />
      <circle cx="0" cy="0" r="13" />
    </>
  ),
  skin: (
    <>
      <rect x="-56" y="-56" width="112" height="112" rx="26" />
      <g fill="#fff" opacity=".55">
        <circle cx="-20" cy="-16" r="9" />
        <circle cx="18" cy="6" r="7" />
        <circle cx="-6" cy="30" r="6" />
        <circle cx="26" cy="-30" r="5" />
      </g>
    </>
  ),
  stethoscope: (
    <>
      <g fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round">
        <path d="M-46-60v30q0 40 34 40t34-40v-30" />
        <path d="M22 10v18q0 30 26 30t26-30v-8" />
      </g>
      <circle cx="74" cy="-4" r="16" />
    </>
  ),
  physio: (
    <>
      <circle cx="-6" cy="-52" r="20" />
      <path d="M-16-26q30-6 40 18l24 40-22 12-22-34-6 44 16 40-22 10-24-50-30 26-16-18 40-42Z" />
    </>
  ),
  cross: (
    <>
      <rect x="-19" y="-60" width="38" height="120" rx="12" />
      <rect x="-60" y="-19" width="120" height="38" rx="12" />
    </>
  )
};

export function SpecIcon({ name, size = 30, className = '' }) {
  const glyph = G[name] || G.cross;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-90 -90 180 180"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {glyph}
    </svg>
  );
}

export default Icon;
