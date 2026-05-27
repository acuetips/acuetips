export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  product: (slug: string) => `/products/${slug}`,
} as const;

export type SiteRoute = (typeof routes)[keyof typeof routes] | ReturnType<typeof routes.product>;
