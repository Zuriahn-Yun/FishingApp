import { AlertTriangle, AlertCircle, Info, CheckCircle } from 'lucide-react'
import { alerts } from '../../data/alerts'

const SEVERITY_CONFIG = {
  critical: {
    border: 'border-l-red-500',
    bg: 'bg-red-50',
    badge: 'bg-red-100 text-red-700',
    label: 'Emergency Closure',
    Icon: AlertTriangle,
    iconColor: 'text-red-500',
  },
  warning: {
    border: 'border-l-orange-500',
    bg: 'bg-orange-50',
    badge: 'bg-orange-100 text-orange-700',
    label: 'Rule Change',
    Icon: AlertCircle,
    iconColor: 'text-orange-500',
  },
  info: {
    border: 'border-l-blue-500',
    bg: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
    label: 'Update',
    Icon: Info,
    iconColor: 'text-blue-500',
  },
  success: {
    border: 'border-l-green-500',
    bg: 'bg-green-50',
    badge: 'bg-green-100 text-green-700',
    label: 'New Regulation',
    Icon: CheckCircle,
    iconColor: 'text-green-500',
  },
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function AlertsFeed() {
  return (
    <div className="px-4 py-4 space-y-3">
      <p className="text-xs text-slate-500">
        {alerts.length} recent updates from WDFW — always verify at <span className="text-blue-600">wdfw.wa.gov</span>
      </p>

      {alerts.map(alert => {
        const config = SEVERITY_CONFIG[alert.severity] || SEVERITY_CONFIG.info
        const { Icon } = config
        return (
          <div
            key={alert.id}
            className={`rounded-xl border-l-4 p-4 ${config.border} ${config.bg}`}
          >
            <div className="flex items-start gap-3">
              <Icon size={16} className={`${config.iconColor} shrink-0 mt-0.5`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${config.badge}`}>
                    {config.label}
                  </span>
                  <span className="text-[10px] text-slate-400">{formatDate(alert.date)}</span>
                </div>
                <h3 className="text-xs font-bold text-slate-800 mb-1 leading-tight">{alert.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{alert.body}</p>
                {alert.waterBody && (
                  <p className="text-[10px] text-slate-400 mt-1.5">📍 {alert.waterBody}</p>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
