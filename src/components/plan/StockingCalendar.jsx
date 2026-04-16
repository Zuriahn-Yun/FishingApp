import { useState } from 'react'
import { Fish } from 'lucide-react'
import { stockings } from '../../data/stockings'

const MONTHS = [
  { num: 1, short: 'Jan' }, { num: 2, short: 'Feb' }, { num: 3, short: 'Mar' },
  { num: 4, short: 'Apr' }, { num: 5, short: 'May' }, { num: 6, short: 'Jun' },
  { num: 7, short: 'Jul' }, { num: 8, short: 'Aug' }, { num: 9, short: 'Sep' },
  { num: 10, short: 'Oct' }, { num: 11, short: 'Nov' }, { num: 12, short: 'Dec' },
]

const CURRENT_MONTH = 4

export default function StockingCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH)

  const filtered = stockings.filter(s => s.month === selectedMonth)
  const availableMonths = [...new Set(stockings.map(s => s.month))]

  return (
    <div className="px-4 py-4">
      {/* Month filter chips */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 mb-4">
        {MONTHS.map(m => {
          const hasData = availableMonths.includes(m.num)
          const active = selectedMonth === m.num
          return (
            <button
              key={m.num}
              onClick={() => setSelectedMonth(m.num)}
              disabled={!hasData}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                active
                  ? 'bg-blue-600 text-white'
                  : hasData
                  ? 'bg-white text-slate-600 border border-slate-200'
                  : 'bg-slate-100 text-slate-300 cursor-not-allowed'
              }`}
            >
              {m.short}
            </button>
          )
        })}
      </div>

      {/* Results count */}
      <p className="text-xs text-slate-500 mb-3">
        {filtered.length} stocking event{filtered.length !== 1 ? 's' : ''} in {MONTHS.find(m => m.num === selectedMonth)?.short}
      </p>

      {/* No data */}
      {filtered.length === 0 && (
        <div className="bg-slate-50 rounded-xl p-6 text-center text-slate-400">
          <Fish size={24} className="mx-auto mb-2" />
          <p className="text-sm font-medium">No stocking events recorded</p>
          <p className="text-xs mt-1">Try a different month — April, May, and June have the most activity.</p>
        </div>
      )}

      {/* Stocking cards */}
      <div className="space-y-3">
        {filtered.map(event => (
          <div key={event.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-slate-800 text-sm leading-tight">{event.lake}</h3>
              <span className="bg-blue-100 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0">{event.region}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Fish size={11} className="text-blue-500" />
                {event.species}
              </span>
              <span className="text-slate-300">·</span>
              <span className="font-semibold text-slate-700">{event.count} fish</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500">{event.size}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-slate-400 mt-4 text-center">
        Stocking schedules subject to change. Check wdfw.wa.gov/fishing/washington/trout-stocking for live updates.
      </p>
    </div>
  )
}
