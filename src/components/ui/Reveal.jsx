import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Img from './Img.jsx';
import { easeInOut, easeOut, fadeUp, inView, stagger, wordReveal } from './motion.js';

/** Fades & lifts its children into view once. */
export function FadeUp({ as = 'div', delay = 0, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={{
        hidden: fadeUp.hidden,
        show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Splits text into words that blur-rise into place one after another. */
export function RevealWords({ text, className, wordClassName, delay = 0, step = 0.09 }) {
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={stagger(step, delay)}
    >
      {text.split(' ').map((w, i) => (
        <motion.span key={`${w}-${i}`} className={`rw ${wordClassName ?? ''}`} variants={wordReveal}>
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * Image with a sliding colour curtain, a slow zoom-out and optional scroll parallax.
 * The parent decides the shape (aspect-ratio / border-radius) via `className`.
 */
export function RevealImage({
  img,
  alt,
  sizes,
  className = '',
  parallax = 8,
  delay = 0,
  curtain = 'var(--c-caramel)',
  loading,
  imgStyle,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-parallax}%`, `${parallax}%`]);

  return (
    <div ref={ref} className={`rimg ${className}`}>
      <motion.div className="rimg__inner" style={parallax && !reduce ? { y } : undefined}>
        <motion.div
          className="rimg__zoom"
          initial={{ scale: 1.28 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: easeOut, delay }}
        >
          <Img img={img} alt={alt} sizes={sizes} loading={loading} style={imgStyle} />
        </motion.div>
      </motion.div>
      <motion.span
        className="rimg__curtain"
        style={{ background: curtain }}
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.15, ease: easeInOut, delay }}
        aria-hidden="true"
      />
    </div>
  );
}

/** Section kicker: “01 — label”. */
export function Kicker({ num, label, className = '' }) {
  return (
    <FadeUp as="p" className={`kicker ${className}`}>
      <span className="kicker__num" dir="ltr">
        {num}
      </span>
      <span className="kicker__line" aria-hidden="true" />
      <span className="kicker__label">{label}</span>
    </FadeUp>
  );
}
