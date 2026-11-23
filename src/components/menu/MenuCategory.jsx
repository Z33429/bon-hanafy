import { motion } from 'motion/react';
import { RevealImage, RevealWords } from '../ui/Reveal.jsx';
import { CategoryIcon } from '../Icons.jsx';
import { drinksLabel, minPrice } from '../../data/menu.js';
import { site } from '../../data/site.js';
import { easeOut } from '../ui/motion.js';

function MenuItem({ item, index }) {
  return (
    <motion.li
      className="mi"
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: easeOut, delay: Math.min(index * 0.035, 0.3) }}
    >
      <span className="mi__name">{item.name}</span>
      <span className="mi__leader" aria-hidden="true" />
      <span className="mi__price">
        <span className="mi__num">{item.price}</span>
        <span className="mi__cur">{site.currency}</span>
      </span>
    </motion.li>
  );
}

/** One menu category: a large framed photograph beside an elegant price list. */
export default function MenuCategory({ cat, index }) {
  const num = String(index + 1).padStart(2, '0');
  const from = minPrice(cat);
  const reversed = index % 2 === 1;

  return (
    <section
      id={`cat-${cat.id}`}
      className={`cat cat--${cat.theme}${reversed ? ' cat--rev' : ''}`}
      style={{ '--bg': cat.bg, '--accent': cat.accent }}
      aria-labelledby={`cat-${cat.id}-title`}
    >
      <span className="cat__glow" aria-hidden="true" />
      <span className="cat__ghost-num latin-script" aria-hidden="true">
        {num}
      </span>

      <div className="container cat__grid">
        <div className="cat__media">
          <div className="cat__frame-wrap">
            <span className="cat__outline" aria-hidden="true" />
            <RevealImage
              className="cat__frame"
              img={cat.image}
              alt={cat.imageAlt}
              sizes="(max-width: 960px) 80vw, 460px"
              parallax={7}
              curtain="var(--accent)"
            />
            <span className="cat__from">
              تبدأ من <strong>{from}</strong> {site.currency}
            </span>
          </div>
        </div>

        <div className="cat__content">
          <header className="cat__head">
            <p className="cat__kicker">
              <span className="cat__icon">
                <CategoryIcon name={cat.icon} />
              </span>
              <span className="cat__en latin-script">{cat.en}</span>
              <span className="cat__num latin-script">{num}</span>
            </p>
            <h3 id={`cat-${cat.id}-title`} className="cat__title">
              <RevealWords text={cat.title} />
            </h3>
            <p className="cat__meta">
              <span className="cat__dot" aria-hidden="true" />
              {drinksLabel(cat.items.length)}
            </p>
          </header>

          <ul className="cat__items">
            {cat.items.map((item, i) => (
              <MenuItem key={item.name} item={item} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
