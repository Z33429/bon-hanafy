<div align="center">

<img src="public/logo.svg" width="130" alt="بن حنفي logo" />

# بن حنفي — Cafe Website

**بن أصيل .. بطعم لا يُنسى · Good Coffee · Good Mood**

A premium, fully responsive **Arabic (RTL)** website for a real cafe in Egypt.

### [🌐 Live demo: bon-hanafy.vercel.app](https://bon-hanafy.vercel.app)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12-FF4D8D?logo=framer&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-mobile%20%7C%20tablet%20%7C%20desktop-d39a5c)

<br />

<a href="https://bon-hanafy.vercel.app"><img src="docs/screenshots/desktop-hero.jpg" alt="Hero section of the بن حنفي website" /></a>

</div>

## ✨ Highlights

- **Cinematic hero:** layered photography, animated steam, a rotating badge and word-by-word reveal of the Arabic headline.
- **Complete menu:** 42 drinks in 6 categories, each with its own photo and colour accent, plus a sticky category bar that follows your scroll.
- **Motion design:** scroll-triggered text and image reveals, parallax, marquee ribbons and an animated intro, built with Motion for React.
- **Brand identity:** the logo was vector-traced from the printed menu cover, with an espresso, caramel and ivory palette.
- **Mobile-first:** a custom full-screen mobile menu, touch-friendly controls, a floating call button and no horizontal overflow.
- **Accessible:** semantic landmarks, a skip link, visible keyboard focus, and support for the reduced-motion setting.
- **Fast & static:** responsive WebP images, self-hosted fonts and no backend. It deploys anywhere.

## 📸 Screenshots

| Menu | Contact |
| :--: | :--: |
| <img src="docs/screenshots/desktop-menu.jpg" alt="Menu category: iced coffee" /> | <img src="docs/screenshots/desktop-contact.jpg" alt="Contact section" /> |

<p align="center">
  <img src="docs/screenshots/mobile-hero.jpg" width="260" alt="Mobile hero" />
  &nbsp;&nbsp;
  <img src="docs/screenshots/mobile-menu.jpg" width="260" alt="Mobile menu" />
</p>

---

## About the project

Official showcase website for **بن حنفي** cafe in مركز بدر – شارع المدارس – أمام فرع فودافون.
It presents the complete menu (42 drinks in 6 categories, prices in Egyptian pounds) and lets visitors
call the cafe or open its Facebook page.

It is a **static, frontend-only** site: no backend, no database, no ordering or payments.

---

## Tech stack

| Purpose        | Tool                                                                  |
| -------------- | --------------------------------------------------------------------- |
| UI             | React 19                                                              |
| Build tool     | Vite 7                                                                |
| Animation      | Motion for React (`motion`)                                           |
| Fonts          | Self-hosted via Fontsource: Aref Ruqaa, IBM Plex Sans Arabic, Cormorant Garamond |
| Styling        | Plain CSS, one stylesheet per component, design tokens in `src/styles/global.css` |

Everything (fonts, images, logo) is bundled into the build, so the site does not depend on any external CDN.

---

## Requirements

- **Node.js 20.19+ or 22.12+** (download from https://nodejs.org — the "LTS" version is fine)
- npm (installed together with Node.js)

---

## Commands

Run these inside the project folder:

```bash
npm install
```

```bash
npm run dev
```

Starts a local development server (usually http://localhost:5173) with live reload.

```bash
npm run build
```

Creates the production website in the **`dist/`** folder.

```bash
npm run preview
```

Serves the built `dist/` folder locally so you can check it before uploading.

---

## Deployment — which folder to upload

**Live site:** https://bon-hanafy.vercel.app, hosted on Vercel (project `bon-hanafy`).

After `npm run build`, upload **the contents of the `dist/` folder**. That folder is the complete website
(`index.html` + `assets/` + icons). Nothing else is needed on the server.

The build uses relative paths, so it works at a domain root (`https://example.com/`) **and** inside a
sub-folder (`https://example.com/cafe/`).

> **Important for Egypt (November 2026):** sites on `*.netlify.app` currently time out from Egyptian
> networks unless the visitor uses a VPN. Many reports on Netlify's support forum describe this. Netlify is
> therefore **not recommended** for this cafe while the problem lasts. Whichever host you choose, test the link
> from an Egyptian connection, both Wi-Fi and mobile data, before sharing it.

### Vercel (current host)

Import this repository, or connect it to the existing project under **Settings, then Git**, and set:
Framework preset **Vite**, Build command `npm run build`, Output directory `dist`.
Every push to `main` then deploys automatically.
Note: Vercel's free "Hobby" plan is meant for personal, non-commercial use only.

### Cloudflare Pages

In the Cloudflare dashboard, go to **Workers & Pages**, choose **Create**, then **Pages**, then the
**direct upload / upload assets** option. Name the project, drag in the `dist` folder, and deploy. The site gets
a `https://<project>.pages.dev` address.

### Netlify

- Drag and drop: https://app.netlify.com/drop (see the Egypt note above).
- From Git: Build command `npm run build`, Publish directory `dist`.

### Any classic host (cPanel, Hostinger, etc.)

Upload everything **inside** `dist/` into `public_html/` (or your site's web root) using the File Manager or FTP.

### GitHub Pages

Build command `npm run build`, output directory `dist`.

---

## Editing the content

| What to change                               | File                       |
| -------------------------------------------- | -------------------------- |
| Phone, Facebook link, address, tagline       | `src/data/site.js`         |
| Menu items, prices, categories, photos used  | `src/data/menu.js`         |
| Photos                                       | `src/assets/images/` + `src/assets/images.js` |
| Colours, fonts, spacing                      | `src/styles/global.css` (`:root` tokens) |
| Page title, description, search-engine data  | `index.html`               |

After any change run `npm run build` again and re-upload `dist/`.

### Turning on the WhatsApp button

The WhatsApp button is hidden because it has not been confirmed that the phone number uses WhatsApp.
To enable it, open `src/data/site.js` and set:

```js
whatsapp: '201001181275',
```

A WhatsApp card then appears in the contact section and a WhatsApp icon in the footer.

### Social-media preview image

`public/og-image.jpg` (1200×630) is used for link previews on Facebook and WhatsApp. `index.html` is set up for
the live address **https://bon-hanafy.vercel.app**. If the site moves to another address (e.g. your own domain),
update the `og:url`, `og:image` and `canonical` lines in `index.html`, then rebuild and re-upload.

---

## Project structure

```
├── index.html                  Page shell, SEO + structured data
├── docs/screenshots/           Images used in this README (not part of the website)
├── public/                     Copied as-is into dist/
│   ├── favicon.svg / favicon-32.png / apple-touch-icon.png
│   ├── icon-512.png            Square logo icon (e.g. for social profiles)
│   ├── logo.svg                Vector logo (caramel)
│   └── og-image.jpg            Link-preview image
└── src/
    ├── main.jsx                Entry: fonts + global styles
    ├── App.jsx                 Page composition
    ├── data/
    │   ├── site.js             Cafe information (single source of truth)
    │   └── menu.js             Full menu, exactly as printed
    ├── assets/
    │   ├── images/             Optimised WebP photos (2 sizes each)
    │   └── images.js           Responsive image map
    ├── hooks/useActiveSection.js   Scroll-spy for navigation
    ├── styles/global.css       Tokens, reset, buttons, shared pieces
    └── components/
        ├── Intro, Header, Hero, Ribbons, About, Interlude, Visit, Footer
        ├── ScrollProgress, FloatingCall, Logo, Icons
        ├── menu/               Menu, CategoryNav, MenuCategory
        └── ui/                 Reveal (text/image reveals), Counter, Decor, Img, motion tokens
```

---

## Accessibility & performance notes

- Arabic, right-to-left layout (`<html lang="ar" dir="rtl">`), semantic sections and landmarks.
- Skip-to-content link, visible keyboard focus, labelled icon buttons, Escape closes the mobile menu.
- Respects the visitor's **reduced-motion** setting: animations are toned down or removed.
- Responsive images (`srcset`), lazy loading below the fold, WebP compression, self-hosted subsetted fonts.

---

## Credits

- **Logo:** vector-traced from the official بن حنفي menu cover supplied by the owner.
- **Photography:** from [Unsplash](https://unsplash.com), free for commercial use under the
  [Unsplash License](https://unsplash.com/license). The photos are illustrative, and the menu shows a "الصور تعبيرية"
  (photos are illustrative) note. Source photos (`https://images.unsplash.com/photo-<id>`):

  | File          | Unsplash photo id               |
  | ------------- | ------------------------------- |
  | hero-pour     | 1516743619420-154b70a65fea      |
  | hero-top      | 1497636577773-f1231844b336      |
  | hot           | 1610632380989-680fe40816c6      |
  | iced          | 1592663527359-cf6642f54cff      |
  | mojito        | 1513558161293-cdaf765ed2fd      |
  | smoothie      | 1600718374662-0483d2b9da44      |
  | frappe        | 1577805947697-89e18249d767      |
  | shake         | 1586917049334-0f99406d8a6e      |
  | about-pour    | 1541167760496-1628856ab772      |
  | about-beans   | 1525088553748-01d6e210e00b      |
  | band          | 1497515114629-f71d768fd07c      |
  | visit         | 1572442388796-11668a67e53d      |
  | beans-texture | 1511920170033-f8396924c348      |

  If you have real photos of your own drinks, replace the files in `src/assets/images/`, keeping the same names
  and roughly the same proportions, then rebuild.

---

## نشر الموقع باختصار (Arabic quick guide)

1. ثبّت Node.js من nodejs.org.
2. افتح مجلد المشروع في الطرفية (Terminal) ونفّذ: `npm install` ثم `npm run build`.
3. سيظهر مجلد اسمه **`dist`**. هذا هو الموقع الجاهز.
4. ارفع **محتويات مجلد `dist`** إلى الاستضافة. الموقع الحالي على Vercel: https://bon-hanafy.vercel.app
   (لا يُنصح بـ Netlify حاليًا لأن روابط `netlify.app` لا تفتح من مصر بدون VPN).

لتعديل رقم التليفون أو العنوان أو رابط فيسبوك: `src/data/site.js`.
لتعديل المنيو أو الأسعار: `src/data/menu.js`.
