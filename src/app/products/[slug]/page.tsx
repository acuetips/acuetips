import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
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
      <Link href="/" className="back-link">
        ← back
      </Link>

      <div className="product-detail">
        <img
          className="product-detail__hero"
          src={product.images[0]}
          alt={product.name}
        />

        <div className="product-detail__info">
          <h1 className="product-detail__title">
            {product.id}. {product.name}
          </h1>

          <p className="product-detail__hardness">{product.hardness}</p>

          <ul className="color-list">
            {product.colors.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <p className="product-detail__description">{product.description}</p>

          <dl className="product-detail__specs">
            <dt>diameter</dt>
            <dd>{product.specs.diameter}</dd>
            <dt>material</dt>
            <dd>{product.specs.material}</dd>
            <dt>layers</dt>
            <dd>{product.specs.layers}</dd>
            <dt>origin</dt>
            <dd>{product.specs.origin}</dd>
          </dl>
        </div>
      </div>
    </main>
  );
}
