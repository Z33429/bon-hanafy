import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { FadeUp, Kicker, RevealImage, RevealWords } from './ui/Reveal.jsx';
import { Bean, RotatingBadge, Steam } from './ui/Decor.jsx';
import Logo from './Logo.jsx';
import { ArrowIcon, ExternalIcon, FacebookIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from './Icons.jsx';
import { images } from '../assets/images.js';
import { site, whatsappHref } from '../data/site.js';
import { easeOut } from './ui/motion.js';
import './Visit.css';

const cardMotion = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut, delay: 0.1 + i * 0.1 } }),
};

export default function Visit() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBadge = useTransform(scrollYProgress, [0, 1], ['30%', '-50%']);

  const cards = [
    {
      key: 'address',
      icon: <MapPinIcon />,
      label: 'العنوان',
      value: site.address,
    },
    {
      key: 'phone',
      icon: <PhoneIcon />,
      label: 'اتصل بنا',
      value: <span className="ltr">{site.phoneDisplay}</span>,
      href: site.phoneHref,
      aria: `اتصل بنا: ${site.phoneDisplay}`,
    },
    {
      key: 'facebook',
      icon: <FacebookIcon />,
      label: 'فيسبوك',
      value: 'صفحة بن حنفي على فيسبوك',
      href: site.facebook,
      external: true,
    },
  ];

  if (whatsappHref) {
    cards.splice(2, 0, {
      key: 'whatsapp',
      icon: <WhatsAppIcon />,
      label: 'واتساب',
      value: <span className="ltr">{site.phoneDisplay}</span>,
      href: whatsappHref,
      external: true,
    });
  }

  return (
    <section id="visit" ref={ref} className="visit" aria-labelledby="visit-title">
      <span className="visit__glow" aria-hidden="true" />
      <div className="container visit__grid">
        <div className="visit__copy">
          <Kicker num="03" label="زورنا" />
          <h2 id="visit-title" className="section-title visit__title">
            <RevealWords text="في انتظارك" className="visit__title-line" />
            <RevealWords text="في مركز بدر" className="visit__title-line visit__title-line--accent" delay={0.15} />
          </h2>
          <FadeUp as="p" className="visit__lead">
            مرّ علينا واستمتع بمشروبك المفضل، أو اتصل بنا مباشرة، وتابع صفحتنا على فيسبوك.
          </FadeUp>

          <ul className="visit__cards">
            {cards.map((card, i) => {
              const inner = (
                <>
                  <span className="vcard__icon">{card.icon}</span>
                  <span className="vcard__text">
                    <span className="vcard__label">{card.label}</span>
                    <span className="vcard__value">{card.value}</span>
                  </span>
                  {card.href && (
                    <span className="vcard__go" aria-hidden="true">
                      {card.external ? <ExternalIcon /> : <ArrowIcon />}
                    </span>
                  )}
                </>
              );
              return (
                <motion.li
                  key={card.key}
                  custom={i}
                  variants={cardMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {card.href ? (
                    <a
                      className="vcard vcard--link"
                      href={card.href}
                      aria-label={card.aria}
                      {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="vcard">{inner}</div>
                  )}
                </motion.li>
              );
            })}
          </ul>

          <FadeUp className="visit__actions" delay={0.1}>
            <a href={site.phoneHref} className="btn btn--primary">
              <PhoneIcon />
              اتصل الآن
            </a>
            <a href={site.facebook} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
              تابعنا على فيسبوك
            </a>
          </FadeUp>
        </div>

        <div className="visit__visual">
          <span className="visit__outline" aria-hidden="true" />
          <RevealImage
            className="visit__frame"
            img={images.visit}
            alt="فنجان كابتشينو بالرغوة"
            sizes="(max-width: 960px) 80vw, 480px"
            curtain="var(--c-caramel)"
          />
          <Steam className="visit__steam" />
          <motion.div className="visit__badge-wrap" style={{ y: reduce ? undefined : yBadge }}>
            <RotatingBadge className="visit__badge" text="VISIT US · GOOD COFFEE · ">
              <Logo className="visit__badge-logo" />
            </RotatingBadge>
          </motion.div>
          <Bean className="visit__bean" />
        </div>
      </div>
    </section>
  );
}
