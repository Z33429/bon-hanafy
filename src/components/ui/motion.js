// Shared motion tokens so every animation on the site feels like one family.

export const easeOut = [0.22, 1, 0.36, 1];
export const easeInOut = [0.76, 0, 0.24, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOut } },
};

export const stagger = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Soft "ink" reveal for Arabic display words (no clipping of tall glyphs). */
export const wordReveal = {
  hidden: { opacity: 0, y: '0.45em', filter: 'blur(12px)' },
  show: { opacity: 1, y: '0em', filter: 'blur(0px)', transition: { duration: 1.1, ease: easeOut } },
};

export const inView = { once: true, amount: 0.35 };
