import Link from "next/link";
import { routes } from "@/lib/routes";

export default function SiteNotFound() {
  return (
    <main className="page-error">
      <h1 className="page-error__title">404</h1>
      <p className="page-error__message">找不到這個頁面。</p>
      <Link href={routes.home} className="page-error__link">
        回到首頁
      </Link>
    </main>
  );
}
