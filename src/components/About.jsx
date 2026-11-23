import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { FadeUp, Kicker, RevealImage, RevealWords } from './ui/Reveal.jsx';
import Counter from './ui/Counter.jsx';
import { Bean, RotatingBadge } from './ui/Decor.jsx';
import Logo from './Logo.jsx';
import { images } from '../assets/images.js';
import { menuStats } from '../data/menu.js';
import { site } from '../data/site.js';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const ySmall = useTransform(scrollYProgress, [0, 1], ['18%', '-28%']);
  const yBadge = useTransform(scrollYProgress, [0, 1], ['40%', '-40%']);
  const yBean = useTransform(scrollYProgress, [0, 1], ['80%', '-120%']);

  return (
    <section id="about" ref={ref} className="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__copy">
          <Kicker num="01" label="عن بن حنفي" />

          <h2 id="about-title" className="section-title about__title">
            <RevealWords text="قهوة حلوة.." className="about__title-line" />
            <RevealWords text="ومزاج أحلى" className="about__title-line about__title-line--accent" delay={0.2} />
          </h2>

          <FadeUp className="about__text">
            <p>
              في <strong>{site.name}</strong>، فنجان القهوة ليس مجرد مشروب، بل لحظة تعدّل مزاجك وتصنع يومك.
            </p>
            <p>
              قائمتنا تجمع {menuStats.items} مشروبًا في {menuStats.categories} أقسام: من القهوة التركي والفرنساوي
              والبندق، إلى الاسبريسو واللاتيه والموكا والكورتادو، ومن القهوة المثلجة إلى الموهيتو والسموزي والفرابيه
              والميلك تشيك.
            </p>
          </FadeUp>

          <FadeUp className="about__signature" delay={0.1}>
            <span className="about__tagline">{site.tagline}</span>
            <span className="about__script latin-script">Good Coffee, Good Mood</span>
          </FadeUp>
        </div>

        <div className="about__visual">
          <span className="about__frame-outline" aria-hidden="true" />
          <RevealImage
            className="about__main"
            img={images.aboutPour}
            alt="سكب الحليب لرسم اللاتيه آرت في فنجان القهوة"
            sizes="(max-width: 960px) 86vw, 520px"
            imgStyle={{ objectPosition: '58% 50%' }}
          />
          <motion.div className="about__small-wrap" style={{ y: reduce ? undefined : ySmall }}>
            <RevealImage
              className="about__small"
              img={images.aboutBeans}
              alt="حبوب بن محمصة بين اليدين"
              sizes="(max-width: 960px) 44vw, 260px"
              parallax={0}
              delay={0.25}
              curtain="var(--c-espresso)"
              imgStyle={{ objectPosition: '62% 40%' }}
            />
          </motion.div>
          <motion.div className="about__badge-wrap" style={{ y: reduce ? undefined : yBadge }}>
            <RotatingBadge className="about__badge">
              <Logo className="about__badge-logo" />
            </RotatingBadge>
          </motion.div>
          <motion.div className="about__bean" style={{ y: reduce ? undefined : yBean }} aria-hidden="true">
            <Bean />
          </motion.div>
        </div>
      </div>

      <div className="container">
        <ul className="about__stats" aria-label="بن حنفي في أرقام">
          <FadeUp as="li" className="about__stat">
            <strong>
              <Counter to={menuStats.items} />
            </strong>
            <span>مشروبًا في القائمة</span>
          </FadeUp>
          <FadeUp as="li" className="about__stat" delay={0.1}>
            <strong>
              <Counter to={menuStats.categories} />
            </strong>
            <span>أقسام متنوعة</span>
          </FadeUp>
          <FadeUp as="li" className="about__stat" delay={0.2}>
            <strong>
              <Counter to={menuStats.minPrice} />
              <small>{site.currency}</small>
            </strong>
            <span>أسعار تبدأ من</span>
          </FadeUp>
        </ul>
      </div>
    </section>
  );
}
