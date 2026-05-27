import type { DeepStringRecord } from "@/i18n/types";
import { messages as zhTWMessages } from "@/i18n/messages/zh-TW";

export const messages = {
  meta: {
    siteTitle: "acuetips.com",
    siteDescription:
      "A CUE TIPS — Professional cue tips. Take Your Adventure To The Next Level.",
    aboutTitle: "about — acuetips.com",
    aboutDescription:
      "A CUE TIPS — Dedicated to cue tip R&D and manufacturing.",
    contactTitle: "contact — acuetips.com",
    contactDescription:
      "Contact A CUE TIPS — Nanzih PRO Billiards Sports Center.",
  },
  nav: {
    home: "home",
    about: "about",
    contact: "contact",
    mainAria: "Main",
  },
  locale: {
    switchAria: "Switch language",
    zh: "中文",
    en: "EN",
  },
  common: {
    brandAlt: "acuetips",
    brandName: "acuetips.com",
    backHome: "Back to home",
    retry: "Retry",
  },
  errors: {
    notFoundTitle: "404",
    notFoundMessage: "Page not found.",
    errorTitle: "Something went wrong",
    errorMessage: "Failed to load this page. Please try again.",
    globalErrorMessage: "The site is temporarily unavailable. Please try again.",
  },
  about: {
    title: "About Us",
    est: "EST.2021",
    heroAlt: "A CUE TIPS",
    intro: [
      "In partnership with \"Young Billiards King\" Chen Ying-chieh, we develop cue tips for the demands of professional competition. Together we spent over three years in repeated testing and refinement.",
      "We promise a stable, solid feel so every shot gives you honest feedback.",
      "On the path to excellence, A CUE TIPS is your most reliable support.",
    ],
    craftsmanship: "Craftsmanship",
    featuresAria: "Brand highlights",
    features: [
      {
        title: "Premium Leather Selection",
        body: "Leather is the soul of feel. A CUE TIPS insists on top-grade leather with the toughest fibers, rigorously tested and refined. We reject random hand-feel — standardized craftsmanship ensures every tip you install delivers excellent chalk hold and grip for the most demanding cue ball control.",
      },
      {
        title: "Long-lasting Durability",
        body: "Optimized for the \"mushroom head\" problem players know too well. High-pressure processing and fiber reinforcement keep the tip stable under long, hard sessions without going dead. That lasting elasticity preserves your rhythm — fewer replacements, more consistency.",
      },
      {
        title: "Ultra-thin Vacuum Bonding",
        body: "Our special ultra-thin vacuum bonding keeps adhesive layers nearly invisible between plies. That extreme thinness improves energy transfer on impact and keeps the tip structure tight and stable — direct feedback without scatter.",
      },
    ],
    seriesTitle: "R&D Focus, Battle-tested",
    classicSeriesName: "Classic A Series",
    premiumSeriesName: "Premium A Series",
    premiumSeriesDesc:
      "M (Medieum): The all-round competitive benchmark. French top-grain leather delivers more power and durability than before while keeping fine Q-feel and chalk adhesion. Power and precision — no compromise.",
    viewAllSeries: "View all series →",
  },
  contact: {
    title: "Contact Us",
    addressLabel: "Address",
    venue: "Nanzih PRO Billiards Sports Center",
    addressLine: "2F, No. 236, Jiannan Rd., Nanzih Dist., Kaohsiung 811",
    hoursLabel: "Hours",
    weekdayHours: "Mon – Fri: 1pm – 3am",
    weekendHours: "Sat – Sun: 12pm – 3am",
    emailLabel: "Email",
    phoneLabel: "Phone",
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
          "Classic A series with S, M, and H hardness options for different playing styles and control needs.",
        summary:
          "Classic A series — S / M / H hardness for spin and control.",
        features: [
          "S (Soft): Soft Q-feel and grip for excellent spin.",
          "M (Medium): Solid, full hit — balanced control and power.",
          "H (Hard): Strong penetration and stability with minimal deflection.",
        ],
      },
      "premium-a": {
        description:
          "Premium A series — an advanced cue tip for players who want higher stability and shot quality.",
        summary:
          "Premium A series — French top-grain leather, stability and feel.",
        features: [
          "M (Medieum): The all-round competitive benchmark — power and precision without compromise.",
        ],
      },
    },
  },
} satisfies DeepStringRecord<typeof zhTWMessages>;
