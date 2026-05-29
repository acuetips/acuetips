import type { Metadata } from "next";
import { contactData } from "@/data/contact";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return {
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
  };
}

export default async function ContactPage() {
  const dict = getDictionary(await getLocale());
  const { contact } = dict;
  const { email, phone } = contactData;

  return (
    <main className="page-contact">
      <article className="page-content">
        <header className="page-header">
          <h1 className="page-title">{contact.title}</h1>
        </header>

        <div className="contact-grid">
          <section className="contact-block">
            <h2 className="contact-block__label">{contact.addressLabel}</h2>
            <p className="contact-block__text">{contact.venue}</p>
            <p className="contact-block__text">{contact.addressLine}</p>
          </section>

          <section className="contact-block">
            <h2 className="contact-block__label">{contact.hoursLabel}</h2>
            <p className="contact-block__text">{contact.weekdayHours}</p>
            <p className="contact-block__text">{contact.weekendHours}</p>
          </section>

          <section className="contact-block">
            <h2 className="contact-block__label">{contact.emailLabel}</h2>
            <p className="contact-block__text">
              <a href={email.href} className="contact-link">
                {email.value}
              </a>
            </p>
          </section>

          <section className="contact-block">
            <h2 className="contact-block__label">{contact.phoneLabel}</h2>
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
