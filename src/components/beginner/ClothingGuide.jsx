import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const seasons = [
  {
    id: 'spring',
    label: 'Spring',
    emoji: '🌧️',
    months: 'Mar – May',
    bg: 'bg-green-50',
    border: 'border-green-200',
    headerColor: 'text-green-700',
    layers: [
      {
        label: 'Base Layer',
        item: 'Merino wool or synthetic moisture-wicking shirt',
        why: 'Spring temps vary 40–60°F. Merino regulates temperature and doesn\'t smell after long days.',
      },
      {
        label: 'Mid Layer',
        item: 'Fleece jacket or insulated vest',
        why: 'Morning temperatures can be near freezing on mountain streams even in May.',
      },
      {
        label: 'Outer Layer',
        item: 'Waterproof rain jacket (Gore-Tex or similar)',
        why: 'WA spring = rain. A quality rain jacket is non-negotiable. Pack it even on sunny days.',
      },
      {
        label: 'Waders',
        item: 'Neoprene waders (3–5mm) or breathable waders + fleece liner',
        why: 'Spring runoff makes rivers cold (42–52°F). Neoprene keeps you warmer for extended wading.',
      },
      {
        label: 'Footwear',
        item: 'Felt or rubber-soled wading boots',
        why: 'Felt offers superior grip on slippery moss. Rubber soles with studs now mandatory in some WA rivers to prevent felt from transporting invasive species.',
      },
    ],
  },
  {
    id: 'summer',
    label: 'Summer',
    emoji: '☀️',
    months: 'Jun – Aug',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    headerColor: 'text-yellow-700',
    layers: [
      {
        label: 'Base Layer',
        item: 'Lightweight UPF 50+ long-sleeve shirt',
        why: 'WA summer sun is intense, especially on Eastern WA lakes and rivers. Long sleeves beat sunscreen for all-day protection.',
      },
      {
        label: 'Bottoms',
        item: 'Quick-dry pants or shorts',
        why: 'You WILL get wet. Quick-dry fabric (nylon/polyester) dries in minutes. Avoid cotton — miserable when wet.',
      },
      {
        label: 'Hat',
        item: 'Wide-brim hat (4"+ brim) with neck cape',
        why: 'Shade your face, neck, and ears. Polarized sunglasses are essential for spotting fish and protecting your eyes.',
      },
      {
        label: 'Waders',
        item: 'Lightweight breathable waders or wet-wade in quick-dry pants',
        why: 'Water temps above 65°F — wet-wading is comfortable and actually safer (you can cool off quickly).',
      },
      {
        label: 'Pack',
        item: 'Daypack with hydration reservoir',
        why: 'Dehydration is the #1 summer fishing hazard in Eastern WA. Carry 2L minimum for a full day.',
      },
    ],
  },
  {
    id: 'fall',
    label: 'Fall',
    emoji: '🍂',
    months: 'Sep – Nov',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    headerColor: 'text-orange-700',
    layers: [
      {
        label: 'Base Layer',
        item: 'Heavyweight merino wool shirt',
        why: 'September is still warm but October drops fast. Merino provides warmth-to-weight ratio better than synthetics.',
      },
      {
        label: 'Mid Layer',
        item: 'Down or synthetic puffer jacket',
        why: 'Fall mornings on the coast can be 38°F with wind chill. A packable puffer lives in your vest pocket.',
      },
      {
        label: 'Outer Layer',
        item: 'Waterproof wading jacket',
        why: 'Oct–Nov brings consistent WA rainfall. Wading jackets are designed to work with waders — standard rain jackets ride up.',
      },
      {
        label: 'Waders',
        item: 'Breathable waders + heavyweight fleece wading pants',
        why: 'Fall river temps 48–58°F. Fleece wading pants under breathable waders provide warmth without the bulk of neoprene.',
      },
      {
        label: 'Gloves',
        item: 'Fingerless fleece or neoprene fishing gloves',
        why: 'Cold and wet hands make knot-tying and hook removal difficult and frustrating. Fingerless gloves are the compromise.',
      },
    ],
  },
  {
    id: 'winter',
    label: 'Winter',
    emoji: '❄️',
    months: 'Dec – Feb',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    headerColor: 'text-blue-700',
    layers: [
      {
        label: 'Base Layer',
        item: 'Expedition-weight merino wool or Capilene thermal top + bottom',
        why: 'Winter steelheading is a WA tradition. Proper base layers mean the difference between a 6-hour session and a 2-hour miserable retreat.',
      },
      {
        label: 'Mid Layer',
        item: 'Heavy fleece jacket (Polartec 300 weight)',
        why: 'Wind cuts through light mid-layers on exposed rivers. Full-zip heavy fleece gives you ventilation options.',
      },
      {
        label: 'Outer Layer',
        item: 'Waterproof wading jacket with sealed seams',
        why: 'Unsealed seams will leak after 4+ hours in WA winter rain. Check that your jacket specifies taped or sealed seams.',
      },
      {
        label: 'Waders',
        item: '5mm neoprene waders',
        why: 'Winter river temps 36–44°F. Breathable waders + fleece liners work, but neoprene is warmer and more forgiving if you take on water.',
      },
      {
        label: 'Head & Hands',
        item: 'Wool/fleece beanie + full neoprene gloves',
        why: 'You lose 40% of body heat through your head. Neoprene gloves (2mm) allow some dexterity while keeping fingers functional in near-freezing water.',
      },
    ],
  },
]

export default function ClothingGuide() {
  const [openSeason, setOpenSeason] = useState('spring')

  return (
    <div className="space-y-2">
      {seasons.map(season => {
        const isOpen = openSeason === season.id
        return (
          <div key={season.id} className={`rounded-xl border overflow-hidden ${season.border}`}>
            <button
              className={`w-full px-4 py-3 flex items-center justify-between text-left ${season.bg}`}
              onClick={() => setOpenSeason(isOpen ? null : season.id)}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{season.emoji}</span>
                <div>
                  <span className={`font-bold text-sm ${season.headerColor}`}>{season.label}</span>
                  <span className="text-xs text-slate-500 ml-2">{season.months}</span>
                </div>
              </div>
              <div className="text-slate-400">
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </button>

            {isOpen && (
              <div className="bg-white divide-y divide-slate-100">
                {season.layers.map((layer, i) => (
                  <div key={i} className="px-4 py-3">
                    <div className="flex gap-2 mb-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${season.bg} ${season.headerColor} border ${season.border}`}>
                        {layer.label}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800 mb-0.5">{layer.item}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{layer.why}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
