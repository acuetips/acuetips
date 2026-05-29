"use client";

import { InstantButton } from "@/components/InstantButton";
import { useFahhh } from "@/components/FahhhProvider";

export function FahhhEasterEgg() {
  const { isRevealed, hide } = useFahhh();

  if (!isRevealed) return null;

  return (
    <InstantButton
      className="instant-btn--floating is-revealed"
      onPress={hide}
    />
  );
}
