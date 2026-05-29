"use client";

import { contactData } from "@/data/contact";
import { useFahhh } from "@/components/FahhhProvider";
import { useLocale } from "@/i18n/LocaleProvider";

function IconInstagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function SiteFooter() {
  const { dict } = useLocale();
  const { reveal } = useFahhh();
  const { email, phone, social } = contactData;
  const { contact } = dict;
  const copyrightTail = dict.common.copyrightTail.replace(
    "{year}",
    String(new Date().getFullYear()),
  );

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <a
            href={social.instagram}
            className="site-footer__instagram"
            aria-label={dict.common.instagramAria}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram />
          </a>
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
      </div>
      <p className="site-footer__copyright">
        {dict.common.copyrightLead}
        <span
          className="site-footer__easter-trigger"
          onDoubleClick={reveal}
          aria-hidden="true"
        >
          @
        </span>{" "}
        {copyrightTail}
      </p>
    </footer>
  );
}
