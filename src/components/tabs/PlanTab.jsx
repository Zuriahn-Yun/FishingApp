import { useState } from 'react'
import MigrationCalendar from '../plan/MigrationCalendar'
import StockingCalendar from '../plan/StockingCalendar'

export default function PlanTab() {
  const [view, setView] = useState('migration')

  return (
    <div>
      {/* Header */}
      <div className="bg-blue-700 px-4 pt-10 pb-4 text-white">
        <h1 className="text-xl font-bold">Plan Your Trip</h1>
        <p className="text-sm opacity-75 mt-0.5">Migration runs & stocking schedules</p>
      </div>

      {/* Toggle */}
      <div className="px-4 py-3 bg-white border-b border-slate-200">
        <div className="flex bg-slate-100 rounded-lg p-0.5">
          <button
            onClick={() => setView('migration')}
            className={`flex-1 py-2 rounded-md text-xs font-medium transition-all ${
              view === 'migration' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'
            }`}
          >
            Migration Calendar
          </button>
          <button
            onClick={() => setView('stocking')}
            className={`flex-1 py-2 rounded-md text-xs font-medium transition-all ${
              view === 'stocking' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'
            }`}
          >
            Stocking Calendar
          </button>
        </div>
      </div>

      <div className="tab-content" key={view}>
        {view === 'migration' ? <MigrationCalendar /> : <StockingCalendar />}
      </div>
    </div>
  )
}
