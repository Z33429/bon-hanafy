// The complete بن حنفي menu, transcribed exactly from the printed menu.
// Names and prices follow the printed menu; two spellings were corrected at the owner's request
// (موخيتو → موهيتو, فرباتشينو → فرابتشينو). Prices are in Egyptian pounds (ج.م).

import { images } from '../assets/images.js';

export const categories = [
  {
    id: 'hot',
    title: 'القهوة الساخنة',
    en: 'Hot Coffee',
    icon: 'hot',
    theme: 'dark',
    bg: '#1a100b',
    accent: '#d6a067',
    image: images.hot,
    imageAlt: 'فنجان قهوة ساخنة وسط حبوب البن المحمصة',
    items: [
      { name: 'قهوه تركي فاتح سنجل', price: 15 },
      { name: 'قهوه تركي فاتح دابل', price: 25 },
      { name: 'قهوه فرنساوي', price: 25 },
      { name: 'قهوه بندق', price: 25 },
      { name: 'اسبريسو سنجل', price: 30 },
      { name: 'اسبريسو دابل', price: 40 },
      { name: 'اميركان كوفي', price: 40 },
      { name: 'كابتشينو', price: 45 },
      { name: 'فلات وايت', price: 40 },
      { name: 'نسكافيه', price: 40 },
      { name: 'لاتيه', price: 45 },
      { name: 'اسبانيش لاتيه', price: 55 },
      { name: 'هوت شوكليت', price: 45 },
      { name: 'موكا', price: 55 },
      { name: 'كورتادو', price: 35 },
      { name: 'ميكاتو سنجل', price: 30 },
      { name: 'ميكاتو دابل', price: 45 },
    ],
  },
  {
    id: 'iced',
    title: 'القهوة الباردة',
    en: 'Iced Coffee',
    icon: 'iced',
    theme: 'light',
    bg: '#f5ede1',
    accent: '#a8662f',
    image: images.iced,
    imageAlt: 'قهوة مثلجة يُسكب عليها الحليب',
    items: [
      { name: 'ايس كابتشينو', price: 55 },
      { name: 'ايس كوفي', price: 55 },
      { name: 'ايس لاتيه', price: 55 },
      { name: 'ايس لاتيه كراميل', price: 60 },
      { name: 'ايس موكا', price: 60 },
      { name: 'ايس اسبانيش لاتيه', price: 60 },
      { name: 'ايس ماتشا', price: 60 },
    ],
  },
  {
    id: 'mojito',
    title: 'موهيتو',
    en: 'Mojito',
    icon: 'mojito',
    theme: 'dark',
    bg: '#111311',
    accent: '#9fc79b',
    image: images.mojito,
    imageAlt: 'موهيتو منعش بالنعناع والليمون والثلج',
    items: [
      { name: 'موهيتو كلاسيك', price: 45 },
      { name: 'موهيتو بلو بيري', price: 45 },
      { name: 'موهيتو فراوله', price: 45 },
      { name: 'موهيتو باشون', price: 45 },
      { name: 'موهيتو بلو اوشن', price: 45 },
    ],
  },
  {
    id: 'smoothie',
    title: 'سموزي',
    en: 'Smoothies',
    icon: 'smoothie',
    theme: 'light',
    bg: '#f7eee9',
    accent: '#a3435d',
    image: images.smoothie,
    imageAlt: 'سموزي التوت مع حبات التوت الطازجة',
    items: [
      { name: 'سموزي بلو بيري', price: 55 },
      { name: 'سموزي فراوله', price: 55 },
      { name: 'سموزي باشون', price: 55 },
      { name: 'سموزي مانجو', price: 55 },
    ],
  },
  {
    id: 'frappe',
    title: 'فرابيه',
    en: 'Frappé',
    icon: 'frappe',
    theme: 'dark',
    bg: '#2a1910',
    accent: '#e2b27b',
    image: images.frappe,
    imageAlt: 'فرابيه بالكريمة والشوكولاتة',
    items: [
      { name: 'فرابتشينو', price: 70 },
      { name: 'فرابيه كراميل', price: 70 },
      { name: 'فرابيه شوكلت', price: 70 },
      { name: 'فرابيه لوتس', price: 70 },
    ],
  },
  {
    id: 'shake',
    title: 'ميلك تشيك',
    en: 'Milkshakes',
    icon: 'shake',
    theme: 'light',
    bg: '#efe3d1',
    accent: '#7a4a2e',
    image: images.shake,
    imageAlt: 'ميلك شيك أوريو بصوص الشوكولاتة',
    items: [
      { name: 'ميلك تشيك اوريو', price: 75 },
      { name: 'ميلك تشيك فانيليا', price: 70 },
      { name: 'ميلك تشيك شوكلت', price: 70 },
      { name: 'ميلك تشيك بلو بيري', price: 70 },
      { name: 'ميلك تشيك فراوله', price: 70 },
    ],
  },
];

const allItems = categories.flatMap((c) => c.items);

export const menuStats = {
  items: allItems.length,
  categories: categories.length,
  minPrice: Math.min(...allItems.map((i) => i.price)),
  maxPrice: Math.max(...allItems.map((i) => i.price)),
};

export const minPrice = (cat) => Math.min(...cat.items.map((i) => i.price));

// Arabic counting: 3–10 → plural "مشروبات", 11+ → "مشروبًا".
export const drinksLabel = (n) => (n >= 3 && n <= 10 ? `${n} مشروبات` : `${n} مشروبًا`);
