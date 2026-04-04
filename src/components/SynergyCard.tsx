'use client';

import { useState } from 'react';
import { TypeInfo, TravelType } from '@/types';
import { typeMap, synergyMap } from '@/data/types';
import { useI18n } from '@/lib/i18n/context';
import AnimalIcon from '@/components/AnimalIcon';

interface SynergyCardProps {
  typeInfo: TypeInfo;
}

export default function SynergyCard({ typeInfo }: SynergyCardProps) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const synergy = synergyMap[typeInfo.id as TravelType];
  const matchType = typeMap[synergy.bestMatch];
  const matchTrans = t.types[matchType.id];
  const synergyTrans = t.result.synergy[typeInfo.id];
  const myTypeTrans = t.types[typeInfo.id];

  const handleShare = async () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href.replace(/\?.*/, '') : '';
    const shareText = t.result.synergyShareText.replace('{myType}', myTypeTrans.name) + '\n' + shareUrl;

    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement('input');
      input.value = shareText;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="max-w-md mx-auto p-6 rounded-2xl"
      style={{ backgroundColor: matchType.bgColor }}
    >
      <p className="font-bold text-base mb-4 text-center text-[#2C3E2D]">
        {t.result.synergyTitle}
      </p>

      <div className="flex flex-col items-center gap-3 mb-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${matchType.accentColor}20` }}
        >
          <AnimalIcon emoji={matchType.emoji} image={matchType.image} size={48} alt={matchTrans.name} />
        </div>
        <div className="text-center">
          <p className="font-bold text-lg" style={{ color: matchType.accentColor }}>
            {matchTrans.name}
          </p>
          <p className="text-sm text-[#8FA88F]">{matchTrans.subTitle}</p>
        </div>
      </div>

      <p className="text-sm text-center leading-relaxed text-[#4A5B4C] mb-1 font-medium" style={{ color: matchType.accentColor }}>
        {synergyTrans.title}
      </p>
      <p className="text-sm text-center leading-relaxed text-[#4A5B4C] mb-5">
        &ldquo;{synergyTrans.reason}&rdquo;
      </p>

      <button
        onClick={handleShare}
        className="w-full py-2.5 rounded-full text-sm font-semibold transition-colors border-2"
        style={{
          borderColor: matchType.accentColor,
          color: matchType.accentColor,
          backgroundColor: 'transparent',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = `${matchType.accentColor}10`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        {copied ? '✅ ' + (t.result.copied) : '🔗 ' + t.result.synergyShareButton}
      </button>
    </div>
  );
}
