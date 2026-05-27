import Link from "next/link";
import { InstantButton } from "@/components/InstantButton";
import { getProducts } from "@/data/products";
import { getLocale } from "@/i18n/get-locale";
import { routes } from "@/lib/routes";

export default async function HomePage() {
  const locale = await getLocale();
  const products = getProducts(locale);

  return (
    <main className="page-home">
      <section className="product-list">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={routes.product(product.slug)}
            className="product-row"
          >
            <div className="product-row__info">
              <div className="product-row__head">
                <span className="product-row__index">{product.id}.</span>
                <span className="product-row__name">{product.name}</span>
                <span className="product-row__variant">{product.variant}</span>
              </div>
              <span className="product-row__summary">{product.summary}</span>
            </div>
            <div className="product-row__thumb">
              <img
                src={product.images[0]}
                alt={product.name}
                width={280}
                height={280}
              />
            </div>
          </Link>
        ))}
      </section>

      <InstantButton className="instant-btn--floating" />
    </main>
  );
}
