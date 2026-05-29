"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { InstantButton } from "@/components/InstantButton";
import { useFahhh } from "@/components/FahhhProvider";

export function FahhhEasterEgg() {
  const { isRevealed, hide } = useFahhh();
  const [isDismissPending, setIsDismissPending] = useState(false);
  const hideStartedRef = useRef(false);

  useEffect(() => {
    if (isRevealed) {
      hideStartedRef.current = false;
      setIsDismissPending(false);
    }
  }, [isRevealed]);

  const handlePress = useCallback(() => {
    if (hideStartedRef.current) return;
    hideStartedRef.current = true;
    setIsDismissPending(true);
  }, []);

  const handleAnimationEnd = useCallback(
    (event: React.AnimationEvent<HTMLDivElement>) => {
      if (event.animationName !== "fahh-grow" || !isDismissPending) return;
      hide();
    },
    [hide, isDismissPending],
  );

  if (!isRevealed) return null;

  return (
    <InstantButton
      className={`instant-btn--floating is-revealed${isDismissPending ? " is-dismiss-pending" : ""}`}
      onPress={handlePress}
      onAnimationEnd={handleAnimationEnd}
    />
  );
}
