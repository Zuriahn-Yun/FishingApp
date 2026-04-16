import { Fish, Trash2, Droplets, AlertCircle, Heart, Shield, Leaf, Users } from 'lucide-react'

const tips = [
  {
    id: 1,
    Icon: Heart,
    color: 'text-red-500',
    bg: 'bg-red-50',
    title: 'Catch & Release Best Practices',
    body: 'Wet your hands before handling fish. Use rubber nets. Keep fish in water as much as possible — every second out counts. Revive exhausted fish by gently moving them forward in the water until they swim away on their own.',
  },
  {
    id: 2,
    Icon: Fish,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    title: 'Barbless Hooks Save Lives',
    body: 'Barbless hooks make removal quick and atraumatic — under 5 seconds vs 30+ seconds with barbed. Use needle-nose pliers to crimp the barb on any hook. In many WA waters, barbless is required by law.',
  },
  {
    id: 3,
    Icon: AlertCircle,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    title: 'Stop Invasive Species',
    body: 'Clean, Drain, Dry your boat, waders, and gear between water bodies. New Zealand mudsnails, quagga mussels, and northern pike are all established or threatening WA waters. Never transfer live bait or water between sites.',
  },
  {
    id: 4,
    Icon: Shield,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    title: 'Eliminate Lead Tackle',
    body: 'Lead sinkers and jigs poison eagles, loons, and other waterfowl that ingest them directly or through eating fish. Switch to tin, bismuth, or tungsten — they perform just as well and are required in some WA areas already.',
  },
  {
    id: 5,
    Icon: Droplets,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    title: 'Protect Riparian Zones',
    body: 'Stay on established trails and access points. Trampling streamside vegetation destabilizes banks, increases erosion, and eliminates the shade that keeps water cool for trout and salmon. Use waders instead of off-trail bank access.',
  },
  {
    id: 6,
    Icon: Trash2,
    color: 'text-green-500',
    bg: 'bg-green-50',
    title: 'Pack Out Everything',
    body: 'Monofilament line kills birds and entangles fish. Bait containers and food waste attract predators and can introduce disease. Carry a bag to collect your own waste — and pick up a few pieces of others\' trash when you see it.',
  },
  {
    id: 7,
    Icon: Leaf,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    title: 'Respect Riparian Habitat',
    body: 'Large woody debris — logs and branches in streams — is critical salmon habitat. Never remove it. Report illegal removal to WDFW. Snags and root wads provide cover for trout and salmon fry.',
  },
  {
    id: 8,
    Icon: Users,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    title: 'Respect Other Anglers & Tribes',
    body: 'Washington tribal nations have treaty-reserved fishing rights that predate state regulations. Give tribal nets and gear a wide berth. On popular rivers, maintain at least 50 ft between yourself and other anglers. Ask before crowding a run.',
  },
]

export default function EcoTips() {
  return (
    <div className="px-4 py-4 space-y-3">
      <p className="text-xs text-slate-500 mb-1">
        Sustainable fishing practices protect WA fisheries for future generations.
      </p>
      {tips.map((tip) => {
        const TipIcon = tip.Icon
        return (
        <div key={tip.id} className={`${tip.bg} rounded-xl p-4 flex gap-3`}>
          <TipIcon size={18} className={`${tip.color} shrink-0 mt-0.5`} />
          <div>
            <h3 className="text-xs font-bold text-slate-800 mb-1">{tip.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{tip.body}</p>
          </div>
        </div>
        )
      })}
    </div>
  )
}
