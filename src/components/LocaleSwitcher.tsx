"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setLocale } from "@/i18n/actions";
import type { Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

export function LocaleSwitcher() {
  const { locale, dict } = useLocale();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale || pending) return;

    startTransition(async () => {
      await setLocale(next);
      router.refresh();
    });
  };

  return (
    <div
      className="locale-switcher"
      role="group"
      aria-label={dict.locale.switchAria}
    >
      <button
        type="button"
        className={`locale-switcher__btn${locale === "zh-TW" ? " is-active" : ""}`}
        aria-pressed={locale === "zh-TW"}
        disabled={pending}
        onClick={() => switchTo("zh-TW")}
      >
        {dict.locale.zh}
      </button>
      <span className="locale-switcher__sep" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={`locale-switcher__btn${locale === "en" ? " is-active" : ""}`}
        aria-pressed={locale === "en"}
        disabled={pending}
        onClick={() => switchTo("en")}
      >
        {dict.locale.en}
      </button>
    </div>
  );
}
