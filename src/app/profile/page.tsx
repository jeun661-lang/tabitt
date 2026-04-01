'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useUser } from '@/lib/userContext';
import { useI18n } from '@/lib/i18n/context';
import { travelTypes } from '@/data/types';
import { typeBadges, cityBadges, areaBadges } from '@/data/badges';

export default function ProfilePage() {
  const { profile, isLoggedIn, updateProfile } = useUser();
  const { t } = useI18n();
  const [editing, setEditing] = useState(false);
  const [nicknameInput, setNicknameInput] = useState(profile.nickname);

  // If not logged in, show login prompt
  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-sm"
        >
          <p className="text-[3rem] mb-4">👤</p>
          <h1 className="text-xl font-semibold text-[#2C3E2D] mb-3">
            {t.profile.loginRequired}
          </h1>
          <p className="text-[13px] text-[#8FA88F] mb-8 leading-relaxed">
            {t.profile.loginDescription}
          </p>

          {/* Nickname setup as MVP login */}
          <div className="bg-[#FAFAF7] rounded-2xl p-6 border border-[#D8E0D8]/60" style={{ boxShadow: '0 2px 12px rgba(44,62,45,0.06)' }}>
            <p className="text-[13px] text-[#2C3E2D] font-medium mb-4">{t.profile.setNickname}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (nicknameInput.trim()) {
                  updateProfile({ nickname: nicknameInput.trim() });
                }
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={nicknameInput}
                onChange={(e) => setNicknameInput(e.target.value.slice(0, 10))}
                placeholder={t.profile.nicknamePlaceholder}
                maxLength={10}
                className="flex-1 px-4 py-2.5 rounded-full border border-[#D8E0D8] bg-white text-[13px] text-[#2C3E2D] placeholder:text-[#B0C0B0] focus:outline-none focus:border-[#C1666B]/40 transition-colors"
              />
              <button
                type="submit"
                className="bg-[#C1666B] text-white px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-[#B05A5F] transition-colors"
              >
                {t.profile.start}
              </button>
            </form>
            <p className="text-[10px] text-[#B0C0B0] mt-2">{t.profile.nicknameMax}</p>
          </div>

          <Link href="/test" className="inline-block mt-6 text-[13px] text-[#8FA88F] hover:text-[#2C3E2D] transition-colors">
            {t.profile.skipToTest}
          </Link>
        </motion.div>
      </div>
    );
  }

  const toneInfo = profile.toneType
    ? travelTypes.find((tt) => tt.id === profile.toneType)
    : null;
  const toneTranslation = profile.toneType ? t.types[profile.toneType] : null;

  const handleSaveNickname = () => {
    if (nicknameInput.trim()) {
      updateProfile({ nickname: nicknameInput.trim() });
      setEditing(false);
    }
  };

  return (
    <div className="min-h-[80vh] py-12 px-6">
      <div className="max-w-lg mx-auto">
        {/* Profile header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          {/* Avatar */}
          <div
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl mb-4"
            style={{
              backgroundColor: toneInfo ? `${toneInfo.accentColor}18` : '#EEF2EC',
            }}
          >
            {toneInfo ? toneInfo.emoji : '👤'}
          </div>

          {/* Nickname */}
          {editing ? (
            <div className="flex items-center justify-center gap-2 mb-2">
              <input
                type="text"
                value={nicknameInput}
                onChange={(e) => setNicknameInput(e.target.value.slice(0, 10))}
                maxLength={10}
                className="px-3 py-1.5 rounded-full border border-[#D8E0D8] bg-white text-[15px] text-center text-[#2C3E2D] w-32 focus:outline-none focus:border-[#C1666B]/40"
              />
              <button onClick={handleSaveNickname} className="text-[#C1666B] text-[12px] font-medium">
                {t.profile.save}
              </button>
            </div>
          ) : (
            <h1 className="text-xl font-semibold text-[#2C3E2D] mb-1">
              {profile.nickname}
              <button
                onClick={() => { setNicknameInput(profile.nickname); setEditing(true); }}
                className="ml-2 text-[11px] text-[#8FA88F] hover:text-[#C1666B] transition-colors"
              >
                {t.profile.edit}
              </button>
            </h1>
          )}

          {/* Type line */}
          {toneInfo && toneTranslation && (
            <p className="text-[13px]" style={{ color: toneInfo.accentColor }}>
              {toneInfo.emoji} {toneTranslation.name} · {toneTranslation.subTitle}
            </p>
          )}
          {!toneInfo && (
            <Link href="/test" className="text-[13px] text-[#C1666B] hover:underline">
              {t.profile.takeTestFirst}
            </Link>
          )}
        </motion.div>

        {/* Badge sections */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {/* Type badges */}
          <div className="mb-8">
            <h3 className="text-[13px] font-medium text-[#2C3E2D] mb-4">{t.profile.typeBadges}</h3>
            <div className="grid grid-cols-5 gap-3">
              {typeBadges.map((badge) => {
                const unlocked = profile.badges.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    className={`rounded-2xl p-3 text-center transition-all ${
                      unlocked ? 'bg-[#FAFAF7]' : 'bg-[#F0F2EE] opacity-40'
                    }`}
                    style={unlocked ? { boxShadow: '0 2px 12px rgba(44,62,45,0.06)' } : undefined}
                  >
                    <p className="text-2xl mb-1">{unlocked ? badge.emoji : '🔒'}</p>
                    <p className="text-[10px] text-[#5A6B5C]">{badge.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* City badges */}
          <div className="mb-8">
            <h3 className="text-[13px] font-medium text-[#2C3E2D] mb-4">{t.profile.cityBadges}</h3>
            <div className="grid grid-cols-5 gap-3">
              {cityBadges.map((badge) => {
                const unlocked = profile.badges.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    className={`rounded-2xl p-3 text-center transition-all ${
                      unlocked ? 'bg-[#FAFAF7]' : 'bg-[#F0F2EE] opacity-40'
                    }`}
                    style={unlocked ? { boxShadow: '0 2px 12px rgba(44,62,45,0.06)' } : undefined}
                  >
                    <p className="text-2xl mb-1">{unlocked ? badge.emoji : '🔒'}</p>
                    <p className="text-[10px] text-[#5A6B5C]">{badge.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Area badges */}
          <div className="mb-8">
            <h3 className="text-[13px] font-medium text-[#2C3E2D] mb-4">{t.profile.areaBadges}</h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
              {areaBadges.map((badge) => {
                const unlocked = profile.badges.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    className={`rounded-2xl p-3 text-center transition-all ${
                      unlocked ? 'bg-[#FAFAF7]' : 'bg-[#F0F2EE] opacity-40'
                    }`}
                    style={unlocked ? { boxShadow: '0 2px 12px rgba(44,62,45,0.06)' } : undefined}
                  >
                    <p className="text-2xl mb-1">{unlocked ? badge.emoji : '🔒'}</p>
                    <p className="text-[10px] text-[#5A6B5C]">{badge.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Stats / visits placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#D8E0D8]/60 text-center"
          style={{ boxShadow: '0 2px 12px rgba(44,62,45,0.06)' }}
        >
          <p className="text-[13px] text-[#8FA88F]">{t.profile.visitTracking}</p>
        </motion.div>
      </div>
    </div>
  );
}
