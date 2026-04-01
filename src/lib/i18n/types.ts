export type Locale = 'ko' | 'en' | 'zh' | 'ja';

export interface LocaleOption {
  code: Locale;
  flag: string;
  label: string;
  short: string;
}

export const localeOptions: LocaleOption[] = [
  { code: 'ko', flag: '🇰🇷', label: '한국어', short: 'KR' },
  { code: 'en', flag: '🇺🇸', label: 'English', short: 'EN' },
  { code: 'zh', flag: '🇨🇳', label: '中文', short: 'ZH' },
  { code: 'ja', flag: '🇯🇵', label: '日本語', short: 'JA' },
];

export interface TypeTranslation {
  name: string;
  subTitle: string;
  description: string;
  detailedDescription: string;
  englishSubTitle: string;
}

export interface QuestionTranslation {
  text: string;
  options: string[];
}

export interface Translations {
  // Nav
  nav: {
    types: string;
    tripPass: string;
    startTest: string;
  };
  // Hero
  hero: {
    brandLabel: string;
    brandMeaning: string;
    englishSlogan: string;
    mainTitle: string;
    ctaButton: string;
    subInfo: string;
  };
  // Journey steps
  journey: {
    title: string;
    steps: {
      title: string;
      description: string;
      tag: string;
    }[];
  };
  // Type cards
  typeCards: {
    title: string;
    subtitle: string;
  };
  // Pricing
  pricing: {
    title: string;
    subtitle: string;
    comingSoon: string;
    comingSoonLabel: string;
    morePassesLabel: string;
    popular: string;
    perTrip: string;
    emailPlaceholder: string;
    notifyButton: string;
    notifySuccess: string;
    plans: {
      name: string;
      description: string;
      features: string[];
    }[];
  };
  // Type detail
  typeDetail: {
    title: string;
    subtitle: string;
    faqTitle: string;
    faqContent: string;
  };
  // Footer
  footer: {
    brandDescription: string;
    quickLinks: string;
    social: string;
    typesLink: string;
    testLink: string;
    tripPassLink: string;
    copyright: string;
  };
  // Test page
  test: {
    guideText: string;
    prevButton: string;
    loadingTitle: string;
    loadingSubtitle: string;
  };
  // Result page
  result: {
    toneIntro: string;
    sharePrompt: string;
    saveImage: string;
    kakao: string;
    twitter: string;
    copyLink: string;
    copied: string;
    notifyTitle: string;
    notifySubtitle: string;
    notifyButton: string;
    notifySuccess: string;
    emailPlaceholder: string;
    retakeTest: string;
    browseTypes: string;
    notFound: string;
    retakeButton: string;
  };
  // Community
  community: {
    title: string;
    subtitle: string;
    comingSoon: string;
    notifyButton: string;
    notifySuccess: string;
  };
  // Profile
  profile: {
    loginRequired: string;
    loginDescription: string;
    setNickname: string;
    nicknamePlaceholder: string;
    nicknameMax: string;
    start: string;
    skipToTest: string;
    edit: string;
    save: string;
    takeTestFirst: string;
    typeBadges: string;
    cityBadges: string;
    areaBadges: string;
    visitTracking: string;
  };
  // Type data
  types: Record<string, TypeTranslation>;
  // Questions
  questions: QuestionTranslation[];
}
