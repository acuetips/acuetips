const INSTANT_BTN_IMAGES = [
  "/instant-btn/sprite.png",
  "/instant-btn/shadow.png",
] as const;

let preloadPromise: Promise<void> | null = null;

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to preload ${src}`));
    img.src = src;
  });
}

export function preloadInstantButtonAssets(): Promise<void> {
  if (!preloadPromise) {
    preloadPromise = Promise.all(
      INSTANT_BTN_IMAGES.map(preloadImage),
    ).then(() => undefined);
  }

  return preloadPromise;
}
