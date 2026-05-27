import { contactInfo } from "@/data/contact";

export function SiteFooter() {
  const { address, email, phone } = contactInfo;

  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <p className="site-footer__name">acuetips.com</p>
        <p>{address.venue}</p>
        <p>{address.line}</p>
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
