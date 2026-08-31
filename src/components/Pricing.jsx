import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Free',
      subtitle: 'Start Smart',
      price: '$0',
      period: '/month',
      description: 'Ideal for getting started with basic expense tracking.',
      features: [
        'Connect up to 2 bank accounts',
        'Real-time spend tracking & smart categorization',
        'Monthly spending summary reports',
        'Bill reminders & payment alerts',
        'Basic security monitoring',
      ],
      cta: 'Get started',
      highlighted: false,
    },
    {
      name: 'Plus',
      subtitle: 'Most Popular',
      price: isAnnual ? '$6.39' : '$7.99',
      period: '/month',
      description: 'For individuals seeking full budgeting and AI insights.',
      features: [
        'Connect unlimited accounts',
        'AI-powered budgeting & savings',
        'Personalized spend insights & forecasts',
        'Auto bill pay & transfer scheduling',
        'Priority customer support',
      ],
      cta: 'Upgrade to Plus',
      highlighted: true,
    },
    {
      name: 'Premium',
      subtitle: 'Growth',
      price: isAnnual ? '$11.99' : '$14.99',
      period: '/month',
      description: 'Advanced features for investors and multi-currency power users.',
      features: [
        'Everything in Plus',
        'Portfolio tracking & goal-based investing',
        'Advanced financial health analytics',
        'Multi-currency support & global payments',
        '24/7 premium support & fraud alerts',
      ],
      cta: 'Go Premium',
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="relative w-full py-28 px-4 sm:px-6 md:px-12 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 shadow-sm mb-6">
          <span className="text-[10px] font-bold text-neutral-400">05</span>
          <span className="text-[11px] font-bold text-neutral-800 tracking-wider uppercase">PRICING</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-center tracking-tight text-neutral-950 uppercase max-w-4xl leading-[1.08]">
          SIMPLE PLANS FOR SMARTER FINANCES.
        </h2>

        {/* Subheading */}
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg text-center max-w-2xl mt-4 font-normal leading-relaxed">
          Choose the plan that fits your financial journey — transparent pricing, no hidden fees, cancel anytime.
        </p>

        {/* Monthly / Annual Switcher Toggle */}
        <div className="flex items-center gap-3 mt-10 p-1.5 rounded-full bg-[#f5f5f7] border border-neutral-200/80 shadow-inner">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              !isAnnual
                ? 'bg-white text-neutral-950 shadow-md'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              isAnnual
                ? 'bg-white text-neutral-950 shadow-md'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Annually
            <span className="px-2 py-0.5 rounded-full bg-[#5244e8] text-white text-[10px] font-extrabold">
              Save 20%
            </span>
          </button>
        </div>

        {/* 3 Tier Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-16 max-w-6xl items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-[36px] p-8 flex flex-col justify-between transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-[#1b1b22] via-[#212030] to-[#171624] text-white border-2 border-[#6262fe] shadow-[0_25px_60px_rgba(98,98,254,0.25)] md:-translate-y-4'
                  : 'bg-[#f5f5f7] text-neutral-900 border border-neutral-200/80 shadow-sm hover:shadow-xl'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#6262fe] to-[#8d8dff] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black tracking-tight">{plan.name}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    plan.highlighted ? 'bg-white/10 text-[#bebeff]' : 'bg-neutral-200/80 text-neutral-600'
                  }`}>
                    {plan.subtitle}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mt-6">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight">{plan.price}</span>
                  <span className={`text-xs font-medium ${plan.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {plan.period}
                  </span>
                </div>

                <p className={`text-xs mt-3 leading-relaxed ${plan.highlighted ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {plan.description}
                </p>

                {/* Features Checkmark List */}
                <div className="mt-8 pt-6 border-t border-neutral-200/40 space-y-3.5">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-medium">
                      <span className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] mt-0.5 ${
                        plan.highlighted ? 'bg-[#6262fe] text-white' : 'bg-neutral-900 text-white'
                      }`}>
                        ✓
                      </span>
                      <span className={plan.highlighted ? 'text-neutral-200' : 'text-neutral-700'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-3.5 rounded-full text-xs font-bold transition-all duration-200 mt-10 shadow-md active:scale-95 ${
                  plan.highlighted
                    ? 'bg-[#6262fe] hover:bg-[#5050f0] text-white shadow-[0_10px_25px_rgba(98,98,254,0.4)]'
                    : 'bg-neutral-950 hover:bg-neutral-800 text-white'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
