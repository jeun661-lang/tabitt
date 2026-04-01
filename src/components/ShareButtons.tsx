'use client';

import { useState } from 'react';
import { TypeInfo } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface ShareButtonsProps {
  typeInfo: TypeInfo;
  onSaveImage: () => void;
}

export default function ShareButtons({ typeInfo, onSaveImage }: ShareButtonsProps) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const typeTrans = t.types[typeInfo.id];
  const shareText = `Tabitt: ${typeTrans.name} — ${typeTrans.subTitle}\n${typeTrans.description}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement('input');
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const handleKakaoShare = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).Kakao) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Kakao = (window as any).Kakao as {
        Share: { sendDefault: (params: Record<string, unknown>) => void };
      };
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `Tabitt: ${typeTrans.name}`,
          description: typeTrans.description,
          imageUrl: '',
          link: { mobileWebUrl: shareUrl, webUrl: shareUrl },
        },
        buttons: [{ title: 'Test', link: { mobileWebUrl: shareUrl.replace(/\/result.*/, ''), webUrl: shareUrl.replace(/\/result.*/, '') } }],
      });
    } else {
      alert('KakaoTalk sharing coming soon!');
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <button onClick={onSaveImage} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAFAF7] border border-[#D8E0D8] text-sm font-medium text-[#2C3E2D] hover:bg-[#EEF2EC] transition-colors">
        {t.result.saveImage}
      </button>
      <button onClick={handleKakaoShare} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FEE500] text-[#3C1E1E] text-sm font-medium hover:bg-[#F5DC00] transition-colors">
        {t.result.kakao}
      </button>
      <button onClick={handleTwitterShare} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1DA1F2] text-white text-sm font-medium hover:bg-[#1a8cd8] transition-colors">
        {t.result.twitter}
      </button>
      <button onClick={handleCopyLink} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAFAF7] border border-[#D8E0D8] text-sm font-medium text-[#2C3E2D] hover:bg-[#EEF2EC] transition-colors">
        {copied ? t.result.copied : t.result.copyLink}
      </button>
    </div>
  );
}
