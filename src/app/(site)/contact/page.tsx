import type { Metadata } from "next";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "contact — acuetips.com",
  description: "聯絡 A CUE TIPS — 楠梓PRO撞球運動館。",
};

export default function ContactPage() {
  const { address, hours, email, phone } = contactInfo;

  return (
    <main className="page-contact">
      <article className="contact-content">
        <header className="contact-head">
          <h1 className="contact-title">聯絡我們</h1>
        </header>

        <div className="contact-grid">
          <section className="contact-block">
            <h2 className="contact-block__label">{address.label}</h2>
            <p className="contact-block__text">{address.venue}</p>
            <p className="contact-block__text">{address.line}</p>
          </section>

          <section className="contact-block">
            <h2 className="contact-block__label">{hours.label}</h2>
            <p className="contact-block__text">{hours.weekday}</p>
            <p className="contact-block__text">{hours.weekend}</p>
          </section>

          <section className="contact-block">
            <h2 className="contact-block__label">{email.label}</h2>
            <p className="contact-block__text">
              <a href={email.href} className="contact-link">
                {email.value}
              </a>
            </p>
          </section>

          <section className="contact-block">
            <h2 className="contact-block__label">{phone.label}</h2>
            <p className="contact-block__text">
              <a href={phone.mobileHref} className="contact-link">
                {phone.mobile}
              </a>
            </p>
            <p className="contact-block__text">
              <a href={phone.landlineHref} className="contact-link">
                {phone.landline}
              </a>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
