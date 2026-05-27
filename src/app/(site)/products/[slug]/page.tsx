import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "acuetips.com" };

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
  const product = getProductBySlug(slug);
  if (!product) notFound();

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
          <p className="product-detail__series">{product.category}</p>
          <h1 className="product-detail__title">{product.name}</h1>
          <p className="product-detail__price">{product.price}</p>
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
            <dt>sku</dt>
            <dd>{product.specs.sku}</dd>
            <dt>category</dt>
            <dd>{product.specs.category}</dd>
            <dt>options</dt>
            <dd>{product.specs.options}</dd>
          </dl>
        </div>
      </div>
    </main>
  );
}
