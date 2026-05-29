const PRICE_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

/** 標準格式：NT$ 1,000 */
export function formatPrice(amount: number, currency = "NT$"): string {
  return `${currency} ${PRICE_FORMATTER.format(amount)}`;
}
