'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n/context';
import AnimalIcon from '@/components/AnimalIcon';

const archItems = [
  { emoji: '🐕', image: '/images/shiba1.png', color: '#E8922F', archY: -30, delay: '0s' },
  { emoji: '🐱', image: '/images/cat1.png', color: '#9B7FD4', archY: -15, delay: '0.5s' },
  { emoji: '🦝', color: '#5DAA68', archY: 0, delay: '1s' },
  { emoji: '🦊', color: '#E8734A', archY: -15, delay: '1.5s' },
  { emoji: '🦌', color: '#5B9ECF', archY: -30, delay: '2s' },
];

const typeKeys = ['shiba', 'cat', 'tanuki', 'fox', 'deer'] as const;

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden washi-texture">
      <div className="absolute inset-0 wave-pattern opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#EAF0E6_0%,_transparent_70%)] opacity-60" />

      <div className="relative max-w-2xl mx-auto text-center px-6 py-32 md:py-44">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`text-[11px] tracking-[0.3em] uppercase text-[#8FA88F] ${t.hero.brandMeaning ? 'mb-2' : 'mb-8'}`}
          style={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          {t.hero.brandLabel}
        </motion.p>

        {t.hero.brandMeaning && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="text-[11px] tracking-[0.3em] uppercase text-[#8FA88F] mb-8"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            {t.hero.brandMeaning}
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-base md:text-lg text-[#C1666B] mb-4"
          style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}
        >
          {t.hero.englishSlogan}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-[2rem] md:text-[2.8rem] font-semibold text-[#2C3E2D] mb-12 leading-snug tracking-tight">
            {t.hero.mainTitle}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <Link
            href="/test"
            className="inline-block bg-[#C1666B] text-white/95 text-[15px] font-medium px-10 py-3.5 rounded-full hover:bg-[#B05A5F] hover:-translate-y-[1px] transition-all duration-300 shadow-[0_4px_20px_rgba(193,102,107,0.2)]"
          >
            {t.hero.ctaButton}
          </Link>
          <p className="mt-5 text-[12px] text-[#8FA88F] tracking-wide">
            {t.hero.subInfo}
          </p>
        </motion.div>

        {/* Arch emoji container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-10 w-[300px] md:w-[500px] h-[100px] md:h-[120px] flex items-end justify-between"
        >
          {archItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
              style={{ transform: `translateY(${item.archY}px)` }}
            >
              <div
                className="w-[44px] h-[44px] md:w-[56px] md:h-[56px] rounded-full flex items-center justify-center text-[32px] md:text-[40px]"
                style={{
                  backgroundColor: `${item.color}26`,
                  animation: `hero-float 3s ease-in-out ${item.delay} infinite`,
                }}
              >
                <AnimalIcon emoji={item.emoji} image={item.image} size={48} alt={t.types[typeKeys[i]].name} />
              </div>
              <span
                className="mt-1.5 text-[10px] md:text-[11px] font-medium"
                style={{ color: item.color }}
              >
                {t.types[typeKeys[i]].name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="divider-soft" />
    </section>
  );
}
