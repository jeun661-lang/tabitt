'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { questions } from '@/data/questions';
import { TravelType } from '@/types';
import { calculateResult } from '@/lib/calculateResult';
import { useI18n } from '@/lib/i18n/context';
import ProgressBar from '@/components/ProgressBar';
import TestQuestion from '@/components/TestQuestion';

export default function TestPage() {
  const router = useRouter();
  const { t } = useI18n();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(TravelType | undefined)[]>(
    new Array(questions.length).fill(undefined)
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = useCallback(
    (type: TravelType) => {
      const newAnswers = [...answers];
      newAnswers[currentQ] = type;
      setAnswers(newAnswers);

      setTimeout(() => {
        if (currentQ < questions.length - 1) {
          setCurrentQ(currentQ + 1);
        } else {
          setIsLoading(true);
          const validAnswers = newAnswers.filter(
            (a): a is TravelType => a !== undefined
          );
          const result = calculateResult(validAnswers);

          setTimeout(() => {
            router.push(`/test/result?type=${result}`);
          }, 2000);
        }
      }, 300);
    },
    [answers, currentQ, router]
  );

  const handlePrev = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border-4 border-[#E2E8DE] border-t-[#C1666B] animate-spin" />
          <p className="text-lg font-bold text-[#2C3E2D] mb-2">{t.test.loadingTitle}</p>
          <p className="text-sm text-[#8FA88F]">{t.test.loadingSubtitle}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {currentQ > 0 && (
          <button
            onClick={handlePrev}
            className="mb-4 text-sm text-[#8FA88F] hover:text-[#2C3E2D] transition-colors flex items-center gap-1"
          >
            {t.test.prevButton}
          </button>
        )}

        <ProgressBar current={currentQ} total={questions.length} />

        <AnimatePresence mode="wait">
          <TestQuestion
            key={currentQ}
            questionIndex={currentQ}
            selectedAnswer={answers[currentQ]}
            onSelect={handleSelect}
            isFirst={currentQ === 0}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
