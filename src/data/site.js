// Real cafe information supplied by the owner.
// Edit this single file to update contact details everywhere on the site.

export const site = {
  name: 'بن حنفي',
  tagline: 'بن أصيل .. بطعم لا يُنسى',
  slogan: 'Good Coffee · Good Mood',
  closing: 'استمتع بمشروبك المفضل',

  phone: '01001181275',
  phoneDisplay: '0100 118 1275',
  phoneHref: 'tel:+201001181275',

  // WhatsApp button is hidden until a WhatsApp number is confirmed.
  // To enable it, set e.g. whatsapp: '201001181275' (international format, no + or spaces).
  whatsapp: null,

  facebook: 'https://www.facebook.com/share/1HLJZxhiPS/?mibextid=wwXIfr',

  address: 'مركز بدر – شارع المدارس – أمام فرع فودافون',
  addressLines: ['مركز بدر', 'شارع المدارس', 'أمام فرع فودافون'],

  currency: 'ج.م',
  currencyName: 'الجنيه المصري',
};

export const navLinks = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'about', label: 'عن بن حنفي' },
  { id: 'menu', label: 'المنيو' },
  { id: 'visit', label: 'زورنا' },
];

export const whatsappHref = site.whatsapp ? `https://wa.me/${site.whatsapp}` : null;
