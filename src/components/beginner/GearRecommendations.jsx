import { useState } from 'react'
import { gearTiers } from '../../data/gear'

const TIER_KEYS = ['budget', 'mid', 'premium']
const CATEGORY_LABELS = { rod: 'Rod', reel: 'Reel', line: 'Line', terminal: 'Terminal Tackle' }

const TIER_COLORS = {
  budget: { tab: 'bg-green-600 text-white', badge: 'bg-green-100 text-green-700', border: 'border-green-200' },
  mid: { tab: 'bg-blue-600 text-white', badge: 'bg-blue-100 text-blue-700', border: 'border-blue-200' },
  premium: { tab: 'bg-purple-600 text-white', badge: 'bg-purple-100 text-purple-700', border: 'border-purple-200' },
}

export default function GearRecommendations() {
  const [activeTier, setActiveTier] = useState('budget')
  const tier = gearTiers[activeTier]
  const colors = TIER_COLORS[activeTier]

  return (
    <div>
      {/* Tier tabs */}
      <div className="flex gap-1 mb-4">
        {TIER_KEYS.map(key => {
          const t = gearTiers[key]
          const active = activeTier === key
          return (
            <button
              key={key}
              onClick={() => setActiveTier(key)}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-colors border ${
                active ? TIER_COLORS[key].tab + ' border-transparent' : 'bg-white text-slate-600 border-slate-200'
              }`}
            >
              <div>{t.label}</div>
              <div className={`text-[9px] font-normal ${active ? 'opacity-80' : 'text-slate-400'}`}>{t.range}</div>
            </button>
          )
        })}
      </div>

      {/* Description */}
      <p className="text-xs text-slate-600 mb-3">{tier.description}</p>

      {/* Gear items */}
      <div className="space-y-2.5">
        {Object.entries(tier.items).map(([cat, item]) => (
          <div key={cat} className={`bg-white rounded-xl p-4 border ${colors.border} shadow-sm`}>
            <div className="flex items-start justify-between gap-2 mb-1">
              <div>
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${colors.badge} mr-2`}>
                  {CATEGORY_LABELS[cat]}
                </span>
                <span className="text-xs font-bold text-slate-800">{item.name}</span>
              </div>
              <span className="text-xs font-bold text-slate-600 shrink-0">{item.price}</span>
            </div>
            <p className="text-[10px] text-slate-400 mb-1">{item.specs}</p>
            <p className="text-xs text-slate-600 leading-relaxed">{item.why}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
