'use client';

import { useI18n } from '@/lib/i18n/context';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-[#2C3E2D] text-white/50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <h3 className="text-xl font-semibold text-white/80 mb-3 tracking-wide" style={{ fontFamily: 'Quicksand, sans-serif' }}>
              Tabitt
            </h3>
            <p className="text-[12px] text-white/30 max-w-xs leading-relaxed whitespace-pre-line">
              {t.footer.brandDescription}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-white/60 text-[12px] font-medium mb-4 tracking-wide">{t.footer.quickLinks}</h4>
              <ul className="space-y-2.5 text-[13px]">
                <li><a href="/#types" className="hover:text-white/70 transition-colors duration-200">{t.footer.typesLink}</a></li>
                <li><a href="/test" className="hover:text-white/70 transition-colors duration-200">{t.footer.testLink}</a></li>
                <li><a href="/#pricing" className="hover:text-white/70 transition-colors duration-200">{t.footer.tripPassLink}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white/60 text-[12px] font-medium mb-4 tracking-wide">{t.footer.social}</h4>
              <ul className="space-y-2.5 text-[13px]">
                <li><span className="cursor-pointer hover:text-white/70 transition-colors duration-200">Instagram</span></li>
                <li><span className="cursor-pointer hover:text-white/70 transition-colors duration-200">Twitter</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] text-white/25">
          <p>{t.footer.copyright}</p>
          <a href="mailto:hello@tabitt.co" className="hover:text-white/40 transition-colors duration-200">hello@tabitt.co</a>
        </div>
      </div>
    </footer>
  );
}
