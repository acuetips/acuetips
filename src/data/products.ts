export type Product = {
  id: number;
  slug: string;
  name: string;
  variant: string;
  category: string;
  hardness: string;
  colors: string[];
  description: string;
  specs: {
    diameter: string;
    material: string;
    layers: string;
    origin: string;
  };
  images: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "kamui-black",
    name: "KAMUI BLACK",
    variant: "pro tip",
    category: "layered",
    hardness: "M / 中硬",
    colors: ["black"],
    description:
      "多層結構專業皮頭，採用日本頂級鞣製皮革。中硬硬度適合大多數球路，控球穩定、耐用性高。9 層精密壓合，表面紋理細緻。",
    specs: {
      diameter: "13mm",
      material: "日本鞣製皮革",
      layers: "9 層",
      origin: "日本",
    },
    images: [
      "https://picsum.photos/seed/kamui1/800/1000",
      "https://picsum.photos/seed/kamui2/800/1000",
    ],
  },
  {
    id: 2,
    slug: "triangle-pro",
    name: "TRIANGLE PRO",
    variant: "classic",
    category: "single",
    hardness: "H / 硬",
    colors: ["blue", "green"],
    description:
      "美國經典單層皮頭，硬質配方提供最大旋球量。職業選手首選，適合進攻型打法。需定期打磨維持最佳狀態。",
    specs: {
      diameter: "13mm / 14mm",
      material: "美國鞣製皮革",
      layers: "單層",
      origin: "美國",
    },
    images: [
      "https://picsum.photos/seed/triangle1/800/1000",
      "https://picsum.photos/seed/triangle2/800/1000",
    ],
  },
  {
    id: 3,
    slug: "moori-v",
    name: "MOORI V",
    variant: "v2.0",
    category: "layered",
    hardness: "S / 軟",
    colors: ["brown", "tan"],
    description:
      "義大利 Moori 第五代多層皮頭，軟質觸感提供極佳的母球控制。適合需要精細走位的中級至進階玩家。",
    specs: {
      diameter: "13mm",
      material: "義大利鞣製皮革",
      layers: "8 層",
      origin: "義大利",
    },
    images: [
      "https://picsum.photos/seed/moori1/800/1000",
    ],
  },
  {
    id: 4,
    slug: "super-pro-50",
    name: "SUPER PRO 50",
    variant: "premium",
    category: "layered",
    hardness: "MH / 中偏硬",
    colors: ["red", "black"],
    description:
      "Super Pro 系列旗艦款，50 層超精密壓合結構。中偏硬硬度，兼具控球與旋球表現。台灣製造，品質穩定。",
    specs: {
      diameter: "13mm",
      material: "進口鞣製皮革",
      layers: "50 層",
      origin: "台灣",
    },
    images: [
      "https://picsum.photos/seed/superpro1/800/1000",
      "https://picsum.photos/seed/superpro2/800/1000",
    ],
  },
  {
    id: 5,
    slug: "elk-master",
    name: "ELK MASTER",
    variant: "original",
    category: "single",
    hardness: "M / 中硬",
    colors: ["natural"],
    description:
      "百年品牌 Elk Master 原廠皮頭，鹿皮鞣製天然皮革。中硬配方，適合入門至中級玩家。性價比極高的經典選擇。",
    specs: {
      diameter: "12.75mm / 13mm",
      material: "鹿皮鞣製",
      layers: "單層",
      origin: "美國",
    },
    images: [
      "https://picsum.photos/seed/elk1/800/1000",
    ],
  },
  {
    id: 6,
    slug: "taom-soft",
    name: "TAOM SOFT",
    variant: "v3",
    category: "layered",
    hardness: "SS / 超軟",
    colors: ["grey", "white"],
    description:
      "芬蘭 Taom 超軟系列，專為花式撞球與精細控球設計。極軟觸感讓母球停留時間更長，適合表演型打法。",
    specs: {
      diameter: "13mm",
      material: "芬蘭鞣製皮革",
      layers: "6 層",
      origin: "芬蘭",
    },
    images: [
      "https://picsum.photos/seed/taom1/800/1000",
      "https://picsum.photos/seed/taom2/800/1000",
    ],
  },
  {
    id: 7,
    slug: "predator-victory",
    name: "PREDATOR VICTORY",
    variant: "carbon fiber",
    category: "specialty",
    hardness: "H / 硬",
    colors: ["carbon black"],
    description:
      "Predator 碳纖維複合皮頭，革命性材質提供一致性的擊球回饋。低變形、高耐用，職業賽事指定用款。",
    specs: {
      diameter: "13mm",
      material: "碳纖維複合",
      layers: "複合結構",
      origin: "美國",
    },
    images: [
      "https://picsum.photos/seed/predator1/800/1000",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
