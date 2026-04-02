'use client';

import { motion } from 'framer-motion';
import { travelTypes } from '@/data/types';
import { useI18n } from '@/lib/i18n/context';
import AnimalIcon from '@/components/AnimalIcon';

export default function TypeCards() {
  const { t } = useI18n();

  return (
    <section id="types" className="py-24 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-xl md:text-2xl font-medium text-[#2C3E2D] mb-3">
            {t.typeCards.title}
          </h2>
          <p className="text-[13px] text-[#8FA88F] tracking-wide">
            {t.typeCards.subtitle}
          </p>
        </motion.div>

        <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:gap-6 md:overflow-visible scrollbar-hide">
          {travelTypes.map((type, i) => {
            const tt = t.types[type.id];
            return (
              <motion.a
                key={type.id}
                href={`#type-${type.id}`}
                className="flex-shrink-0 w-52 md:w-auto rounded-[20px] p-6 cursor-pointer transition-all duration-300 bg-[#FAFAF7] border border-transparent hover:border-[#D8E0D8]/60"
                style={{ boxShadow: '0 2px 12px rgba(44,62,45,0.06)' }}
                whileHover={{ y: -6, boxShadow: '0 8px 24px rgba(44,62,45,0.08)' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-[2.8rem] text-center mb-4 leading-none flex justify-center">
                  <AnimalIcon emoji={type.emoji} image={type.image} size={80} alt={tt.name} />
                </div>
                <h3 className="text-center font-semibold text-[15px] mb-0.5" style={{ color: type.accentColor }}>
                  {tt.name}
                </h3>
                <p className="text-center text-[11px] tracking-wide mb-3" style={{ color: type.accentColor, opacity: 0.6 }}>
                  {tt.subTitle}
                </p>
                <p className="text-center text-[12px] text-[#8FA88F] leading-relaxed">
                  {tt.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
