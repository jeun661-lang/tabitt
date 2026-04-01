'use client';

import { motion } from 'framer-motion';
import { TravelType } from '@/types';
import { useI18n } from '@/lib/i18n/context';
import { questions as questionData } from '@/data/questions';

interface TestQuestionProps {
  questionIndex: number;
  selectedAnswer?: TravelType;
  onSelect: (type: TravelType) => void;
  isFirst: boolean;
}

export default function TestQuestion({
  questionIndex,
  selectedAnswer,
  onSelect,
  isFirst,
}: TestQuestionProps) {
  const { t } = useI18n();
  const questionTrans = t.questions[questionIndex];
  const question = questionData[questionIndex];

  return (
    <motion.div
      key={questionIndex}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full max-w-md mx-auto"
    >
      {isFirst && (
        <p className="text-sm text-[#8FA88F] text-center mb-4">
          {t.test.guideText}
        </p>
      )}

      <h2 className="text-xl md:text-2xl font-bold text-[#2C3E2D] text-center mb-8 leading-relaxed">
        {questionTrans.text}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, optIdx) => {
          const isSelected = selectedAnswer === option.type;
          return (
            <motion.button
              key={option.type}
              onClick={() => onSelect(option.type)}
              className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 text-sm leading-relaxed ${
                isSelected
                  ? 'border-[#C1666B] bg-[#C1666B]/5 text-[#2C3E2D] font-medium'
                  : 'border-[#D8E0D8] bg-[#FAFAF7] text-[#5A6B5C] hover:border-[#C1666B]/40 hover:bg-[#F6F8F4]'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              {questionTrans.options[optIdx]}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
