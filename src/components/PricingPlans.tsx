'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n/context';

// plans order: [0] 싱글시티, [1] 딥애니, [2] 딥시티, [3] 딥트래블
const planPrices = ['9,900', '14,900', '14,900', '19,900'];
// left group (0,1) = active, right group (2,3) = coming soon
const planPopular = [false, true, false, false];

function PlanCard({
  plan,
  price,
  popular,
  dimmed,
  comingSoonBadge,
  comingSoonLabel,
  popularLabel,
  perTrip,
  delay,
}: {
  plan: { name: string; description: string; features: string[] };
  price: string;
  popular: boolean;
  dimmed: boolean;
  comingSoonBadge: string;
  comingSoonLabel: string;
  popularLabel: string;
  perTrip: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`relative rounded-[20px] p-6 bg-[#FAFAF7] border flex flex-col ${
        popular && !dimmed
          ? 'border-[#C1666B]/30 shadow-[0_4px_24px_rgba(193,102,107,0.08)]'
          : 'border-[#D8E0D8]/60'
      } ${dimmed ? 'opacity-60' : ''}`}
      style={!popular || dimmed ? { boxShadow: '0 2px 12px rgba(44,62,45,0.06)' } : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex gap-2 mb-5">
        <span className="text-[11px] bg-[#EEF2EC] text-[#8FA88F] px-3 py-1 rounded-full">
          {dimmed ? comingSoonLabel : comingSoonBadge}
        </span>
        {popular && !dimmed && (
          <span className="text-[11px] bg-[#C1666B] text-white px-3 py-1 rounded-full">
            {popularLabel}
          </span>
        )}
      </div>

      <h3 className="text-base font-semibold text-[#2C3E2D] mb-1">{plan.name}</h3>
      <p className="text-[12px] text-[#8FA88F] mb-5">{plan.description}</p>
      <p className="text-2xl font-bold text-[#2C3E2D] mb-6">
        ₩{price}
        <span className="text-[12px] font-normal text-[#8FA88F]"> {perTrip}</span>
      </p>

      <ul className="space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="text-[13px] text-[#5A6B5C] flex items-start gap-2">
            <span className="text-[#5DAA68] mt-0.5 text-[11px]">&#10003;</span>
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function PricingPlans() {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const leftPlans = [0, 1]; // 싱글 시티, 딥 애니메이션
  const rightPlans = [2, 3]; // 딥 시티, 딥 트래블

  return (
    <section id="pricing" className="py-24 md:py-36 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#EEF2EC]/40 to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl font-medium text-[#2C3E2D] mb-3">
            {t.pricing.title}
          </h2>
          <p className="text-[13px] text-[#8FA88F] tracking-wide">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Two-group layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 mb-16">
          {/* Left group — active */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {leftPlans.map((idx, i) => (
              <PlanCard
                key={t.pricing.plans[idx].name}
                plan={t.pricing.plans[idx]}
                price={planPrices[idx]}
                popular={planPopular[idx]}
                dimmed={false}
                comingSoonBadge={t.pricing.comingSoon}
                comingSoonLabel={t.pricing.comingSoonLabel}
                popularLabel={t.pricing.popular}
                perTrip={t.pricing.perTrip}
                delay={i * 0.1}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:flex flex-col items-center justify-center mx-6">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-[#C0D0C0] to-transparent opacity-40" />
          </div>
          <div className="md:hidden flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C0D0C0] to-transparent opacity-40" />
            <span className="text-[11px] text-[#8FA88F] whitespace-nowrap tracking-wide">
              {t.pricing.morePassesLabel}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C0D0C0] to-transparent opacity-40" />
          </div>

          {/* Right group — coming soon, dimmed */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rightPlans.map((idx, i) => (
              <PlanCard
                key={t.pricing.plans[idx].name}
                plan={t.pricing.plans[idx]}
                price={planPrices[idx]}
                popular={false}
                dimmed={true}
                comingSoonBadge={t.pricing.comingSoon}
                comingSoonLabel={t.pricing.comingSoonLabel}
                popularLabel={t.pricing.popular}
                perTrip={t.pricing.perTrip}
                delay={0.2 + i * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Email collect */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto text-center"
        >
          {submitted ? (
            <div className="text-[13px] text-[#5DAA68] font-medium py-4">
              {t.pricing.notifySuccess}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder={t.pricing.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3 rounded-full border border-[#D8E0D8] bg-[#FAFAF7] text-[13px] text-[#2C3E2D] placeholder:text-[#B0C0B0] focus:outline-none focus:border-[#C1666B]/40 transition-colors"
              />
              <button
                type="submit"
                className="bg-[#C1666B] text-white px-6 py-3 rounded-full text-[13px] font-medium hover:bg-[#B05A5F] transition-colors whitespace-nowrap"
              >
                {t.pricing.notifyButton}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
