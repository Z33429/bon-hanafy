// Lightweight inline line-icons (24×24, inherit colour).

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

export function FacebookIcon(props) {
  return (
    <svg {...base} stroke="none" fill="currentColor" {...props}>
      <path d="M13.6 21.5v-7.7h2.6l.4-3h-3V8.9c0-.9.3-1.5 1.5-1.5h1.6V4.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.9v3h2.6v7.7h3.1Z" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 3.5h2.6l1.6 4.2-2 1.3a11.6 11.6 0 0 0 6.2 6.2l1.3-2 4.2 1.6v2.6a2 2 0 0 1-2.1 2A16.6 16.6 0 0 1 4.5 5.6a2 2 0 0 1 2.1-2.1Z" />
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.2 19.8 5.3 16A8.3 8.3 0 1 1 8.2 18.8l-4 1Z" />
      <path d="M9.2 8.6c.2-.5.5-.5.8-.5h.4c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .4-.1.6l-.4.5c-.1.1-.2.3 0 .5.5.8 1.2 1.5 2 2 .2.1.4.1.5 0l.6-.6c.2-.2.4-.2.6-.1l1.4.7c.2.1.3.3.3.5 0 .6-.3 1.3-1 1.5-.7.2-1.6.2-3-.5a8 8 0 0 1-3.2-3.2c-.6-1.2-.4-2.3 0-3.3Z" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.2s-7-6.1-7-11.6a7 7 0 0 1 14 0c0 5.5-7 11.6-7 11.6Z" />
      <circle cx="12" cy="9.6" r="2.6" />
    </svg>
  );
}

/** Arrow pointing "forward" in RTL (i.e. to the left). */
export function ArrowIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5" />
      <path d="m11 6-6 6 6 6" />
    </svg>
  );
}

export function ArrowUpIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  );
}

export function ExternalIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 5H5.5A1.5 1.5 0 0 0 4 6.5v12A1.5 1.5 0 0 0 5.5 20h12a1.5 1.5 0 0 0 1.5-1.5V15" />
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
    </svg>
  );
}

const categoryPaths = {
  hot: (
    <>
      <path d="M4 10h12.5v3.8a5.2 5.2 0 0 1-5.2 5.2H9.2A5.2 5.2 0 0 1 4 13.8V10Z" />
      <path d="M16.5 11.2h1.3a2.4 2.4 0 0 1 0 4.8h-1.6" />
      <path d="M8 3.2c-.9 1 .9 2.1 0 3.3M12 3.2c-.9 1 .9 2.1 0 3.3" />
      <path d="M3 21.5h15" />
    </>
  ),
  iced: (
    <>
      <path d="M5.5 5h13l-1.6 14.6a1.6 1.6 0 0 1-1.6 1.4H8.7a1.6 1.6 0 0 1-1.6-1.4L5.5 5Z" />
      <path d="M6.2 10h11.6" />
      <rect x="8.8" y="12" width="3" height="3" rx=".6" />
      <rect x="12.6" y="14.6" width="2.6" height="2.6" rx=".6" />
      <path d="m13.5 5 2.2-3" />
    </>
  ),
  mojito: (
    <>
      <path d="M5 19.5C5 10.5 10.8 5 20 4c-.4 9.3-6 15.5-15 15.5Z" />
      <path d="M5 19.5 13.5 11" />
      <path d="M9.5 15.2 9 12.4M12.2 12.5l2.6.4" />
    </>
  ),
  smoothie: (
    <>
      <path d="M6.5 9h11l-1.3 11a1.6 1.6 0 0 1-1.6 1.4H9.4A1.6 1.6 0 0 1 7.8 20L6.5 9Z" />
      <path d="M5.5 9a6.5 4.4 0 0 1 13 0" />
      <path d="m12.8 4.8 2.6-3.3" />
      <circle cx="10.4" cy="14.5" r="1.3" />
      <circle cx="13.6" cy="16.6" r="1.1" />
    </>
  ),
  frappe: (
    <>
      <path d="M7 11h10l-1 9.6a1.6 1.6 0 0 1-1.6 1.4H9.6A1.6 1.6 0 0 1 8 20.6L7 11Z" />
      <path d="M6 11h12" />
      <path d="M7.4 11c0-2.9 2-4.2 4.6-4.2s4.6 1.3 4.6 4.2" />
      <path d="m12.6 6.8 1.6-4.6" />
      <path d="M9 15.2c1 .7 2 .7 3 0s2-.7 3 0" />
    </>
  ),
  shake: (
    <>
      <path d="M7.8 9h8.4L15 21.2H9L7.8 9Z" />
      <path d="M7.3 9c0-1.8 1.2-2.8 2.4-2.8.4-1.7 4.2-1.7 4.6 0 1.2 0 2.4 1 2.4 2.8" />
      <path d="m13.4 5.2 2-3.4" />
      <path d="M8.4 13h7.2" />
    </>
  ),
};

export function CategoryIcon({ name, ...props }) {
  return (
    <svg {...base} {...props}>
      {categoryPaths[name]}
    </svg>
  );
}
