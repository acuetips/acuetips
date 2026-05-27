"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { routes } from "@/lib/routes";

const navItems = [
  { href: routes.home, label: "home" },
  { href: routes.about, label: "about" },
  { href: routes.contact, label: "contact" },
] as const;

const STICKY_THRESHOLD_MIN = 80;
const ENTER_OFFSET = 16;
const EXIT_OFFSET = 16;
const SCROLL_BUFFER = 32;

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const thresholdRef = useRef(120);
  const expandedHeightRef = useRef(0);
  const isStickyRef = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    isStickyRef.current = isSticky;
  }, [isSticky]);

  useEffect(() => {
    setIsSticky(false);
  }, [pathname]);

  useEffect(() => {
    if (!mounted) return;

    const measureExpanded = () => {
      if (isStickyRef.current || !headerRef.current) return;

      const height = headerRef.current.offsetHeight;
      expandedHeightRef.current = height;
      thresholdRef.current = Math.max(
        STICKY_THRESHOLD_MIN,
        Math.round(height * 0.85),
      );
    };

    const canScroll = () =>
      document.documentElement.scrollHeight >
      window.innerHeight + thresholdRef.current + SCROLL_BUFFER;

    const onScroll = () => {
      if (!canScroll()) {
        setIsSticky(false);
        return;
      }

      const y = window.scrollY;
      const threshold = thresholdRef.current;

      setIsSticky((prev) => {
        if (!prev && y > threshold + ENTER_OFFSET) {
          const height =
            expandedHeightRef.current || headerRef.current?.offsetHeight || 0;
          if (height > 0) setPlaceholderHeight(height);
          return true;
        }
        if (prev && y < threshold - EXIT_OFFSET) return false;
        return prev;
      });
    };

    const onResize = () => {
      measureExpanded();
      onScroll();
    };

    measureExpanded();
    onScroll();

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [mounted, pathname]);

  const stickyActive = mounted && isSticky;

  return (
    <div
      className="site-header-group"
      style={stickyActive ? { minHeight: placeholderHeight } : undefined}
    >
      <header
        ref={headerRef}
        className={`site-header${stickyActive ? " is-sticky" : ""}`}
      >
        <div className="site-header__inner">
          <Link href={routes.home} className="site-header__title">
            <img
              className="site-logo__image"
              src="/logo.png"
              alt="acuetips"
              decoding="async"
            />
          </Link>
          <nav className="site-nav" aria-label="Main">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? "is-active" : undefined}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
