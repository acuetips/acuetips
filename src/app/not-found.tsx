import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";
import { routes } from "@/lib/routes";

export default async function NotFound() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="page-error">
        <h1 className="page-error__title">{dict.errors.notFoundTitle}</h1>
        <p className="page-error__message">{dict.errors.notFoundMessage}</p>
        <Link href={routes.home} className="page-error__link">
          {dict.common.backHome}
        </Link>
      </main>
    </div>
  );
}
