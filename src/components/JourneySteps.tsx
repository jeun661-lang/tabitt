'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n/context';

const stepMeta = [
  { emoji: '🔍', lineColor: '#5DAA68', highlight: false },
  { emoji: '🗺️', lineColor: '#C1666B', highlight: true },
  { emoji: '📍', lineColor: '#5B9ECF', highlight: false },
];

export default function JourneySteps() {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-xl md:text-2xl font-medium text-[#2C3E2D] mb-3">
            {t.journey.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          {t.journey.steps.map((step, i) => {
            const meta = stepMeta[i];
            return (
              <motion.div
                key={i}
                className={`relative rounded-[16px] bg-[#FAFAF7] overflow-hidden flex flex-col ${
                  meta.highlight ? 'md:scale-[1.02]' : ''
                }`}
                style={{
                  boxShadow: meta.highlight
                    ? '0 4px 20px rgba(44,62,45,0.09)'
                    : '0 2px 12px rgba(44,62,45,0.06)',
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="h-1" style={{ backgroundColor: meta.lineColor }} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="text-[4rem] leading-none text-center mb-5">
                    {meta.emoji}
                  </div>
                  <span className="self-start text-[11px] font-medium bg-[#C1666B] text-white px-3 py-1 rounded-full mb-5">
                    {i + 1}
                  </span>
                  <h3 className="text-[16px] font-semibold text-[#2C3E2D] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-[#5A6B5C] leading-[1.8] flex-1">
                    {step.description}
                  </p>
                  <p className="mt-5 text-[11px] text-[#8FA88F] tracking-wide">
                    {step.tag}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
