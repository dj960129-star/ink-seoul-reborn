import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Language, languages } from "./translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

const STORAGE_KEY = "lang";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && languages.includes(stored as Language)) {
    return stored as Language;
  }
  return "en";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  useEffect(() => {
    // Sync with localStorage on mount
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && languages.includes(stored as Language)) {
      setLanguageState(stored as Language);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
