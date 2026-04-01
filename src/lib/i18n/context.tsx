'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { Locale, Translations } from './types';
import { ko } from './translations/ko';
import { en } from './translations/en';
import { zh } from './translations/zh';
import { ja } from './translations/ja';

const translationsMap: Record<Locale, Translations> = { ko, en, zh, ja };

interface I18nContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'ko',
  t: ko,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ko');

  useEffect(() => {
    const saved = localStorage.getItem('tabitt-locale') as Locale | null;
    if (saved && translationsMap[saved]) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('tabitt-locale', newLocale);
  }, []);

  return (
    <I18nContext.Provider
      value={{ locale, t: translationsMap[locale], setLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
