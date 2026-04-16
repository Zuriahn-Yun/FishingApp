import { Home, BookOpen, Calendar, GraduationCap, MapPin } from 'lucide-react'

const tabs = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'regs', label: 'Regs', Icon: BookOpen },
  { id: 'plan', label: 'Plan', Icon: Calendar },
  { id: 'beginner', label: 'Learn', Icon: GraduationCap },
  { id: 'map', label: 'Map', Icon: MapPin },
]

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-slate-200 z-50">
      <div className="flex">
        {tabs.map((tab) => {
          const active = activeTab === tab.id
          const TabIcon = tab.Icon
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors ${
                active ? 'text-blue-600' : 'text-slate-400'
              }`}
            >
              <TabIcon size={22} strokeWidth={active ? 2.5 : 1.75} />
              <span className={`text-[10px] font-medium ${active ? 'text-blue-600' : 'text-slate-400'}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
