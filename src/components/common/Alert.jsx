import { AlertCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react'

export const Alert = ({ 
  variant = 'info', 
  title,
  children, 
  className = '' 
}) => {
  const variants = {
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-900',
      icon: Info,
      iconColor: 'text-blue-600'
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200 text-yellow-900',
      icon: AlertTriangle,
      iconColor: 'text-yellow-600'
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-900',
      icon: AlertCircle,
      iconColor: 'text-red-600'
    },
    success: {
      container: 'bg-green-50 border-green-200 text-green-900',
      icon: CheckCircle,
      iconColor: 'text-green-600'
    }
  }

  const config = variants[variant]
  const Icon = config.icon

  return (
    <div className={`border rounded-lg p-4 ${config.container} ${className}`}>
      <div className="flex gap-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.iconColor}`} />
        <div className="flex-1">
          {title && <div className="font-semibold mb-1">{title}</div>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}

