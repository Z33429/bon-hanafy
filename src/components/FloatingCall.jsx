import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { PhoneIcon } from './Icons.jsx';
import { site } from '../data/site.js';
import { easeOut } from './ui/motion.js';

/**
 * Floating call button: appears after the hero and steps aside once the
 * contact section (which has its own call buttons) comes into view.
 */
export default function FloatingCall() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const visit = document.getElementById('visit');
    const visitTop = visit ? visit.getBoundingClientRect().top + y : Infinity;
    setShow(y > 720 && y + window.innerHeight * 0.75 < visitTop);
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          key="fab"
          href={site.phoneHref}
          className="fab"
          aria-label={`اتصل بنا: ${site.phoneDisplay}`}
          initial={{ opacity: 0, scale: 0.4, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 20 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <span className="fab__pulse" aria-hidden="true" />
          <PhoneIcon />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
