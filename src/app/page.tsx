import Link from "next/link";
import { InstantButton } from "@/components/InstantButton";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main className="page-home">
      <header className="site-header">
        <div className="site-header__title">
          <img
            className="site-logo__image site-logo__image--animated"
            src="/logo.png"
            alt="GOD OF CUE TIP logo"
            width={100}
            height={100}
          />
          <h1 className="site-logo">GOD OF CUE TIP</h1>
        </div>
        <nav className="site-nav">
          <Link href="/">home</Link>
          <Link href="#about">about</Link>
        </nav>
      </header>

      <section className="product-list">
        {products.slice(0, 4).map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="product-row"
          >
            <div className="product-row__info">
              <span className="product-row__index">{product.id}.</span>
              <span className="product-row__name">{product.name}</span>
              <span className="product-row__variant">{product.variant}</span>
            </div>
            <div className="product-row__thumb">
              <img
                src={product.images[0]}
                alt={product.name}
                width={96}
                height={120}
              />
            </div>
          </Link>
        ))}
      </section>

      <footer className="site-footer" id="about">
        <div>
          <p>© GOD OF CUE TIP</p>
          <p>Kaohsiung, TW</p>
        </div>
        <div className="site-footer__contact">
          <p>info@godofcuetip.com</p>
          <p>@god_of_cue_tip</p>
        </div>
      </footer>

      <InstantButton className="instant-btn--floating" />
    </main>
  );
}
