'use client';

import { useSearchParams } from 'next/navigation';
import { useRef, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { typeMap } from '@/data/types';
import { useI18n } from '@/lib/i18n/context';
import ResultCard from '@/components/ResultCard';
import ShareButtons from '@/components/ShareButtons';
import AnimalIcon from '@/components/AnimalIcon';

function ResultContent() {
  const searchParams = useSearchParams();
  const { t } = useI18n();
  const typeParam = searchParams.get('type');
  const validTypes = ['shiba', 'cat', 'tanuki', 'fox', 'deer'];
  const typeInfo = typeParam && validTypes.includes(typeParam) ? typeMap[typeParam] : null;
  const cardRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!typeInfo) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <p className="text-lg text-[#8FA88F]">{t.result.notFound}</p>
        <Link href="/test" className="mt-4 bg-[#C1666B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#B05A5F] transition-colors">
          {t.result.retakeButton}
        </Link>
      </div>
    );
  }

  const tt = t.types[typeInfo.id];

  const handleSaveImage = async () => {
    if (!cardRef.current) return;
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(cardRef.current, { backgroundColor: typeInfo.bgColor, scale: 2 });
      const link = document.createElement('a');
      link.download = `tabitt-${typeInfo.id}-result.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Image save failed:', err);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <div className="min-h-[80vh] py-8 px-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-center mb-8">
        <p className="text-sm text-[#8FA88F] mb-2">{t.result.toneIntro}</p>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-1 flex items-center justify-center gap-3" style={{ color: typeInfo.accentColor }}>
            <AnimalIcon emoji={typeInfo.emoji} image={typeInfo.image} size={160} alt={tt.name} />
            {tt.name}
          </h1>
          <p className="text-lg text-[#8FA88F]">{tt.subTitle}</p>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mb-8">
        <ResultCard typeInfo={typeInfo} cardRef={cardRef} />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="max-w-md mx-auto mb-10">
        <div className="p-5 rounded-2xl" style={{ backgroundColor: typeInfo.bgColor }}>
          <p className="text-sm leading-relaxed text-[#4A5B4C]">{tt.detailedDescription}</p>
          <p className="text-xs mt-3 italic" style={{ color: typeInfo.accentColor, fontFamily: 'Playfair Display, Georgia, serif' }}>
            {tt.englishSubTitle}
          </p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }} className="mb-12">
        <p className="text-center text-sm text-[#8FA88F] mb-4">{t.result.sharePrompt}</p>
        <ShareButtons typeInfo={typeInfo} onSaveImage={handleSaveImage} />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.1 }} className="max-w-md mx-auto text-center space-y-4">
        <div className="p-6 bg-[#FAFAF7] rounded-2xl border border-[#D8E0D8]" style={{ boxShadow: '0 2px 12px rgba(44,62,45,0.06)' }}>
          <p className="font-bold text-sm text-[#2C3E2D] mb-1">{t.result.notifyTitle}</p>
          <p className="text-xs text-[#8FA88F] mb-4">{t.result.notifySubtitle}</p>
          {submitted ? (
            <p className="text-sm text-[#5DAA68] font-medium">{t.result.notifySuccess}</p>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder={t.result.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2.5 rounded-full border border-[#D8E0D8] bg-white text-sm text-[#2C3E2D] placeholder:text-[#B0C0B0] focus:outline-none focus:border-[#C1666B]/40 transition-colors"
              />
              <button type="submit" className="bg-[#C1666B] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#B05A5F] transition-colors whitespace-nowrap">
                {t.result.notifyButton}
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/test" className="px-6 py-3 rounded-full border-2 border-[#C1666B] text-[#C1666B] font-semibold text-sm hover:bg-[#C1666B]/5 transition-colors">
            {t.result.retakeTest}
          </Link>
          <Link href="/#types" className="px-6 py-3 rounded-full border-2 border-[#D8E0D8] text-[#8FA88F] font-semibold text-sm hover:bg-[#FAFAF7] transition-colors">
            {t.result.browseTypes}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-[80vh] flex items-center justify-center"><div className="w-12 h-12 rounded-full border-4 border-[#E2E8DE] border-t-[#C1666B] animate-spin" /></div>}>
      <ResultContent />
    </Suspense>
  );
}
