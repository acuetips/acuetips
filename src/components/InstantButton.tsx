"use client";

import { useCallback, useRef, useState } from "react";

const SOUND_URL = "/sounds/fahhh.mp3";

export function InstantButton({
  className,
  onPress,
}: {
  className?: string;
  onPress?: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [pressed, setPressed] = useState(false);

  const playSound = useCallback(async () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(SOUND_URL);
        audioRef.current.preload = "auto";
      }

      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch (error) {
      console.error("Failed to play Fahhh sound:", error);
    }
  }, []);

  return (
    <div className={`instant-btn${className ? ` ${className}` : ""}`}>
      <div className="instant-btn__shadow" aria-hidden="true" />
      <div className="instant-btn__bg" aria-hidden="true" />
      <button
        type="button"
        className={`instant-btn__button${pressed ? " is-pressed" : ""}`}
        aria-label="Play Fahhh sound"
        onPointerDown={() => {
          setPressed(true);
          void playSound();
          onPress?.();
        }}
        onPointerUp={() => setPressed(false)}
        onPointerLeave={() => setPressed(false)}
        onBlur={() => setPressed(false)}
      />
    </div>
  );
}
