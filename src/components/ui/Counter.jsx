import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import { easeOut } from './motion.js';

/** Counts up to `to` the first time it scrolls into view. */
export default function Counter({ to, duration = 1.8 }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return undefined;
    if (reduce) {
      setValue(to);
      return undefined;
    }
    const controls = animate(0, to, {
      duration,
      ease: easeOut,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [seen, reduce, to, duration]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">{value}</span>
      <span className="sr-only">{to}</span>
    </span>
  );
}
