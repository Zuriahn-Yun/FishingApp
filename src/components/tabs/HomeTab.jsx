import { useState } from 'react'
import { AlertTriangle, X, ChevronRight, MapPin, Fish } from 'lucide-react'
import { species } from '../../data/species'
import { alerts } from '../../data/alerts'
import { accessPoints } from '../../data/accessPoints'
import { stockings } from '../../data/stockings'

const CURRENT_MONTH = 4 // April

export default function HomeTab() {
  const [dismissed, setDismissed] = useState(false)
  const [selectedSpecies, setSelectedSpecies] = useState(null)

  const criticalAlert = alerts.find(a => a.severity === 'critical')
  const nearbySpots = accessPoints.slice(0, 3)
  const upcomingStockings = stockings
    .filter(s => s.month === CURRENT_MONTH || s.month === CURRENT_MONTH + 1)
    .slice(0, 3)

  return (
    <div className="pb-2">
      {/* Header */}
      <div className="bg-blue-700 px-4 pt-10 pb-6 text-white">
        <div className="flex items-center gap-2 mb-1">
          <Fish size={20} />
          <span className="text-sm font-medium opacity-80">CastWise WA</span>
        </div>
        <h1 className="text-2xl font-bold">Good morning, angler!</h1>
        <p className="text-sm opacity-75 mt-1">Washington State Fishing Companion</p>
      </div>

      {/* Critical Alert Banner */}
      {criticalAlert && !dismissed && (
        <div className="mx-4 mt-4 bg-red-50 border border-red-200 rounded-xl p-3 flex gap-3">
          <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-red-700">{criticalAlert.title}</p>
            <p className="text-xs text-red-600 mt-0.5 line-clamp-2">{criticalAlert.body}</p>
          </div>
          <button onClick={() => setDismissed(true)} className="text-red-400 hover:text-red-600 shrink-0">
            <X size={16} />
          </button>
        </div>
      )}

      {/* Quick Start — Species Grid */}
      <div className="px-4 mt-5">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Quick Start — Pick a Species</h2>
        <div className="grid grid-cols-4 gap-2">
          {species.map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedSpecies(selectedSpecies?.id === s.id ? null : s)}
              className={`rounded-xl p-2 flex flex-col items-center gap-1 border-2 transition-all ${
                selectedSpecies?.id === s.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-transparent bg-white'
              }`}
              style={selectedSpecies?.id === s.id ? {} : {}}
            >
              <span className="text-2xl">{s.emoji}</span>
              <span className="text-[10px] font-medium text-slate-600 text-center leading-tight">{s.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Species Info Card */}
        {selectedSpecies && (
          <div className="mt-3 rounded-xl p-4 border-l-4 bg-white shadow-sm" style={{ borderLeftColor: selectedSpecies.color }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{selectedSpecies.emoji}</span>
              <span className="font-semibold text-slate-800">{selectedSpecies.name}</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{selectedSpecies.quickTip}</p>
          </div>
        )}
      </div>

      {/* Nearby Spots */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Nearby Spots</h2>
          <span className="text-xs text-blue-600 flex items-center gap-1">See all <ChevronRight size={12} /></span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1">
          {nearbySpots.map(spot => (
            <div key={spot.id} className="bg-white rounded-xl p-3 min-w-[160px] shadow-sm border border-slate-100">
              <div className="flex items-start gap-2 mb-2">
                <MapPin size={14} className={spot.waterType === 'saltwater' ? 'text-blue-500 shrink-0 mt-0.5' : 'text-green-500 shrink-0 mt-0.5'} />
                <span className="text-xs font-semibold text-slate-700 leading-tight">{spot.name}</span>
              </div>
              <p className="text-[10px] text-slate-500 mb-2">{spot.distance} away</p>
              <div className="flex flex-wrap gap-1">
                {spot.species.slice(0, 2).map(sp => (
                  <span key={sp} className="bg-slate-100 text-slate-600 text-[9px] px-1.5 py-0.5 rounded-full">{sp.split(' ')[0]}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Stockings */}
      <div className="px-4 mt-6 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Upcoming Stockings</h2>
          <span className="text-xs text-blue-600 flex items-center gap-1">See all <ChevronRight size={12} /></span>
        </div>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
          {upcomingStockings.map((stocking, i) => (
            <div key={stocking.id} className={`px-4 py-3 flex items-center gap-3 ${i < upcomingStockings.length - 1 ? 'border-b border-slate-100' : ''}`}>
              <div className="bg-blue-100 text-blue-700 rounded-lg px-2 py-1 text-center min-w-[44px]">
                <div className="text-[9px] font-medium uppercase">{stocking.monthName.slice(0, 3)}</div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-700 truncate">{stocking.lake}</p>
                <p className="text-[10px] text-slate-500">{stocking.count} {stocking.species} — {stocking.size}</p>
              </div>
              <span className="text-[10px] text-slate-400">{stocking.region}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
