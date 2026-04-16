import { species } from '../../data/species'

const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const CURRENT_MONTH = 4 // April (1-indexed)

export default function MigrationCalendar() {
  return (
    <div className="px-4 py-4">
      <p className="text-xs text-slate-500 mb-4">
        Colored bars show when each species is actively running or present in WA waters. Current month highlighted.
      </p>

      {/* Calendar grid */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Month header */}
        <div className="grid grid-cols-[80px_repeat(12,1fr)] bg-slate-50 border-b border-slate-200">
          <div className="px-2 py-2 text-[9px] font-semibold text-slate-400 uppercase">Species</div>
          {MONTHS.map((m, i) => (
            <div
              key={i}
              className={`py-2 text-center text-[9px] font-semibold ${
                i + 1 === CURRENT_MONTH ? 'text-blue-600 bg-blue-50' : 'text-slate-400'
              }`}
            >
              {m}
            </div>
          ))}
        </div>

        {/* Species rows */}
        {species.map((sp, si) => (
          <div
            key={sp.id}
            className={`grid grid-cols-[80px_repeat(12,1fr)] items-center ${
              si < species.length - 1 ? 'border-b border-slate-100' : ''
            }`}
          >
            {/* Species name */}
            <div className="px-2 py-2.5 flex items-center gap-1">
              <span className="text-sm">{sp.emoji}</span>
              <span className="text-[9px] font-medium text-slate-600 leading-tight">
                {sp.name.split(' ').slice(0, 1).join(' ')}
                {sp.name.includes('Salmon') || sp.name.includes('Trout') || sp.name.includes('Bass') ? '' : ''}
              </span>
            </div>

            {/* Month cells */}
            {Array.from({ length: 12 }, (_, i) => {
              const month = i + 1
              const active = sp.migrationMonths.includes(month)
              const isCurrent = month === CURRENT_MONTH
              return (
                <div
                  key={i}
                  className={`py-2.5 px-0.5 flex items-center justify-center ${isCurrent ? 'bg-blue-50' : ''}`}
                >
                  {active && (
                    <div
                      className="migration-bar w-full mx-0.5"
                      style={{ backgroundColor: sp.color, opacity: 0.85 }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4">
        <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-2">Legend</p>
        <div className="grid grid-cols-2 gap-1.5">
          {species.map(sp => (
            <div key={sp.id} className="flex items-center gap-2">
              <div className="w-6 h-2 rounded-full shrink-0" style={{ backgroundColor: sp.color }} />
              <span className="text-[10px] text-slate-600">{sp.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Peak months callout */}
      <div className="mt-4 bg-amber-50 rounded-xl p-3 border border-amber-100">
        <p className="text-[10px] font-semibold text-amber-700 mb-1">Peak Season — Right Now (April)</p>
        <div className="flex flex-wrap gap-1">
          {species.filter(sp => sp.migrationMonths.includes(CURRENT_MONTH)).map(sp => (
            <span
              key={sp.id}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full text-white"
              style={{ backgroundColor: sp.color }}
            >
              {sp.emoji} {sp.name.split(' ')[0]}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
