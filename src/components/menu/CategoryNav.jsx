import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { CategoryIcon } from '../Icons.jsx';
import { categories } from '../../data/menu.js';

/** Sticky, scroll-spying tab bar for the menu categories. */
export default function CategoryNav({ active }) {
  const listRef = useRef(null);

  // Keep the active tab centred inside the horizontally scrollable bar (mobile).
  useEffect(() => {
    const list = listRef.current;
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const el = list.querySelector(`[data-target="${active}"]`);
    if (!el) return;
    const lr = list.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    const delta = er.left + er.width / 2 - (lr.left + lr.width / 2);
    if (Math.abs(delta) > 4) list.scrollBy({ left: delta, behavior: 'smooth' });
  }, [active]);

  return (
    <div className="catnav-wrap">
      <nav className="catnav" aria-label="أقسام المنيو">
        <ul className="catnav__list" ref={listRef}>
          {categories.map((c) => {
            const target = `cat-${c.id}`;
            const on = active === target;
            return (
              <li key={c.id}>
                <a
                  href={`#${target}`}
                  data-target={target}
                  className={`catnav__link${on ? ' is-active' : ''}`}
                  aria-current={on ? 'true' : undefined}
                >
                  {on && (
                    <motion.span
                      layoutId="catnav-pill"
                      className="catnav__pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 36 }}
                    />
                  )}
                  <CategoryIcon name={c.icon} className="catnav__icon" />
                  <span className="catnav__label">{c.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
