"use client";

import { useCallback, useRef, useState } from "react";

const SOUND_URL =
  "https://www.myinstants.com/media/sounds/fahhh_KcgAXfs.mp3";

export function InstantButton({ className }: { className?: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [pressed, setPressed] = useState(false);

  const playSound = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(SOUND_URL);
    }

    audioRef.current.currentTime = 0;
    void audioRef.current.play();
  }, []);

  return (
    <div className={`instant-btn${className ? ` ${className}` : ""}`}>
      <div className="instant-btn__shadow" aria-hidden="true" />
      <div className="instant-btn__bg" aria-hidden="true" />
      <button
        type="button"
        className={`instant-btn__button${pressed ? " is-pressed" : ""}`}
        aria-label="Play Fahhh sound"
        onClick={playSound}
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
        onPointerLeave={() => setPressed(false)}
        onBlur={() => setPressed(false)}
      />
    </div>
  );
}
