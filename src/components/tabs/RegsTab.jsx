import { useState } from 'react'
import WaterSearch from '../regs/WaterSearch'
import LicenseWizard from '../regs/LicenseWizard'
import AlertsFeed from '../regs/AlertsFeed'
import EcoTips from '../regs/EcoTips'

const SUB_TABS = [
  { id: 'search', label: 'Water Search' },
  { id: 'license', label: 'License' },
  { id: 'updates', label: 'Updates' },
  { id: 'eco', label: 'Eco Tips' },
]

export default function RegsTab() {
  const [activeSubTab, setActiveSubTab] = useState('search')

  return (
    <div>
      {/* Header */}
      <div className="bg-blue-700 px-4 pt-10 pb-4 text-white">
        <h1 className="text-xl font-bold">Regulations</h1>
        <p className="text-sm opacity-75 mt-0.5">WA fishing rules, licenses & alerts</p>
      </div>

      {/* Sub-tab bar */}
      <div className="bg-white border-b border-slate-200 px-4">
        <div className="flex gap-0 overflow-x-auto">
          {SUB_TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`px-3 py-3 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeSubTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-tab content */}
      <div className="tab-content" key={activeSubTab}>
        {activeSubTab === 'search' && <WaterSearch />}
        {activeSubTab === 'license' && <LicenseWizard />}
        {activeSubTab === 'updates' && <AlertsFeed />}
        {activeSubTab === 'eco' && <EcoTips />}
      </div>
    </div>
  )
}
