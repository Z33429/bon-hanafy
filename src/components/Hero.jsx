import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Img from './ui/Img.jsx';
import Counter from './ui/Counter.jsx';
import { Bean, RotatingBadge, Steam } from './ui/Decor.jsx';
import Logo from './Logo.jsx';
import { ArrowIcon } from './Icons.jsx';
import { images } from '../assets/images.js';
import { menuStats } from '../data/menu.js';
import { site } from '../data/site.js';
import { easeOut, fadeUp, stagger, wordReveal } from './ui/motion.js';
import './Hero.css';

const line1 = 'بن أصيل';
const line2 = 'بطعم لا يُنسى';

export default function Hero({ ready }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const yPill = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const yCircle = useTransform(scrollYProgress, [0, 1], ['0%', '-38%']);
  const yBadge = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);
  const yWord = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const yCopy = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const yBeans = useTransform(scrollYProgress, [0, 1], ['0%', '-90%']);

  const state = ready ? 'show' : 'hidden';
  const p = (v) => (reduce ? undefined : v);

  return (
    <section id="home" ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__glow hero__glow--a" />
        <span className="hero__glow hero__glow--b" />
        <motion.span className="hero__word" style={{ y: p(yWord) }}>
          قهوة
        </motion.span>
      </div>

      <div className="container hero__grid">
        <motion.div
          className="hero__copy"
          initial="hidden"
          animate={state}
          variants={stagger(0.12, 0.2)}
          style={{ y: p(yCopy), opacity: p(fade) }}
        >
          <motion.p className="eyebrow hero__eyebrow" variants={fadeUp}>
            {site.slogan}
          </motion.p>

          <h1 id="hero-title" className="hero__title">
            <span className="sr-only">{site.name} — </span>
            <motion.span className="hero__line" variants={stagger(0.1)}>
              {line1.split(' ').map((w) => (
                <motion.span key={w} className="rw" variants={wordReveal}>
                  {w}
                </motion.span>
              ))}
            </motion.span>
            <motion.span className="hero__line hero__line--accent" variants={stagger(0.1)}>
              {line2.split(' ').map((w) => (
                <motion.span key={w} className="rw" variants={wordReveal}>
                  {w}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p className="hero__lead" variants={fadeUp}>
            من القهوة التركي الفاتح إلى الاسبانيش لاتيه، ومن الموهيتو المنعش إلى الميلك تشيك..
            مشروبك المفضل في انتظارك في <strong>{site.name}</strong> بمركز بدر.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <a href="#menu" className="btn btn--primary">
              اكتشف المنيو
              <ArrowIcon className="btn__arrow" />
            </a>
            <a href="#visit" className="btn btn--ghost">
              زورنا
            </a>
          </motion.div>

          <motion.ul className="hero__stats" variants={fadeUp} aria-label="المنيو في أرقام">
            <li>
              <strong>
                <Counter to={menuStats.items} />
              </strong>
              <span>مشروبًا</span>
            </li>
            <li>
              <strong>
                <Counter to={menuStats.categories} />
              </strong>
              <span>أقسام</span>
            </li>
            <li>
              <strong>
                <Counter to={menuStats.minPrice} />
                <small>{site.currency}</small>
              </strong>
              <span>أسعار تبدأ من</span>
            </li>
          </motion.ul>
        </motion.div>

        <div className="hero__visual">
          <motion.div className="hero__pill-wrap" style={{ y: p(yPill) }}>
            <motion.span
              className="hero__pill-outline"
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={ready ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 1.4, ease: easeOut, delay: 0.7 }}
            />
            <motion.figure
              className="hero__pill"
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={ready ? { clipPath: 'inset(0% 0% 0% 0%)' } : undefined}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            >
              <motion.div
                className="hero__pill-img"
                initial={{ scale: 1.35 }}
                animate={ready ? { scale: 1 } : undefined}
                transition={{ duration: 2.4, ease: easeOut, delay: 0.15 }}
              >
                <Img
                  img={images.heroPour}
                  alt="باريستا يرسم لاتيه آرت على فنجان قهوة"
                  sizes="(max-width: 760px) 62vw, 440px"
                  loading="eager"
                  fetchPriority="high"
                />
              </motion.div>
            </motion.figure>
            <Steam className="hero__steam" />
          </motion.div>

          <motion.div className="hero__circle-wrap" style={{ y: p(yCircle) }}>
            <motion.div
              className="hero__circle"
              initial={{ opacity: 0, scale: 0.5, rotate: -40 }}
              animate={ready ? { opacity: 1, scale: 1, rotate: 0 } : undefined}
              transition={{ duration: 1.5, ease: easeOut, delay: 0.75 }}
            >
              <Img img={images.heroTop} alt="" sizes="(max-width: 760px) 40vw, 260px" />
            </motion.div>
          </motion.div>

          <motion.div className="hero__badge-wrap" style={{ y: p(yBadge) }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={ready ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 1.2, ease: easeOut, delay: 1 }}
            >
              <RotatingBadge className="hero__badge">
                <Logo className="hero__badge-logo" />
              </RotatingBadge>
            </motion.div>
          </motion.div>

          <motion.div className="hero__beans" style={{ y: p(yBeans) }} aria-hidden="true">
            <Bean className="hero__bean hero__bean--1" />
            <Bean className="hero__bean hero__bean--2" />
            <Bean className="hero__bean hero__bean--3" />
            <Bean className="hero__bean hero__bean--4" />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span>اكتشف المزيد</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
