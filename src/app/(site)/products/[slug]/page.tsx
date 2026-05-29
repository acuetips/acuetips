import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getRelatedProducts,
  productSlugs,
  type ProductSlug,
} from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";
import { formatPrice } from "@/lib/format-price";
import { routes } from "@/lib/routes";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const product = getProductBySlug(slug, locale);

  if (!product) return { title: dict.meta.siteTitle };

  return {
    title: `${product.name} — acuetips.com`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const product = getProductBySlug(slug, locale);

  if (!product) notFound();

  const specLabels = dict.products.specLabels;
  const productCopy = dict.products.items[product.slug as ProductSlug];
  const relatedProducts = getRelatedProducts(product.slug, locale);

  return (
    <main className="page-product">
      <div className="product-detail">
        <div className="product-detail__media">
          <img
            className="product-detail__hero"
            src={product.images[0]}
            alt={product.name}
          />
        </div>

        <div className="product-detail__info">
          <p className="product-detail__series">{productCopy.seriesLabel}</p>
          <h1 className="product-detail__title">{product.name}</h1>
          <p className="product-detail__price">{formatPrice(product.price)}</p>
          <p className="product-detail__hardness">{product.hardness}</p>

          <p className="product-detail__description">{product.description}</p>

          {product.features.length > 0 && (
            <ul className="product-detail__features">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}

          <dl className="product-detail__specs">
            <dt>{specLabels.sku}</dt>
            <dd>{product.specs.sku}</dd>
            <dt>{specLabels.category}</dt>
            <dd>{product.specs.category}</dd>
            <dt>{specLabels.options}</dt>
            <dd>{product.specs.options}</dd>
          </dl>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="product-related" aria-label={dict.products.relatedTitle}>
          <h2 className="product-related__title">{dict.products.relatedTitle}</h2>
          <div className="product-related__track">
            {relatedProducts.map((related) => {
              const relatedCopy =
                dict.products.items[related.slug as ProductSlug];

              return (
                <Link
                  key={related.slug}
                  href={routes.product(related.slug)}
                  className="product-related__card"
                >
                  <div className="product-related__thumb">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      width={120}
                      height={120}
                    />
                  </div>
                  <p className="product-related__series">{relatedCopy.seriesLabel}</p>
                  <p className="product-related__name">{related.name}</p>
                  <p className="product-related__price">
                    {formatPrice(related.price)}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
