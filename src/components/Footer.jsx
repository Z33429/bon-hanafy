import Logo from './Logo.jsx';
import { ArrowUpIcon, FacebookIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from './Icons.jsx';
import { FadeUp } from './ui/Reveal.jsx';
import { categories } from '../data/menu.js';
import { navLinks, site, whatsappHref } from '../data/site.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <FadeUp className="footer__brand">
          <a href="#home" className="footer__logo-link" aria-label={`${site.name} — العودة للأعلى`}>
            <Logo className="footer__logo" />
          </a>
          <p className="footer__tagline">{site.tagline}</p>
          <p className="footer__slogan latin-script">{site.slogan}</p>
          <div className="footer__social">
            <a
              href={site.facebook}
              className="icon-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="صفحة بن حنفي على فيسبوك (تفتح في نافذة جديدة)"
            >
              <FacebookIcon />
            </a>
            <a href={site.phoneHref} className="icon-btn" aria-label={`اتصل بنا: ${site.phoneDisplay}`}>
              <PhoneIcon />
            </a>
            {whatsappHref && (
              <a
                href={whatsappHref}
                className="icon-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل معنا على واتساب"
              >
                <WhatsAppIcon />
              </a>
            )}
          </div>
        </FadeUp>

        <FadeUp as="nav" className="footer__col" aria-label="روابط سريعة" delay={0.05}>
          <h2 className="footer__heading">روابط سريعة</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp as="nav" className="footer__col" aria-label="أقسام المنيو" delay={0.1}>
          <h2 className="footer__heading">المنيو</h2>
          <ul>
            {categories.map((c) => (
              <li key={c.id}>
                <a href={`#cat-${c.id}`}>{c.title}</a>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp className="footer__col" delay={0.15}>
          <h2 className="footer__heading">تواصل معنا</h2>
          <ul className="footer__contact">
            <li>
              <MapPinIcon />
              <span>{site.address}</span>
            </li>
            <li>
              <PhoneIcon />
              <a href={site.phoneHref} className="ltr">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <FacebookIcon />
              <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                تابعنا على فيسبوك
              </a>
            </li>
          </ul>
        </FadeUp>
      </div>

      <div className="footer__giant" aria-hidden="true">
        {site.name}
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {site.name}. جميع الحقوق محفوظة.
        </p>
        <a href="#home" className="footer__top-btn">
          العودة للأعلى
          <span className="footer__top-icon">
            <ArrowUpIcon />
          </span>
        </a>
      </div>
    </footer>
  );
}
