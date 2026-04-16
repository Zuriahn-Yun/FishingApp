const columns = [
  {
    id: 'live',
    label: 'Live Bait',
    emoji: '🪱',
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    headerBg: 'bg-amber-500',
  },
  {
    id: 'lures',
    label: 'Lures',
    emoji: '🎣',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    headerBg: 'bg-blue-500',
  },
  {
    id: 'flies',
    label: 'Flies',
    emoji: '🪰',
    color: 'text-green-700',
    bg: 'bg-green-50',
    headerBg: 'bg-green-500',
  },
]

const rows = [
  {
    label: 'Best For',
    live: 'Trout, perch, catfish, bass — when fish are finicky',
    lures: 'Bass, walleye, salmon, steelhead — active fish',
    flies: 'Trout, steelhead — wild fish in clear water',
  },
  {
    label: 'Pros',
    live: 'Natural scent & action triggers bites. Works when fish are inactive. Cheap.',
    lures: 'Reusable, versatile, covers water fast. No refrigeration needed.',
    flies: 'Matches natural insects precisely. Most satisfying technique. Works amazing in the Yakima.',
  },
  {
    label: 'Cons',
    live: 'Messy, needs refrigeration. Restricted or banned on some WA waters.',
    lures: 'Requires technique to use effectively. Can be expensive. Snagged = lost.',
    flies: 'Steep learning curve. Requires specialized rod, reel, and line. Wind-dependent.',
  },
  {
    label: 'Typical Cost',
    live: '$3–8/container of worms; minnows $5–12/dozen',
    lures: '$4–20 per lure; some bass/salmon lures $25+',
    flies: '$2–5/fly; fly tying materials $50–200 to start',
  },
  {
    label: 'WA Hot Picks',
    live: 'Nightcrawlers for trout, sand shrimp for salmon & steelhead, crawfish for bass',
    lures: 'Mepps spinners, Blue Fox, Kwikfish plugs for salmon; Rooster Tails for trout',
    flies: 'Elk hair caddis, Prince nymph, Woolly Bugger — standard Yakima Canyon patterns',
  },
]

export default function BaitComparison() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Column headers */}
      <div className="grid grid-cols-[70px_repeat(3,1fr)]">
        <div className="bg-slate-100 p-2" />
        {columns.map(col => (
          <div key={col.id} className={`${col.headerBg} p-2 text-center`}>
            <div className="text-base">{col.emoji}</div>
            <div className="text-[10px] font-bold text-white">{col.label}</div>
          </div>
        ))}
      </div>

      {/* Data rows */}
      {rows.map((row, ri) => (
        <div key={ri} className={`grid grid-cols-[70px_repeat(3,1fr)] ${ri < rows.length - 1 ? 'border-b border-slate-100' : ''}`}>
          <div className="bg-slate-50 p-2 flex items-start">
            <span className="text-[9px] font-semibold text-slate-500 uppercase leading-tight">{row.label}</span>
          </div>
          {columns.map(col => (
            <div key={col.id} className={`${col.bg} p-2`}>
              <p className={`text-[10px] ${col.color} leading-relaxed`}>{row[col.id]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
