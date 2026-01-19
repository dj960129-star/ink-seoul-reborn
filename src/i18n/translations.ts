export const languages = ["en", "ko", "zh", "ja"] as const;
export type Language = (typeof languages)[number];

export const languageLabels: Record<Language, string> = {
  en: "EN",
  ko: "KO",
  zh: "ZH",
  ja: "JA",
};

type TranslationKeys = {
  // Navigation
  "nav.home": string;
  "nav.news": string;
  "nav.styles": string;
  "nav.contact": string;
  "nav.faq": string;
  "nav.address": string;
  // Add more keys as needed
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    "nav.home": "Home",
    "nav.news": "News",
    "nav.styles": "Styles",
    "nav.contact": "Contact",
    "nav.faq": "FAQ",
    "nav.address": "Address",
  },
  ko: {
    "nav.home": "홈",
    "nav.news": "뉴스",
    "nav.styles": "스타일",
    "nav.contact": "연락처",
    "nav.faq": "FAQ",
    "nav.address": "주소",
  },
  zh: {
    "nav.home": "首页",
    "nav.news": "新闻",
    "nav.styles": "风格",
    "nav.contact": "联系",
    "nav.faq": "常见问题",
    "nav.address": "地址",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.news": "ニュース",
    "nav.styles": "スタイル",
    "nav.contact": "お問い合わせ",
    "nav.faq": "よくある質問",
    "nav.address": "住所",
  },
};
