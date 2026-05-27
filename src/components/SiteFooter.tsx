"use client";

import { contactData } from "@/data/contact";
import { useLocale } from "@/i18n/LocaleProvider";

export function SiteFooter() {
  const { dict } = useLocale();
  const { email, phone } = contactData;
  const { contact } = dict;

  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <p className="site-footer__name">{dict.common.brandName}</p>
        <p>{contact.venue}</p>
        <p>{contact.addressLine}</p>
      </div>
      <div className="site-footer__contact">
        <p>
          <a href={email.href} className="site-footer__link">
            {email.value}
          </a>
        </p>
        <p>
          <a href={phone.mobileHref} className="site-footer__link">
            {phone.mobile}
          </a>
        </p>
        <p>
          <a href={phone.landlineHref} className="site-footer__link">
            {phone.landline}
          </a>
        </p>
      </div>
    </footer>
  );
}
