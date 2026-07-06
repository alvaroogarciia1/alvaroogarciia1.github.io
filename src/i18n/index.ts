import en from "./en";
import es from "./es";

export type Language = "en" | "es";

const translations = {
  en,
  es,
} as const;

export const getTranslation = (lang: Language) => translations[lang];

export { en, es };