import { Shield, Lock, CheckCircle } from 'lucide-react'

export const SecurityBadges = () => {
  const badges = [
    {
      icon: Shield,
      label: 'GDPR Compliant',
      description: 'EU data protection'
    },
    {
      icon: Lock,
      label: 'ISO 27001',
      description: 'Information security'
    },
    {
      icon: CheckCircle,
      label: 'SOC 2',
      description: 'Security & compliance'
    }
  ]

  return (
    <div className="border-t border-gray-800 pt-8 mt-8">
      <h4 className="text-sm text-gray-400 mb-4 text-center uppercase tracking-wide font-semibold">
        Security & Compliance
      </h4>
      <div className="flex flex-wrap justify-center gap-6">
        {badges.map((badge, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-2 border border-gray-700">
              <badge.icon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-300">{badge.label}</div>
              <div className="text-xs text-gray-500">{badge.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

