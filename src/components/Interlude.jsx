import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Img from './ui/Img.jsx';
import { RevealWords } from './ui/Reveal.jsx';
import { images } from '../assets/images.js';
import { site } from '../data/site.js';
import './Interlude.css';

/** Full-bleed cinematic band with counter-sliding headline lines. */
export default function Interlude() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1.02]);
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const x1 = useTransform(scrollYProgress, [0, 1], ['-16%', '8%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['16%', '-8%']);

  return (
    <section ref={ref} className="interlude" aria-label={site.closing}>
      <motion.div className="interlude__media" style={reduce ? undefined : { scale, y }} aria-hidden="true">
        <Img img={images.band} alt="" sizes="100vw" />
      </motion.div>
      <div className="interlude__shade" aria-hidden="true" />

      <div className="interlude__content">
        <p className="interlude__latin latin-script" aria-hidden="true">
          <motion.span style={reduce ? undefined : { x: x1 }}>Good Coffee</motion.span>
          <motion.span style={reduce ? undefined : { x: x2 }} className="interlude__latin--accent">
            Good Mood
          </motion.span>
        </p>
        <p className="interlude__ar">
          <RevealWords text={site.closing} />
        </p>
      </div>
    </section>
  );
}
