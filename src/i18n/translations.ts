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
  // Booking CTA section
  "booking.cta.title": string;
  "booking.cta.desc": string;
  // Booking section (Contact)
  "booking.title": string;
  "booking.desc": string;
  // Location section
  "location.label": string;
  "location.area": string;
  "location.notice": string;
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    "nav.home": "Home",
    "nav.news": "News",
    "nav.styles": "Styles",
    "nav.contact": "Contact",
    "nav.faq": "FAQ",
    "nav.address": "Address",
    "booking.cta.title": "Ready to Get Inked?",
    "booking.cta.desc": "Contact us via KakaoTalk or Instagram DM to schedule your session.\nWe'll discuss your design ideas and find the perfect time.",
    "booking.title": "Book Your Session",
    "booking.desc": "For consultations and reservations, please contact us via KakaoTalk or Instagram DM.\nPlease include the design, body area, and size you want\nfor a faster consultation.",
    "location.label": "Location",
    "location.area": "Near Hongdae Station, Mapo-gu, Seoul",
    "location.notice": "Exact location will be provided upon booking confirmation",
  },
  ko: {
    "nav.home": "홈",
    "nav.news": "뉴스",
    "nav.styles": "스타일",
    "nav.contact": "연락처",
    "nav.faq": "FAQ",
    "nav.address": "주소",
    "booking.cta.title": "타투를 시작할 준비가 되셨나요?",
    "booking.cta.desc": "카카오톡 또는 인스타그램 DM으로 연락 주시면\n디자인 상담과 일정을 잡아드립니다.",
    "booking.title": "예약하기",
    "booking.desc": "상담 및 예약은 카카오톡 또는 인스타그램 DM으로 문의해주세요.\n원하시는 디자인과 부위, 사이즈를 함께 알려주시면\n빠른 상담이 가능합니다.",
    "location.label": "위치",
    "location.area": "서울특별시 마포구 홍대입구역 인근",
    "location.notice": "정확한 위치는 예약 확정 시 안내드립니다",
  },
  zh: {
    "nav.home": "首页",
    "nav.news": "新闻",
    "nav.styles": "风格",
    "nav.contact": "联系",
    "nav.faq": "常见问题",
    "nav.address": "地址",
    "booking.cta.title": "准备好纹身了吗？",
    "booking.cta.desc": "通过KakaoTalk或Instagram DM联系我们预约。\n我们将与您讨论设计想法并安排合适的时间。",
    "booking.title": "预约咨询",
    "booking.desc": "咨询及预约请通过KakaoTalk或Instagram DM联系我们。\n请告知您想要的设计、部位和尺寸，\n以便更快地为您提供咨询。",
    "location.label": "位置",
    "location.area": "首尔市麻浦区弘大入口站附近",
    "location.notice": "确认预约后将告知具体位置",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.news": "ニュース",
    "nav.styles": "スタイル",
    "nav.contact": "お問い合わせ",
    "nav.faq": "よくある質問",
    "nav.address": "住所",
    "booking.cta.title": "タトゥーの準備はできましたか？",
    "booking.cta.desc": "KakaoTalkまたはInstagram DMでご連絡ください。\nデザインのご相談とスケジュールを調整いたします。",
    "booking.title": "ご予約",
    "booking.desc": "ご相談・ご予約はKakaoTalkまたはInstagram DMでお問い合わせください。\nご希望のデザイン、部位、サイズをお知らせいただければ、\nより迅速なご相談が可能です。",
    "location.label": "所在地",
    "location.area": "ソウル特別市麻浦区弘大入口駅付近",
    "location.notice": "正確な場所は予約確定時にご案内いたします",
  },
};
