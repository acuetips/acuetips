import type { Locale } from "@/i18n/config";
import { messages as en } from "@/i18n/messages/en";
import { messages as zhTW } from "@/i18n/messages/zh-TW";
import type { Messages } from "@/i18n/messages/zh-TW";

const dictionaries: Record<Locale, Messages> = {
  "zh-TW": zhTW,
  en,
};

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale];
}
