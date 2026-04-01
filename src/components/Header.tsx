'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { localeOptions, Locale } from '@/lib/i18n/types';
import { useUser } from '@/lib/userContext';
import { travelTypes } from '@/data/types';

export default function Header() {
  const { locale, t, setLocale } = useI18n();
  const { profile, isLoggedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const current = localeOptions.find((o) => o.code === locale)!;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6F8F4]/80 backdrop-blur-md shadow-[0_1px_0_#D8E0D8]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide text-[#2C3E2D]">
          <span style={{ fontFamily: 'Quicksand, sans-serif' }}>Tabitt</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-[13px] tracking-wide">
          <Link href="/#types" className="text-[#7A8B7C] hover:text-[#2C3E2D] transition-colors duration-200">
            {t.nav.types}
          </Link>
          <Link
            href="/#pricing"
            className="text-[#C1666B] border-[1.5px] border-[#C1666B] px-5 py-2 rounded-full text-[13px] font-medium hover:bg-[#C1666B] hover:text-white transition-all duration-200"
          >
            {t.nav.tripPass}
          </Link>
          <Link
            href="/test"
            className="bg-[#C1666B] text-white px-5 py-2 rounded-full text-[13px] font-medium hover:bg-[#B05A5F] transition-all duration-200"
          >
            {t.nav.startTest}
          </Link>

          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-[13px] text-[#7A8B7C] hover:text-[#2C3E2D] transition-colors duration-200 px-2 py-1.5 rounded-lg hover:bg-[#EEF2EC]"
            >
              <span>{current.flag}</span>
              <span className="font-medium">{current.short}</span>
              <span className={`text-[9px] transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-[#FAFAF7] border border-[#D8E0D8] rounded-xl shadow-[0_4px_20px_rgba(44,62,45,0.1)] overflow-hidden min-w-[140px]">
                {localeOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLocale(opt.code as Locale);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-[13px] hover:bg-[#EEF2EC] transition-colors text-left ${
                      locale === opt.code ? 'text-[#C1666B] font-medium' : 'text-[#5A6B5C]'
                    }`}
                  >
                    <span>{opt.flag}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Profile icon */}
          {isLoggedIn && (() => {
            const toneInfo = profile.toneType ? travelTypes.find((tt) => tt.id === profile.toneType) : null;
            return (
              <Link
                href="/profile"
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-opacity hover:opacity-80"
                style={{ backgroundColor: toneInfo ? `${toneInfo.accentColor}18` : '#EEF2EC' }}
              >
                {toneInfo ? toneInfo.emoji : '👤'}
              </Link>
            );
          })()}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <div className="w-[18px] flex flex-col gap-[5px]">
            <span className={`block h-[1.5px] bg-[#2C3E2D] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block h-[1.5px] bg-[#2C3E2D] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] bg-[#2C3E2D] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F6F8F4]/95 backdrop-blur-md px-6 py-6 flex flex-col gap-4 border-t border-[#D8E0D8]/50">
          <Link href="/#types" className="text-[#7A8B7C] hover:text-[#2C3E2D] text-sm" onClick={() => setMenuOpen(false)}>
            {t.nav.types}
          </Link>
          <Link
            href="/#pricing"
            className="text-[#C1666B] border-[1.5px] border-[#C1666B] px-5 py-2.5 rounded-full text-sm font-medium text-center hover:bg-[#C1666B] hover:text-white transition-all"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.tripPass}
          </Link>
          <Link
            href="/test"
            className="bg-[#C1666B] text-white px-5 py-2.5 rounded-full text-sm font-medium text-center hover:bg-[#B05A5F] transition-all"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.startTest}
          </Link>
          {/* Mobile language selector */}
          <div className="flex gap-2 pt-2 border-t border-[#D8E0D8]/30">
            {localeOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => { setLocale(opt.code as Locale); setMenuOpen(false); }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[12px] ${
                  locale === opt.code
                    ? 'bg-[#C1666B]/10 text-[#C1666B] font-medium'
                    : 'text-[#7A8B7C] hover:bg-[#EEF2EC]'
                }`}
              >
                <span>{opt.flag}</span>
                <span>{opt.short}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
