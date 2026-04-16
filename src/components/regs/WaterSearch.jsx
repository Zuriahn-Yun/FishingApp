import { useState } from 'react'
import { Search, AlertTriangle, CheckCircle, Info } from 'lucide-react'
import { regulations } from '../../data/regulations'

export default function WaterSearch() {
  const [query, setQuery] = useState('')

  const results = query.trim().length >= 2
    ? regulations.filter(r => r.name.toLowerCase().includes(query.toLowerCase()))
    : []

  const suggestions = ['Green River', 'Yakima River', 'Banks Lake', 'Columbia River']

  return (
    <div className="px-4 py-4">
      {/* Search input */}
      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search water body (e.g. Green River)…"
          className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Suggestion chips */}
      {query.trim().length < 2 && (
        <div>
          <p className="text-xs text-slate-500 mb-2">Try searching for:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {suggestions.map(s => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full border border-blue-200 font-medium"
              >
                {s}
              </button>
            ))}
          </div>
          <div className="bg-slate-50 rounded-xl p-4 text-center text-slate-400">
            <Info size={20} className="mx-auto mb-2" />
            <p className="text-xs">Type at least 2 characters to search regulations for any WA water body.</p>
          </div>
        </div>
      )}

      {/* No results */}
      {query.trim().length >= 2 && results.length === 0 && (
        <div className="bg-slate-50 rounded-xl p-4 text-center text-slate-400">
          <p className="text-sm font-medium">No results for "{query}"</p>
          <p className="text-xs mt-1">Try a different water body name, or check WDFW.wa.gov for all regulations.</p>
        </div>
      )}

      {/* Results */}
      <div className="space-y-4">
        {results.map(reg => (
          <div key={reg.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Title */}
            <div className="bg-blue-600 px-4 py-3">
              <h3 className="font-bold text-white text-sm">{reg.name}</h3>
              <p className="text-blue-200 text-xs">{reg.region}</p>
            </div>

            <div className="p-4 space-y-4">
              {/* Catch Limits */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Catch Limits</h4>
                <ul className="space-y-1">
                  {reg.catchLimits.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gear Rules */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Gear Rules</h4>
                <ul className="space-y-1">
                  {reg.gearRules.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bait Restrictions */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Bait Restrictions</h4>
                <ul className="space-y-1">
                  {reg.baitRestrictions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities Allowed */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Allowed Activities</h4>
                <div className="flex flex-wrap gap-1.5">
                  {reg.activitiesAllowed.map(a => (
                    <span key={a} className="bg-green-50 text-green-700 text-[10px] font-medium px-2 py-0.5 rounded-full border border-green-200">{a}</span>
                  ))}
                </div>
              </div>

              {/* Restricted Zones */}
              {reg.restrictedZones.length > 0 && (
                <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                  <h4 className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-2 flex items-center gap-1">
                    <AlertTriangle size={11} /> Restricted Zones
                  </h4>
                  <ul className="space-y-1">
                    {reg.restrictedZones.map((item, i) => (
                      <li key={i} className="text-xs text-red-700">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
