import { useId } from 'react';
import { motion, useReducedMotion } from 'motion/react';

/** A single roasted coffee bean. */
export function Bean({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 56" aria-hidden="true" focusable="false">
      <ellipse cx="20" cy="28" rx="16.5" ry="25" fill="currentColor" />
      <path
        d="M21.5 4.5c-9 10.5 6.5 24.5-2.5 47"
        fill="none"
        stroke="rgba(0,0,0,.38)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <ellipse cx="13" cy="17" rx="3" ry="7" fill="rgba(255,255,255,.12)" transform="rotate(18 13 17)" />
    </svg>
  );
}

const steamPaths = [
  'M34 118C18 96 50 80 32 56S38 18 30 4',
  'M60 118C44 92 78 76 60 50S70 16 60 2',
  'M86 118C72 96 104 80 88 56S94 20 86 6',
];

/** Rising steam lines, echoing the steam swirl in the logo. */
export function Steam({ className }) {
  const reduce = useReducedMotion();
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true" focusable="false">
      {steamPaths.map((d, i) =>
        reduce ? (
          <path key={d} d={d} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity={0.45} />
        ) : (
          <motion.path
            key={d}
            d={d}
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0, y: 10 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 0.85, 0], y: [10, -4, -20] }}
            transition={{ duration: 4.2, times: [0, 0.55, 1], repeat: Infinity, delay: i * 0.9, ease: 'easeInOut' }}
          />
        ),
      )}
    </svg>
  );
}

/** Slowly rotating circular text badge. */
export function RotatingBadge({ text = 'GOOD COFFEE · GOOD MOOD · ', className = '', children }) {
  const id = `ring-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <div className={`rbadge ${className}`} dir="ltr">
      <svg viewBox="0 0 200 200" className="rbadge__ring" aria-hidden="true" focusable="false">
        <defs>
          <path id={id} d="M100 100m-78 0a78 78 0 1 1 156 0a78 78 0 1 1-156 0" />
        </defs>
        <text>
          <textPath href={`#${id}`} textLength="486" lengthAdjust="spacing">
            {text.repeat(2)}
          </textPath>
        </text>
      </svg>
      <div className="rbadge__center">{children}</div>
    </div>
  );
}
