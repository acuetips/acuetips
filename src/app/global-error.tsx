"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="zh-TW">
      <body>
        <main className="page-error">
          <h1 className="page-error__title">發生錯誤</h1>
          <p className="page-error__message">網站暫時無法使用，請再試一次。</p>
          <button type="button" className="page-error__button" onClick={reset}>
            重試
          </button>
        </main>
      </body>
    </html>
  );
}
