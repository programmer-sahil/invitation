'use client';

import './doors.css';
import './door-motion.css';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Phase = 'welcome' | 'unlocking' | 'opening' | 'revealing' | 'completed';

export default function RoyalDoorIntro({ onReveal, onComplete }: { onReveal: () => void; onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>('welcome');
  const reduced = useReducedMotion();
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const active = phase !== 'welcome';
  const doorsOpen = phase === 'opening' || phase === 'revealing' || phase === 'completed';
  const complete = phase === 'completed';
  const schedule = (callback: () => void, delay: number) => { timers.current.push(setTimeout(callback, delay)); };
  useEffect(() => () => { timers.current.forEach(clearTimeout); timers.current = []; }, []);
  const begin = () => {
    if (phase !== 'welcome') return;
    setPhase('unlocking');
    if (reduced) {
      schedule(() => { setPhase('revealing'); onReveal(); }, 180);
      schedule(() => setPhase('completed'), 280);
      schedule(onComplete, 420);
      return;
    }
    // All delays below are milliseconds; Motion durations are expressed in seconds.
    schedule(() => setPhase('opening'), 1200);
    schedule(() => { setPhase('revealing'); onReveal(); }, 4000);
    schedule(() => setPhase('completed'), 5200);
    schedule(onComplete, 6000);
  };
  const panel = (side: 'left' | 'right') => ({
    animate: doorsOpen ? { rotateY: side === 'left' ? -104 : 104, opacity: .96 } : { rotateY: 0, opacity: 1 },
    transition: { duration: reduced ? .12 : 3.5, ease: [0.22, .61, .36, 1] as const },
  });
  return <motion.section className={`royal-intro phase-${phase}`} aria-label="Wedding invitation entrance" animate={complete ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: reduced ? .1 : .75, ease: 'easeOut' }}>
    <div className="palace-arch" aria-hidden="true" />
    <div className="golden-rays" aria-hidden="true"><i /><i /><i /></div>
    <motion.div className="door door-left" {...panel('left')}><div className="door-panel"><DoorPattern /><span className="handle" /></div></motion.div>
    <motion.div className="door door-right" {...panel('right')}><div className="door-panel"><DoorPattern /><span className="handle" /></div></motion.div>
    <motion.div className="door-seam" animate={active ? { opacity: 1, scaleY: 1 } : { opacity: .3, scaleY: .88 }} transition={{ duration: reduced ? .1 : .65 }} />
    <motion.div className="invitation-plaque" animate={active ? { opacity: 0, y: -12, scale: .97 } : { opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduced ? .1 : .48, ease: 'easeInOut' }}>
      <p className="plaque-arabic" lang="ar" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
      <p className="plaque-translation">In the Name of Allah, the Most Gracious, the Most Merciful</p>
      <div className="plaque-divider"><i />✦<i /></div>
      <p className="plaque-kicker">A Blessed Union</p>
      <h1>SK Sahil <em>&amp;</em> Zameema Ghousia</h1>
      <p className="plaque-family">Together with our families, we cordially invite you and your beloved family to celebrate our Walima Reception.</p>
      <p className="plaque-date">Monday, 23 November 2026 <span>·</span> 7:00 PM onwards</p>
      <p className="plaque-dua">Your presence and duas are our greatest blessings.</p>
      <button className="door-button" onClick={begin} disabled={phase !== 'welcome'}>Open Our Invitation <span aria-hidden="true">↗</span></button>
    </motion.div>
  </motion.section>;
}
function DoorPattern() { return <><span className="door-medallion">✦</span><span className="door-vine v1">❖</span><span className="door-vine v2">❖</span><span className="door-vine v3">❖</span></>; }
