import { LOGO_PATH, LOGO_VIEWBOX } from './logoPath.js';

/** The بن حنفي logo as a single-colour vector. Colour follows CSS `color`. */
export default function Logo({ className, label }) {
  return (
    <svg
      className={className}
      viewBox={LOGO_VIEWBOX}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      <path fill="currentColor" fillRule="evenodd" d={LOGO_PATH} />
    </svg>
  );
}
