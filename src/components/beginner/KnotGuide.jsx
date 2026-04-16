import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { knots } from '../../data/knots'

const DIFFICULTY_COLORS = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
}

export default function KnotGuide() {
  const [openKnot, setOpenKnot] = useState(null)

  return (
    <div className="space-y-2">
      {knots.map(knot => {
        const isOpen = openKnot === knot.id
        return (
          <div key={knot.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <button
              className="w-full px-4 py-3.5 flex items-center justify-between text-left"
              onClick={() => setOpenKnot(isOpen ? null : knot.id)}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-semibold text-slate-800 text-sm">{knot.name}</span>
                  <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${DIFFICULTY_COLORS[knot.difficulty]}`}>
                    {knot.difficulty}
                  </span>
                </div>
                <p className="text-xs text-slate-500 truncate">{knot.bestFor}</p>
              </div>
              <div className="ml-3 text-slate-400">
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 border-t border-slate-100">
                <div className="flex gap-3 mt-3 mb-3">
                  <div className="flex-1 bg-slate-50 rounded-lg p-2 text-center">
                    <p className="text-[9px] text-slate-400 uppercase font-medium">Strength</p>
                    <p className="text-sm font-bold text-slate-700">{knot.strengthRating}</p>
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-lg p-2 text-center">
                    <p className="text-[9px] text-slate-400 uppercase font-medium">Best For</p>
                    <p className="text-[10px] font-medium text-slate-600 leading-tight">{knot.bestFor.split('—')[0].trim()}</p>
                  </div>
                </div>

                {/* Steps */}
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-2">Steps</p>
                <ol className="space-y-2">
                  {knot.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-xs text-slate-700">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>

                {/* Pro tip */}
                {knot.tip && (
                  <div className="mt-3 bg-amber-50 rounded-lg p-3 border border-amber-100">
                    <p className="text-[10px] font-semibold text-amber-700 mb-0.5">Pro Tip</p>
                    <p className="text-xs text-amber-800">{knot.tip}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
