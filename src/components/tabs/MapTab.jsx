import { useState } from 'react'
import { MapPin, Navigation } from 'lucide-react'
import { accessPoints } from '../../data/accessPoints'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'freshwater', label: 'Freshwater' },
  { id: 'saltwater', label: 'Saltwater' },
  { id: 'public', label: 'Public Only' },
]

const SPECIES_COLORS = {
  'Steelhead': 'bg-purple-100 text-purple-700',
  'Coho Salmon': 'bg-orange-100 text-orange-700',
  'Chinook Salmon': 'bg-red-100 text-red-700',
  'Rainbow Trout': 'bg-cyan-100 text-cyan-700',
  'Cutthroat Trout': 'bg-teal-100 text-teal-700',
  'Brown Trout': 'bg-amber-100 text-amber-700',
  'Largemouth Bass': 'bg-green-100 text-green-700',
  'Smallmouth Bass': 'bg-lime-100 text-lime-700',
  'Walleye': 'bg-yellow-100 text-yellow-700',
  'Yellow Perch': 'bg-yellow-100 text-yellow-600',
  'Rockfish': 'bg-indigo-100 text-indigo-700',
  'Lingcod': 'bg-slate-100 text-slate-700',
  'Dungeness Crab': 'bg-red-100 text-red-600',
  'Spot Prawns': 'bg-pink-100 text-pink-700',
  'White Sturgeon': 'bg-slate-100 text-slate-600',
  'Shad': 'bg-blue-100 text-blue-600',
  'Kokanee': 'bg-rose-100 text-rose-600',
  'Chum Salmon': 'bg-orange-100 text-orange-600',
  'Mountain Whitefish': 'bg-slate-100 text-slate-500',
}

export default function MapTab() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = accessPoints.filter(pt => {
    if (activeFilter === 'freshwater') return pt.waterType === 'freshwater'
    if (activeFilter === 'saltwater') return pt.waterType === 'saltwater'
    if (activeFilter === 'public') return pt.type === 'Public'
    return true
  })

  return (
    <div>
      {/* Header */}
      <div className="bg-blue-700 px-4 pt-10 pb-4 text-white">
        <h1 className="text-xl font-bold">Access Points</h1>
        <p className="text-sm opacity-75 mt-0.5">Public & private fishing spots in WA</p>
      </div>

      {/* Filter chips */}
      <div className="px-4 py-3 bg-white border-b border-slate-200">
        <div className="flex gap-2 overflow-x-auto pb-0.5">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                activeFilter === f.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div className="mx-4 mt-4 bg-slate-200 rounded-xl h-36 flex items-center justify-center">
        <div className="text-center text-slate-400">
          <MapPin size={28} className="mx-auto mb-1" />
          <p className="text-xs font-medium">Interactive map coming soon</p>
          <p className="text-[10px]">Showing {filtered.length} access points below</p>
        </div>
      </div>

      {/* Access point cards */}
      <div className="px-4 py-4 space-y-3">
        {filtered.map(point => (
          <div key={point.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-slate-800 text-sm leading-tight">{point.name}</h3>
              <div className="flex gap-1.5 shrink-0">
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                  point.type === 'Public' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {point.type}
                </span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                  point.waterType === 'saltwater' ? 'bg-blue-100 text-blue-700' : 'bg-teal-100 text-teal-700'
                }`}>
                  {point.waterType === 'saltwater' ? 'Salt' : 'Fresh'}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-3 leading-relaxed">{point.description}</p>

            {/* Species tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {point.species.map(sp => (
                <span
                  key={sp}
                  className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${SPECIES_COLORS[sp] || 'bg-slate-100 text-slate-600'}`}
                >
                  {sp}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1">
                <Navigation size={10} />
                <span>{point.distance}</span>
              </div>
              <span>{point.access}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
