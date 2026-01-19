import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations, Language } from "./translations";

export function useT() {
  const { language, setLanguage } = useContext(LanguageContext);

  const t = (key: string): string => {
    const langTranslations = translations[language] as Record<string, string>;
    if (langTranslations && langTranslations[key]) {
      return langTranslations[key];
    }
    // Fallback to English
    const enTranslations = translations.en as Record<string, string>;
    if (enTranslations && enTranslations[key]) {
      return enTranslations[key];
    }
    // Return key if not found
    return key;
  };

  return { t, language, setLanguage };
}
