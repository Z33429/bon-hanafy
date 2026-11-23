import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';

import Intro from './components/Intro.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Ribbons from './components/Ribbons.jsx';
import About from './components/About.jsx';
import Menu from './components/menu/Menu.jsx';
import Interlude from './components/Interlude.jsx';
import Visit from './components/Visit.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import FloatingCall from './components/FloatingCall.jsx';

const INTRO_KEY = 'bh-intro-seen';

function introSeen() {
  try {
    return sessionStorage.getItem(INTRO_KEY) === '1';
  } catch {
    return false;
  }
}

export default function App() {
  const [showIntro, setShowIntro] = useState(() => !introSeen());

  useEffect(() => {
    if (!showIntro) return undefined;
    const root = document.documentElement;
    root.classList.add('is-locked');
    return () => root.classList.remove('is-locked');
  }, [showIntro]);

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      /* storage unavailable — intro simply shows again next time */
    }
    setShowIntro(false);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        تخطَّ إلى المحتوى
      </a>

      <AnimatePresence>{showIntro && <Intro key="intro" onDone={finishIntro} />}</AnimatePresence>

      <ScrollProgress />
      <Header />

      <main id="main">
        <Hero ready={!showIntro} />
        <Ribbons />
        <About />
        <Menu />
        <Interlude />
        <Visit />
      </main>

      <Footer />
      <FloatingCall />
    </MotionConfig>
  );
}
