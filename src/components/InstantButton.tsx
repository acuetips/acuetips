"use client";

import { useCallback, useRef, useState } from "react";

const SOUND_URL = "/sounds/fahhh.mp3";
const FAH1_URL = "/instant-btn/fah1.png";
const FAH2_URL = "/instant-btn/fah2.png";

export function InstantButton({
  className,
  onPress,
  onAnimationEnd,
}: {
  className?: string;
  onPress?: () => void;
  onAnimationEnd?: (event: React.AnimationEvent<HTMLDivElement>) => void;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activated, setActivated] = useState(false);

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
    <div
      className={`instant-btn${className ? ` ${className}` : ""}`}
      onAnimationEnd={onAnimationEnd}
    >
      <button
        type="button"
        className="instant-btn__button"
        aria-label="Play Fahhh sound"
        onPointerDown={() => {
          setActivated(true);
          void playSound();
          onPress?.();
        }}
      >
        <img
          className="instant-btn__image"
          src={activated ? FAH2_URL : FAH1_URL}
          alt=""
          draggable={false}
        />
      </button>
    </div>
  );
}
