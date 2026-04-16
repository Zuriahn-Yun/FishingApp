import KnotGuide from '../beginner/KnotGuide'
import GearRecommendations from '../beginner/GearRecommendations'
import BaitComparison from '../beginner/BaitComparison'
import ClothingGuide from '../beginner/ClothingGuide'

export default function BeginnerTab() {
  return (
    <div>
      {/* Header */}
      <div className="bg-blue-700 px-4 pt-10 pb-4 text-white">
        <h1 className="text-xl font-bold">Beginner Guide</h1>
        <p className="text-sm opacity-75 mt-0.5">Knots, gear, bait & what to wear</p>
      </div>

      <div className="px-4 py-4 space-y-6">
        <section>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Knot Guide</h2>
          <KnotGuide />
        </section>

        <section>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Gear Recommendations</h2>
          <GearRecommendations />
        </section>

        <section>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Bait Comparison</h2>
          <BaitComparison />
        </section>

        <section>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Pacific NW Clothing Guide</h2>
          <ClothingGuide />
        </section>
      </div>
    </div>
  )
}
