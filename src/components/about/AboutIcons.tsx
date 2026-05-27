type AboutIconProps = {
  className?: string;
};

export function IconLeather({ className }: AboutIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M5 8c0-2 2-4 7-4s7 2 7 4v8c0 2-2 3-7 3s-7-1-7-3V8z" />
      <path d="M5 12c2 1 4 1.5 7 1.5S17 13 19 12" />
    </svg>
  );
}

export function IconDurability({ className }: AboutIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 3 4 7v6c0 5 3.5 8 8 8s8-3 8-8V7l-8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconBond({ className }: AboutIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 8h16M4 12h16M4 16h16" />
      <path d="M7 6v12M17 6v12" opacity="0.45" />
    </svg>
  );
}

export function IconClassic({ className }: AboutIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M9 10h6M9 14h6" />
    </svg>
  );
}

export function IconPremium({ className }: AboutIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 3 14.5 9H21l-5.5 4.5L18 21 12 16.5 6 21l2.5-7.5L3 9h6.5L12 3z" />
    </svg>
  );
}

export function IconCraft({ className }: AboutIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 20 10 4l2 6 6-2-4 12" />
    </svg>
  );
}
