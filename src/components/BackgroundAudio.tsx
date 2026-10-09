'use client';

import { Pause, Play, Volume2 } from 'lucide-react';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import './background-audio.css';

export type BackgroundAudioHandle = { startForEntrance: (enabled: boolean) => void; stop: () => void };
const COMFORTABLE_VOLUME = 0.3;

const BackgroundAudio = forwardRef<BackgroundAudioHandle, { visible: boolean }>(function BackgroundAudio({ visible }, ref) {
  const audio = useRef<HTMLAudioElement>(null);
  const frame = useRef<number | undefined>(undefined);
  const [playing, setPlaying] = useState(false);

  const fadeTo = (target: number, duration: number, after?: () => void) => {
    const element = audio.current;
    if (!element) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    const start = element.volume;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      element.volume = start + (target - start) * progress;
      if (progress < 1) frame.current = requestAnimationFrame(tick);
      else { frame.current = undefined; after?.(); }
    };
    frame.current = requestAnimationFrame(tick);
  };

  const pauseGently = () => {
    const element = audio.current;
    if (!element || element.paused) return;
    fadeTo(0, 450, () => { element.pause(); setPlaying(false); });
  };

  const play = (entrance = false) => {
    const element = audio.current;
    if (!element) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    element.volume = entrance ? 0 : Math.min(element.volume, COMFORTABLE_VOLUME);
    // Calling play synchronously here preserves the user gesture when this is
    // reached via the invitation or music-control click.
    const playback = element.play();
    // Start this clock with the door sequence, rather than waiting for media
    // buffering or the play promise to settle.
    fadeTo(COMFORTABLE_VOLUME, entrance ? 5400 : 600);
    playback.then(() => {
      setPlaying(true);
    }).catch(() => {
      if (frame.current) cancelAnimationFrame(frame.current);
      element.volume = 0;
      setPlaying(false);
    });
  };

  useImperativeHandle(ref, () => ({
    startForEntrance: (enabled) => { if (enabled) play(true); },
    stop: pauseGently,
  }));

  useEffect(() => {
    const onVisibilityChange = () => { if (document.hidden) pauseGently(); };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const toggle = () => { if (playing) pauseGently(); else play(); };
  return <>
    <audio ref={audio} src="/music/wedding-nasheed.mp3" loop preload="metadata" onPause={() => setPlaying(false)} />
    {visible && <button className="music-control" type="button" onClick={toggle} aria-label={playing ? 'Pause background music' : 'Play background music'} aria-pressed={playing}>
      <span className="music-control-icon">{playing ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}</span>
      <span>{playing ? 'Pause music' : 'Play music'}</span><Volume2 size={14} aria-hidden="true" />
    </button>}
  </>;
});

export default BackgroundAudio;
