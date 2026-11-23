import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { FadeUp, Kicker, RevealWords } from '../ui/Reveal.jsx';
import Img from '../ui/Img.jsx';
import CategoryNav from './CategoryNav.jsx';
import MenuCategory from './MenuCategory.jsx';
import { categories, drinksLabel, menuStats } from '../../data/menu.js';
import { images } from '../../assets/images.js';
import { site } from '../../data/site.js';
import useActiveSection from '../../hooks/useActiveSection.js';
import './Menu.css';

const categoryIds = categories.map((c) => `cat-${c.id}`);
// The intro is watched too, so the first tab is active while the visitor is above the categories.
const spyIds = ['menu-top', ...categoryIds];

export default function Menu() {
  const introRef = useRef(null);
  const reduce = useReducedMotion();
  const spied = useActiveSection(spyIds, '-38% 0px -58% 0px');
  const active = spied === 'menu-top' ? categoryIds[0] : spied;
  const { scrollYProgress } = useScroll({ target: introRef, offset: ['start end', 'end start'] });
  const xScript = useTransform(scrollYProgress, [0, 1], ['-14%', '10%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section id="menu" className="menu" aria-labelledby="menu-title">
      <div id="menu-top" className="menu__intro" ref={introRef}>
        <motion.div className="menu__intro-bg" style={{ y: reduce ? undefined : yBg }} aria-hidden="true">
          <Img img={images.beans} alt="" sizes="100vw" />
        </motion.div>
        <motion.span className="menu__script latin-script" style={{ x: reduce ? undefined : xScript }} aria-hidden="true">
          Menu
        </motion.span>

        <div className="container menu__intro-inner">
          <Kicker num="02" label="المنيو" />
          <h2 id="menu-title" className="section-title menu__title">
            <RevealWords text="اختر مزاجك" />
          </h2>
          <FadeUp as="p" className="menu__lead">
            {drinksLabel(menuStats.items)} في {menuStats.categories} أقسام، من القهوة الساخنة إلى الميلك تشيك. جميع
            الأسعار بالجنيه المصري.
          </FadeUp>
        </div>
      </div>

      <div className="menu__body">
        <CategoryNav active={active} />
        {categories.map((cat, i) => (
          <MenuCategory key={cat.id} cat={cat} index={i} />
        ))}
        <p className="menu__note container">
          * الصور تعبيرية. جميع الأسعار بالجنيه المصري ({site.currency}).
        </p>
      </div>
    </section>
  );
}
