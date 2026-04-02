'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n/context';
import AnimalIcon from '@/components/AnimalIcon';

const card = {
  nickname: '모험중인여우',
  emoji: '🦊',
  color: '#E8734A',
  typeLine: { ko: '🦊 여우 · 오사카 2회 방문', en: '🦊 Fox · Osaka, 2 visits', zh: '🦊 狐狸 · 大阪 2次', ja: '🦊 きつね · 大阪 2回' },
  badges: [
    { ko: '📍 도톤보리', en: '📍 Dotonbori', zh: '📍 道顿堀', ja: '📍 道頓堀' },
    { ko: '📍 난바', en: '📍 Namba', zh: '📍 难波', ja: '📍 なんば' },
    { ko: '📍 우메다', en: '📍 Umeda', zh: '📍 梅田', ja: '📍 梅田' },
  ],
  post: {
    ko: '도톤보리 골목에서 우연히 발견한 타코야키집... 인생 타코야키였다 🐙',
    en: 'Stumbled upon a takoyaki spot in a Dotonbori alley... best takoyaki ever 🐙',
    zh: '在道顿堀小巷偶然发现的章鱼烧店...人生最棒的章鱼烧 🐙',
    ja: '道頓堀の路地で偶然見つけたたこ焼き屋さん...人生最高だった 🐙',
  },
  likes: 41,
  comments: 15,
};

export default function Community() {
  const { locale, t } = useI18n();
  const [notified, setNotified] = useState(false);
  const lang = locale as 'ko' | 'en' | 'zh' | 'ja';

  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl font-medium text-[#2C3E2D] mb-3">
            {t.community.title}
          </h2>
          <p className="text-[13px] text-[#8FA88F] tracking-wide">
            {t.community.subtitle}
          </p>
        </motion.div>

        {/* Single card */}
        <motion.div
          className="mx-auto max-w-[480px] rounded-[16px] bg-[#FAFAF7] p-6 flex flex-col border border-[#D8E0D8]/40 mb-14"
          style={{ boxShadow: '0 2px 12px rgba(44,62,45,0.06)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile row */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
              style={{ backgroundColor: `${card.color}18` }}
            >
              <AnimalIcon emoji={card.emoji} size={32} alt="여우" />
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#2C3E2D]">{card.nickname}</p>
              <p className="text-[12px]" style={{ color: card.color }}>
                {card.typeLine[lang]}
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {card.badges.map((b, j) => (
              <span
                key={j}
                className="text-[11px] px-3 py-0.5 rounded-full font-medium"
                style={{
                  backgroundColor: `${card.color}18`,
                  color: card.color,
                }}
              >
                {b[lang]}
              </span>
            ))}
          </div>

          {/* Post text */}
          <p className="text-[14px] text-[#4A5B4C] leading-[1.7] mb-4">
            {card.post[lang]}
          </p>

          {/* Photo placeholder */}
          <div className="w-full h-40 rounded-xl bg-[#EEF2EC] flex items-center justify-center text-[#B0C0B0] text-3xl mb-4">
            📷
          </div>

          {/* Engagement */}
          <div className="flex gap-4 text-[13px] text-[#8FA88F]">
            <span>❤️ {card.likes}</span>
            <span>💬 {card.comments}</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[13px] text-[#8FA88F] mb-4">{t.community.comingSoon}</p>
          {notified ? (
            <p className="text-[13px] text-[#5DAA68] font-medium">{t.community.notifySuccess}</p>
          ) : (
            <button
              onClick={() => setNotified(true)}
              className="text-[#C1666B] border-[1.5px] border-[#C1666B] px-6 py-2.5 rounded-full text-[13px] font-medium hover:bg-[#C1666B] hover:text-white transition-all duration-200"
            >
              {t.community.notifyButton}
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
