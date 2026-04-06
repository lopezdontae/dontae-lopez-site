import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import ScrollRig from './components/ScrollRig';
import { Mail, Briefcase } from 'lucide-react';

function App() {
  const [zoomedIn, setZoomedIn] = useState(false);

  // Fake scrolling to trigger zoom
  useEffect(() => {
    let scrollVal = 0;
    const scrollMax = 1000; // arbitrary scroll length
    
    // We'll use a Wheel event to track virtual scroll progress
    const handleWheel = (e) => {
      scrollVal += e.deltaY;
      scrollVal = Math.max(0, Math.min(scrollMax, scrollVal));
      
      if (scrollVal > scrollMax * 0.7) {
        setZoomedIn(true);
      } else {
        setZoomedIn(false);
      }
      
      // Dispatch custom event so ScrollRig can pick it up
      window.dispatchEvent(new CustomEvent('virtual-scroll', { detail: scrollVal / scrollMax }));
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <>
      <div className="canvas-container">
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
            <ScrollRig />
          </Suspense>
        </Canvas>
      </div>

      <div className="ui-layer">
        <header className="header">
          <div className="header-left">
            <a href="/" className="logo">Dontae Lopez</a>
          </div>
          <nav className="header-right">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>

        {!zoomedIn && <div className="scroll-indicator"></div>}
      </div>

      <div className={`contact-overlay ${zoomedIn ? 'visible' : ''}`}>
        <h2>Let's Build the Future</h2>
        <div className="contact-links">
          <a href="mailto:business@dontaelopez.com">
            <Mail size={16} /> Business Enquiries
          </a>
          <a href="/sponsorships">
            <Briefcase size={16} /> Sponsorships
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
