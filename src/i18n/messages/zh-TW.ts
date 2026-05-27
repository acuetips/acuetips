import type { DeepStringRecord } from "@/i18n/types";

export const messages = {
  meta: {
    siteTitle: "acuetips.com",
    siteDescription:
      "A CUE TIPS — 專業撞球皮頭，Take Your Adventure To The Next Level.",
    aboutTitle: "about — acuetips.com",
    aboutDescription: "A CUE TIPS — 專注撞球皮頭研發與製造。",
    contactTitle: "contact — acuetips.com",
    contactDescription: "聯絡 A CUE TIPS — 楠梓PRO撞球運動館。",
  },
  nav: {
    home: "home",
    about: "about",
    contact: "contact",
    mainAria: "Main",
  },
  locale: {
    switchAria: "切換語言",
    zh: "中文",
    en: "EN",
  },
  common: {
    brandAlt: "acuetips",
    brandName: "acuetips.com",
    backHome: "回到首頁",
    retry: "重試",
  },
  errors: {
    notFoundTitle: "404",
    notFoundMessage: "找不到這個頁面。",
    errorTitle: "發生錯誤",
    errorMessage: "頁面載入失敗，請再試一次。",
    globalErrorMessage: "網站暫時無法使用，請再試一次。",
  },
  about: {
    title: "關於我們",
    est: "EST.2021",
    heroAlt: "A CUE TIPS",
    intro: [
      "品牌與「少年球王」陳英傑合作，針對職業賽場的極致需求進行研發。共同投入了三年多的時間，進行無數次的反覆測試與修正。",
      "我們承諾提供最穩定、最紮實的打感，讓你每一桿都能得到最真實的回饋。",
      "追求卓越的路上，A CUE TIPS 願做你最穩定的後盾。",
    ],
    craftsmanship: "Craftsmanship",
    featuresAria: "品牌特色",
    features: [
      {
        title: "嚴選頂級皮革",
        body: "皮革是手感的靈魂。A CUE TIPS 堅持選用纖維最堅韌的頂級皮革，並經過嚴格的測試與改良。我們拒絕隨機的手感，透過標準化的職人工法，確保你換上的每一顆皮頭都具備極佳的抓粉力與黏球性，讓你在極限桿法的運用上更加隨心所欲。",
      },
      {
        title: "長效耐用與抗變形",
        body: "針對球友最困擾的「香菇頭」問題進行優化。透過高壓工法與纖維強化處理，我們的皮頭即使在長時間的高強度打擊下，依然能保持形狀穩定、不易死硬。這份持久的彈性，讓你能長時間保有熟悉的擊球節奏，無需頻繁更換。",
      },
      {
        title: "真空極薄黏合工法",
        body: "我們採用特殊的真空極薄黏合技術，讓層與層之間的膠層幾乎隱形。這種極致的薄度，不僅大幅提升了擊球時的能量傳導，更確保了皮頭結構的緊密與穩定，給予你最直接、不發散的擊球回饋。",
      },
    ],
    seriesTitle: "專注研發，實戰淬煉",
    classicSeriesName: "經典 A 系列",
    premiumSeriesName: "Premium A 系列",
    premiumSeriesDesc:
      "M (Medieum)：定義全方位的競技基準。選用法國頂級牛皮，不僅賦予了超越以往的擊球力道與耐用度，更完美保留了細膩的 Q 彈手感與吸附黏著性。力量與精準，自此無需折衷。",
    viewAllSeries: "系列全覽 →",
  },
  contact: {
    title: "聯絡我們",
    addressLabel: "聯絡地址",
    venue: "楠梓PRO撞球運動館",
    addressLine: "811高雄市楠梓區建楠路236號2樓",
    hoursLabel: "營業時間",
    weekdayHours: "星期一至星期五：1pm – 3am",
    weekendHours: "星期六、日：12pm – 3am",
    emailLabel: "Email",
    phoneLabel: "聯絡電話",
  },
  products: {
    specLabels: {
      sku: "sku",
      category: "category",
      options: "options",
    },
    items: {
      "classic-a": {
        description:
          "經典 A 系列，提供 S、M、H 三種硬度選擇，適合不同打法與控球需求。",
        summary: "經典 A 系列，S / M / H 三種硬度，兼顧旋球與控球。",
        features: [
          "S (Soft)：具備優異的軟 Q 感與黏球性，能釋放出色的旋轉值。",
          "M (Medium)：擊球感紮實飽滿，是兼顧控制與力道的全方位選擇。",
          "H (Hard)：提供極佳的穿透力與穩定度，將修正量降至最低。",
        ],
      },
      "premium-a": {
        description:
          "Premium A 系列，定位為進階級皮頭選擇，適合追求更高穩定度與擊球質感的玩家。",
        summary: "Premium A 系列，法國頂級牛皮，強調穩定度與擊球質感。",
        features: [
          "M (Medieum)：定義全方位的競技基準，力量與精準無需折衷。",
        ],
      },
    },
  },
} as const;

export type Messages = DeepStringRecord<typeof messages>;
