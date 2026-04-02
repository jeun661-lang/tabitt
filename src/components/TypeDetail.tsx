'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { travelTypes } from '@/data/types';
import { useI18n } from '@/lib/i18n/context';
import AnimalIcon from '@/components/AnimalIcon';

export default function TypeDetail() {
  const { t } = useI18n();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="divider-soft mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-xl md:text-2xl font-medium text-[#2C3E2D] mb-3">
            {t.typeDetail.title}
          </h2>
          <p className="text-[13px] text-[#8FA88F] tracking-wide">
            {t.typeDetail.subtitle}
          </p>
        </motion.div>

        <div className="space-y-3">
          {travelTypes.map((type) => {
            const tt = t.types[type.id];
            return (
              <div key={type.id} id={`type-${type.id}`} className="scroll-mt-24">
                <button
                  onClick={() => setOpenId(openId === type.id ? null : type.id)}
                  className="w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-200 text-left border"
                  style={{
                    backgroundColor: openId === type.id ? type.bgColor : '#FAFAF7',
                    borderColor: openId === type.id ? `${type.accentColor}30` : '#D8E0D8',
                    boxShadow: '0 2px 12px rgba(44,62,45,0.06)',
                  }}
                >
                  <span className="text-2xl flex items-center">
                    <AnimalIcon emoji={type.emoji} image={type.image} size={48} alt={tt.name} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-[15px]" style={{ color: type.accentColor }}>
                      {tt.name}
                    </span>
                    <span className="text-[#8FA88F] text-[13px] ml-2">— {tt.subTitle}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: openId === type.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#B0C0B0] text-[10px]"
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openId === type.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 py-5 mx-1 rounded-b-2xl border-x border-b"
                        style={{ backgroundColor: type.bgColor, borderColor: `${type.accentColor}15` }}
                      >
                        <p className="text-[13px] leading-[1.8] text-[#4A5B4C] mb-4">
                          {tt.detailedDescription}
                        </p>
                        <p
                          className="text-[12px] italic text-[#8FA88F]"
                          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                          {tt.englishSubTitle}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="divider-soft mb-12" />
          <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#D8E0D8]/60" style={{ boxShadow: '0 2px 12px rgba(44,62,45,0.06)' }}>
            <h3 className="font-medium text-[15px] text-[#2C3E2D] mb-4">{t.typeDetail.faqTitle}</h3>
            <p className="text-[13px] text-[#5A6B5C] leading-[1.8]">{t.typeDetail.faqContent}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
