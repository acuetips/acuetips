"use client";

import { useEffect, useState } from "react";
import {
  defaultLocale,
  isLocale,
  LOCALE_COOKIE,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

function readLocaleFromCookie(): Locale {
  if (typeof document === "undefined") return defaultLocale;

  const match = document.cookie.match(
    new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`),
  );
  const value = match?.[1];

  return value && isLocale(value) ? value : defaultLocale;
}

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    setLocale(readLocaleFromCookie());
  }, []);

  const dict = getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        <main className="page-error">
          <h1 className="page-error__title">{dict.errors.errorTitle}</h1>
          <p className="page-error__message">{dict.errors.globalErrorMessage}</p>
          <button type="button" className="page-error__button" onClick={reset}>
            {dict.common.retry}
          </button>
        </main>
      </body>
    </html>
  );
}
