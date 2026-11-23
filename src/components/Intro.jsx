import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Logo from './Logo.jsx';
import { site } from '../data/site.js';
import { easeInOut, easeOut } from './ui/motion.js';
import './Intro.css';

/** Opening curtain: the logo “fills up” like a cup, then the curtain lifts. */
export default function Intro({ onDone }) {
  const reduce = useReducedMotion();
  const done = useRef(onDone);
  done.current = onDone;

  useEffect(() => {
    const t = setTimeout(() => done.current(), reduce ? 500 : 2000);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <motion.div
      className="intro"
      aria-hidden="true"
      initial={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: easeInOut }}
    >
      <div className="intro__inner">
        <div className="intro__logo">
          <Logo className="intro__ghost" />
          <motion.div
            className="intro__fill"
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
          >
            <Logo />
          </motion.div>
        </div>
        <motion.p
          className="intro__tag"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.9 }}
        >
          {site.tagline}
        </motion.p>
      </div>
      <motion.span
        className="intro__bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.9, ease: easeInOut }}
      />
    </motion.div>
  );
}
