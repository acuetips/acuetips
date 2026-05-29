import type { Metadata } from "next";
import Link from "next/link";
import {
  IconBond,
  IconDurability,
  IconLeather,
} from "@/components/about/AboutIcons";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";
import { routes } from "@/lib/routes";

const featureIcons = [IconLeather, IconDurability, IconBond] as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return {
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
  };
}

export default async function AboutPage() {
  const dict = getDictionary(await getLocale());
  const { about } = dict;
  const classicFeatures = dict.products.items["classic-a"].features;

  return (
    <main className="page-about">
      <article className="page-content">
        <section className="about-story">
          <div className="about-story__media">
            <img
              className="about-story__image"
              src="/about-hero.webp"
              alt={about.heroAlt}
              width={640}
              height={880}
            />
          </div>

          <div className="about-story__copy">
            <header className="page-header">
              <h1 className="page-title">{about.title}</h1>
              <p className="page-subtitle">{about.est}</p>
            </header>

            <div className="about-intro">
              {about.introLead.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <p className="about-intro__heading">{about.classicHeading}</p>
              <ul className="about-list">
                {about.classicOptions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {about.introTail.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <p className="about-intro__closing">{about.introClosing}</p>
            </div>
          </div>
        </section>

        <section className="about-features" aria-label={about.featuresAria}>
          <div className="about-features__grid">
            {about.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <article key={feature.title} className="about-feature">
                  <span className="about-feature__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3 className="about-feature__title">{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-series">
          <h2 className="about-series__title">{about.seriesTitle}</h2>

          <div className="about-series__grid">
            <article className="about-series__item">
              <h3 className="about-series__name">{about.classicSeriesName}</h3>
              <ul className="about-list">
                {classicFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="about-series__item">
              <h3 className="about-series__name">{about.premiumSeriesName}</h3>
              <p className="about-series__desc">{about.premiumSeriesDesc}</p>
            </article>
          </div>

          <Link href={routes.home} className="about-series__link">
            {about.viewAllSeries}
          </Link>
        </section>
      </article>
    </main>
  );
}
