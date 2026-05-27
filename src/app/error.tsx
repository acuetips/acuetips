"use client";

import Link from "next/link";
import { useEffect } from "react";
import { routes } from "@/lib/routes";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="page-error">
      <h1 className="page-error__title">發生錯誤</h1>
      <p className="page-error__message">頁面載入失敗，請再試一次。</p>
      <div className="page-error__actions">
        <button type="button" className="page-error__button" onClick={reset}>
          重試
        </button>
        <Link href={routes.home} className="page-error__link">
          回到首頁
        </Link>
      </div>
    </main>
  );
}
