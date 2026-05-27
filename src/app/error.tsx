"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { routes } from "@/lib/routes";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { dict } = useLocale();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="page-error">
      <h1 className="page-error__title">{dict.errors.errorTitle}</h1>
      <p className="page-error__message">{dict.errors.errorMessage}</p>
      <div className="page-error__actions">
        <button type="button" className="page-error__button" onClick={reset}>
          {dict.common.retry}
        </button>
        <Link href={routes.home} className="page-error__link">
          {dict.common.backHome}
        </Link>
      </div>
    </main>
  );
}
