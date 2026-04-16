import { useState } from 'react'
import './App.css'
import BottomNav from './components/BottomNav'
import HomeTab from './components/tabs/HomeTab'
import RegsTab from './components/tabs/RegsTab'
import PlanTab from './components/tabs/PlanTab'
import BeginnerTab from './components/tabs/BeginnerTab'
import MapTab from './components/tabs/MapTab'

const TAB_COMPONENTS = {
  home: HomeTab,
  regs: RegsTab,
  plan: PlanTab,
  beginner: BeginnerTab,
  map: MapTab,
}

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const TabContent = TAB_COMPONENTS[activeTab]

  return (
    <div className="app-shell">
      <div className="scrollable-content">
        <div className="tab-content" key={activeTab}>
          <TabContent />
        </div>
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App
