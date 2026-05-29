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
    home: "Home",
    about: "About",
    contact: "Contact",
    mainAria: "Main",
  },
  locale: {
    switchAria: "Switch language",
    zh: "中",
    en: "EN",
  },
  common: {
    brandAlt: "acuetips",
    brandName: "acuetips.com",
    instagramAria: "acuetips Instagram",
    copyrightLead: "Copyright ",
    copyrightTail: "{year} acuetips",
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
    est: "- EST. 2021",
    heroAlt: "A CUE TIPS",
    introLead: [
      "A CUE TIPS was born from a simple belief: help players trust their feel again.",
      "Founder Chen Ying-chieh — the \"Young Billiards King\" — saw through years of competition and coaching that many tips play well when new, but quickly mushroom, go dead, or lose their original response.",
      "To build a tip that truly meets competitive needs and lasts, he spent over three years in R&D and testing. A tip is the only link between your cue and the cue ball. We focused on leather fiber density and resilience, and through selected materials and pressing methods, A CUE TIPS addresses the mushrooming problem players struggle with most.",
      "We use premium leather — French top-grain — to improve chalk hold, helping chalk adhere more evenly, reducing miscues at critical moments, and giving you more direct, powerful cueing.",
      "We keep product choices straightforward — pure feel, clearly graded.",
    ],
    classicHeading: "The Classic layered series offers three hardness options:",
    classicOptions: [
      "S (Soft): Soft Q-feel and grip for excellent spin.",
      "M (Medium): A solid, full hit — balanced control and power.",
      "H (Hard): Strong penetration and stability with minimal deflection.",
    ],
    introTail: [
      "For players who want ready-to-play performance, our handcrafted leather tips break in quickly so you can find your rhythm sooner. To us, each tip is more than a consumable — every A CUE TIPS in its refined tin box reflects Chen's commitment to quality.",
      "We won't promise instant mastery — but we do promise a stable, honest feel so every shot gives you real feedback.",
    ],
    introClosing:
      "On the path to excellence, A CUE TIPS is your most reliable support.",
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
    relatedTitle: "Related",
    specLabels: {
      sku: "sku",
      category: "category",
      options: "options",
    },
    items: {
      "classic-a": {
        seriesLabel: "Classic series",
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
        seriesLabel: "Premium series",
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
