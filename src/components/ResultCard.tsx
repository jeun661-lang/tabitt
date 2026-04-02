'use client';

import { TypeInfo } from '@/types';
import { useI18n } from '@/lib/i18n/context';
import AnimalIcon from '@/components/AnimalIcon';

interface ResultCardProps {
  typeInfo: TypeInfo;
  cardRef: React.RefObject<HTMLDivElement | null>;
}

export default function ResultCard({ typeInfo, cardRef }: ResultCardProps) {
  const { t } = useI18n();
  const tt = t.types[typeInfo.id];

  return (
    <div
      ref={cardRef}
      className="w-[320px] mx-auto rounded-3xl overflow-hidden"
      style={{ backgroundColor: typeInfo.bgColor, boxShadow: '0 4px 24px rgba(44,62,45,0.08)' }}
    >
      <div className="p-6 text-center">
        <p className="text-sm font-bold text-[#8FA88F] mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          Tabitt
        </p>
        <div className="w-28 h-28 mx-auto rounded-full flex items-center justify-center text-5xl mb-4" style={{ backgroundColor: `${typeInfo.accentColor}20` }}>
          <AnimalIcon emoji={typeInfo.emoji} image={typeInfo.image} size={120} alt={tt.name} />
        </div>
        <h2 className="text-2xl font-extrabold mb-1" style={{ color: typeInfo.accentColor }}>
          {tt.name}
        </h2>
        <p className="text-sm text-[#8FA88F] mb-3">{tt.subTitle}</p>
        <p className="text-sm text-[#5A6B5C] leading-relaxed px-2">{tt.description}</p>
        <div className="mt-6 pt-4 border-t border-black/5">
          <p className="text-xs text-[#B0C0B0]" style={{ fontFamily: 'Quicksand, sans-serif' }}>tabitt.co</p>
        </div>
      </div>
    </div>
  );
}
