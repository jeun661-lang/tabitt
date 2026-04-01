'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[#8FA88F]">
          Q{current + 1} / {total}
        </span>
        <span className="text-sm text-[#8FA88F]">{Math.round(progress)}%</span>
      </div>
      <div className="w-full h-2 bg-[#E2E8DE] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#C1666B] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
