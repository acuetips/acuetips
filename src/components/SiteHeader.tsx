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

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const thresholdRef = useRef(120);
  const [mounted, setMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const measureThreshold = () => {
      if (headerRef.current) {
        thresholdRef.current = Math.max(
          STICKY_THRESHOLD_MIN,
          Math.round(headerRef.current.offsetHeight * 0.85),
        );
      }
    };

    measureThreshold();
    window.addEventListener("resize", measureThreshold);

    const onScroll = () => {
      const shouldStick = window.scrollY > thresholdRef.current;

      setIsSticky((prev) => {
        if (shouldStick && !prev && headerRef.current) {
          setSpacerHeight(headerRef.current.offsetHeight);
        }
        return shouldStick;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measureThreshold);
    };
  }, [mounted, pathname]);

  useEffect(() => {
    if (!mounted || isSticky) return;

    const measure = () => {
      if (headerRef.current) {
        setSpacerHeight(headerRef.current.offsetHeight);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [mounted, isSticky, pathname]);

  const stickyActive = mounted && isSticky;

  return (
    <div className="site-header-group">
      {stickyActive && (
        <div
          className="site-header-spacer"
          style={{ height: spacerHeight }}
          aria-hidden="true"
        />
      )}

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
