export type Product = {
  id: number;
  slug: string;
  name: string;
  variant: string;
  price: string;
  sku: string;
  category: string;
  hardness: string;
  options: string[];
  description: string;
  summary: string;
  features: string[];
  specs: {
    sku: string;
    category: string;
    options: string;
  };
  images: string[];
};

export const products: Product[] = [
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
    description:
      "經典 A 系列，提供 S、M、H 三種硬度選擇，適合不同打法與控球需求。",
    summary: "經典 A 系列，S / M / H 三種硬度，兼顧旋球與控球。",
    features: [
      "S (Soft)：具備優異的軟 Q 感與黏球性，能釋放出色的旋轉值。",
      "M (Medium)：擊球感紮實飽滿，是兼顧控制與力道的全方位選擇。",
      "H (Hard)：提供極佳的穿透力與穩定度，將修正量降至最低。",
    ],
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
    description:
      "Premium A 系列，定位為進階級皮頭選擇，適合追求更高穩定度與擊球質感的玩家。",
    summary: "Premium A 系列，法國頂級牛皮，強調穩定度與擊球質感。",
    features: [
      "M (Medieum)：定義全方位的競技基準，力量與精準無需折衷。",
    ],
    specs: {
      sku: "acuetips-premium",
      category: "Premium A",
      options: "M",
    },
    images: ["/products/classic-a.jpg"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
