import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const productSlugs = ["classic-a", "premium-a"] as const;

export type ProductSlug = (typeof productSlugs)[number];

export type ProductBase = {
  id: number;
  slug: ProductSlug;
  name: string;
  variant: string;
  price: string;
  sku: string;
  category: string;
  hardness: string;
  options: string[];
  specs: {
    sku: string;
    category: string;
    options: string;
  };
  images: string[];
};

export type Product = ProductBase & {
  description: string;
  summary: string;
  features: string[];
};

const productBases: ProductBase[] = [
  {
    id: 1,
    slug: "classic-a",
    name: "CLASSIC A",
    variant: "NT$1,000",
    price: "NT$1,000",
    sku: "acuetips-classic",
    category: "Classic A",
    hardness: "S / M / H",
    options: ["S", "M", "H"],
    specs: {
      sku: "acuetips-classic",
      category: "Classic A",
      options: "S, M, H",
    },
    images: ["/products/classic-a.jpg"],
  },
  {
    id: 2,
    slug: "premium-a",
    name: "PREMIUM A",
    variant: "NT$2,000",
    price: "NT$2,000",
    sku: "acuetips-premium",
    category: "Premium A",
    hardness: "M — Medieum",
    options: ["M"],
    specs: {
      sku: "acuetips-premium",
      category: "Premium A",
      options: "M",
    },
    images: ["/products/classic-a.jpg"],
  },
];

export function getProducts(locale: Locale): Product[] {
  const dict = getDictionary(locale);

  return productBases.map((base) => {
    const copy = dict.products.items[base.slug];
    return {
      ...base,
      description: copy.description,
      summary: copy.summary,
      features: [...copy.features],
    };
  });
}

export function getProductBySlug(
  slug: string,
  locale: Locale,
): Product | undefined {
  return getProducts(locale).find((product) => product.slug === slug);
}

/** @deprecated Use getProducts(locale) */
export const products = productBases;
