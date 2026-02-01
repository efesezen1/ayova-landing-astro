import en from "../language/en.json";
import tr from "../language/tr.json";

export type Translations = typeof en;
export type Lang = "en" | "tr";

export const supportedLanguages: Lang[] = ["en", "tr"];
export const defaultLang: Lang = "en";

const translations: Record<Lang, Translations> = { en, tr };

export function getTranslations(lang: Lang): Translations {
  return translations[lang] ?? translations[defaultLang];
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${clean}`;
}
