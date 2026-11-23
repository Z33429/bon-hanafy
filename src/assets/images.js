// Optimised WebP photography (Unsplash License — free for commercial use).
// Each entry exposes a small + large file for responsive `srcset`.

import heroPour700 from './images/hero-pour-700.webp';
import heroPour1100 from './images/hero-pour-1100.webp';
import heroTop400 from './images/hero-top-400.webp';
import heroTop700 from './images/hero-top-700.webp';
import hot600 from './images/hot-600.webp';
import hot1000 from './images/hot-1000.webp';
import iced600 from './images/iced-600.webp';
import iced1000 from './images/iced-1000.webp';
import mojito600 from './images/mojito-600.webp';
import mojito1000 from './images/mojito-1000.webp';
import smoothie600 from './images/smoothie-600.webp';
import smoothie1000 from './images/smoothie-1000.webp';
import frappe600 from './images/frappe-600.webp';
import frappe1000 from './images/frappe-1000.webp';
import shake600 from './images/shake-600.webp';
import shake1000 from './images/shake-1000.webp';
import aboutPour800 from './images/about-pour-800.webp';
import aboutPour1400 from './images/about-pour-1400.webp';
import aboutBeans600 from './images/about-beans-600.webp';
import aboutBeans1000 from './images/about-beans-1000.webp';
import band1200 from './images/band-1200.webp';
import band2200 from './images/band-2200.webp';
import visit700 from './images/visit-700.webp';
import visit1200 from './images/visit-1200.webp';
import beans600 from './images/beans-texture-600.webp';
import beans1000 from './images/beans-texture-1000.webp';

const pic = (small, smallW, large, largeW, largeH) => ({
  src: small,
  srcSet: `${small} ${smallW}w, ${large} ${largeW}w`,
  width: largeW,
  height: largeH,
});

export const images = {
  heroPour: pic(heroPour700, 700, heroPour1100, 1100, 1650),
  heroTop: pic(heroTop400, 400, heroTop700, 700, 1050),
  hot: pic(hot600, 600, hot1000, 1000, 1500),
  iced: pic(iced600, 600, iced1000, 1000, 1387),
  mojito: pic(mojito600, 600, mojito1000, 1000, 1500),
  smoothie: pic(smoothie600, 600, smoothie1000, 1000, 1510),
  frappe: pic(frappe600, 600, frappe1000, 1000, 1458),
  shake: pic(shake600, 600, shake1000, 1000, 1504),
  aboutPour: pic(aboutPour800, 800, aboutPour1400, 1400, 783),
  aboutBeans: pic(aboutBeans600, 600, aboutBeans1000, 1000, 662),
  band: pic(band1200, 1200, band2200, 2200, 1444),
  visit: pic(visit700, 700, visit1200, 1200, 1097),
  beans: pic(beans600, 600, beans1000, 1000, 1500),
};
