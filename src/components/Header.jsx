import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import Logo from './Logo.jsx';
import { FacebookIcon, MapPinIcon, PhoneIcon } from './Icons.jsx';
import { navLinks, site } from '../data/site.js';
import useActiveSection from '../hooks/useActiveSection.js';
import { easeInOut, easeOut } from './ui/motion.js';
import './Header.css';

const sectionIds = navLinks.map((l) => l.id);

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 30);
    if (open) return;
    if (y > prev + 2 && y > 480) setHidden(true);
    else if (y < prev - 6 || y < 480) setHidden(false);
  });

  // Let other components (e.g. the sticky menu tabs) know where the header is.
  useEffect(() => {
    document.documentElement.dataset.header = hidden ? 'hidden' : 'visible';
  }, [hidden]);

  useEffect(() => {
    if (!open) return undefined;
    const root = document.documentElement;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    root.classList.add('is-locked');
    window.addEventListener('keydown', onKey);
    return () => {
      root.classList.remove('is-locked');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const toggle = () => {
    setHidden(false);
    setOpen((o) => !o);
  };

  return (
    <>
      <motion.header
        className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}
        animate={{ y: hidden ? '-115%' : '0%' }}
        transition={{ duration: 0.5, ease: easeOut }}
        onFocusCapture={() => setHidden(false)}
      >
        <div className="container header__inner">
          <a href="#home" className="header__brand" aria-label={`${site.name} — الصفحة الرئيسية`}>
            <Logo className="header__logo" />
          </a>

          <nav className="header__nav" aria-label="القائمة الرئيسية">
            <ul>
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={isActive ? 'is-active' : undefined}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="header__indicator"
                          transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header__actions">
            <a
              href={site.facebook}
              className="icon-btn header__fb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="صفحة بن حنفي على فيسبوك (تفتح في نافذة جديدة)"
            >
              <FacebookIcon />
            </a>
            <a href={site.phoneHref} className="header__call" aria-label={`اتصل بنا: ${site.phoneDisplay}`}>
              <span className="header__call-icon">
                <PhoneIcon />
              </span>
              <span className="ltr">{site.phoneDisplay}</span>
            </a>
            <button
              type="button"
              className="burger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
              onClick={toggle}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && <MobileMenu key="mnav" active={active} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ active, onClose }) {
  const firstLink = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => firstLink.current?.focus({ preventScroll: true }), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.nav
      id="mobile-menu"
      className="mnav"
      aria-label="قائمة التنقل"
      initial={{ clipPath: 'circle(0% at 8% 4%)' }}
      animate={{ clipPath: 'circle(150% at 8% 4%)' }}
      exit={{ clipPath: 'circle(0% at 8% 4%)' }}
      transition={{ duration: 0.75, ease: easeInOut }}
    >
      <Logo className="mnav__watermark" />
      <motion.ul
        className="mnav__list"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
      >
        {navLinks.map((link, i) => (
          <motion.li
            key={link.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
            }}
          >
            <a
              ref={i === 0 ? firstLink : undefined}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : undefined}
              aria-current={active === link.id ? 'true' : undefined}
              onClick={onClose}
            >
              <span className="mnav__num" dir="ltr">
                0{i + 1}
              </span>
              {link.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="mnav__foot"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.6 } }}
        exit={{ opacity: 0 }}
      >
        <a href={site.phoneHref} className="mnav__contact">
          <PhoneIcon />
          <span className="ltr">{site.phoneDisplay}</span>
        </a>
        <p className="mnav__contact">
          <MapPinIcon />
          <span>{site.address}</span>
        </p>
        <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="mnav__contact">
          <FacebookIcon />
          <span>تابعنا على فيسبوك</span>
        </a>
      </motion.div>
    </motion.nav>
  );
}
