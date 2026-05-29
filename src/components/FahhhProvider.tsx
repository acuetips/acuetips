"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type FahhhContextValue = {
  isRevealed: boolean;
  reveal: () => void;
  hide: () => void;
};

const FahhhContext = createContext<FahhhContextValue | null>(null);

export function FahhhProvider({ children }: { children: React.ReactNode }) {
  const [isRevealed, setIsRevealed] = useState(false);

  const reveal = useCallback(() => {
    setIsRevealed(true);
  }, []);

  const hide = useCallback(() => {
    setIsRevealed(false);
  }, []);

  return (
    <FahhhContext.Provider value={{ isRevealed, reveal, hide }}>
      {children}
    </FahhhContext.Provider>
  );
}

export function useFahhh() {
  const context = useContext(FahhhContext);
  if (!context) {
    throw new Error("useFahhh must be used within FahhhProvider");
  }
  return context;
}
