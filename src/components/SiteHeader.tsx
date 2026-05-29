"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { useLocale } from "@/i18n/LocaleProvider";
import { routes } from "@/lib/routes";

const STICKY_ENTER_Y = 12;
const STICKY_EXIT_Y = 4;

export function SiteHeader() {
  const pathname = usePathname();
  const { dict } = useLocale();
  const groupRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const isStickyRef = useRef(false);
  const [isSticky, setIsSticky] = useState(false);

  const navItems = [
    { href: routes.home, label: dict.nav.home },
    { href: routes.about, label: dict.nav.about },
    { href: routes.contact, label: dict.nav.contact },
  ] as const;

  const syncHeaderMetrics = () => {
    if (!groupRef.current || isStickyRef.current) return;

    const height = groupRef.current.offsetHeight;
    document.documentElement.style.setProperty(
      "--site-header-offset",
      `${height}px`,
    );
  };

  const setStickyState = (next: boolean) => {
    const header = headerRef.current;
    const spacer = spacerRef.current;
    const group = groupRef.current;
    if (!header || !spacer || !group) return;

    if (next === isStickyRef.current) return;

    if (next) {
      const height = group.offsetHeight;
      spacer.style.height = `${height}px`;
      header.classList.add("is-sticky");
      document.documentElement.style.setProperty(
        "--site-header-offset",
        `${height}px`,
      );
    } else {
      header.classList.remove("is-sticky");
      spacer.style.height = "0px";
      syncHeaderMetrics();
    }

    isStickyRef.current = next;
    setIsSticky(next);
  };

  useEffect(() => {
    setStickyState(false);
  }, [pathname]);

  useLayoutEffect(() => {
    syncHeaderMetrics();

    const onScroll = () => {
      const y = window.scrollY;
      const shouldStick = isStickyRef.current
        ? y > STICKY_EXIT_Y
        : y > STICKY_ENTER_Y;

      setStickyState(shouldStick);
    };

    const onResize = () => {
      if (isStickyRef.current && spacerRef.current && headerRef.current) {
        const height = headerRef.current.offsetHeight;
        spacerRef.current.style.height = `${height}px`;
        document.documentElement.style.setProperty(
          "--site-header-offset",
          `${height}px`,
        );
      } else {
        syncHeaderMetrics();
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  return (
    <div ref={groupRef} className="site-header-group">
      <div
        ref={spacerRef}
        className="site-header-spacer"
        aria-hidden="true"
      />
      <header ref={headerRef} className={`site-header${isSticky ? " is-sticky" : ""}`}>
        <div className="site-header__inner">
          <Link href={routes.home} className="site-header__title">
            <span className="site-logo__slot">
              <img
                className="site-logo__image"
                src="/logo.png"
                alt={dict.common.brandAlt}
                decoding="async"
              />
            </span>
          </Link>
          <nav className="site-nav" aria-label={dict.nav.mainAria}>
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
            <LocaleSwitcher />
          </nav>
        </div>
      </header>
    </div>
  );
}
