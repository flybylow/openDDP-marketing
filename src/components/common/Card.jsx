export const Card = ({
  title,
  subtitle,
  icon: Icon,
  children,
  hover = false,
  onClick,
  className = ''
}) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-sm border border-gray-200 p-6
        ${hover ? 'hover:shadow-lg transition-shadow cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {Icon && (
        <div className="mb-4">
          <Icon className="w-10 h-10 text-blue-600" />
        </div>
      )}
      
      {title && (
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
      )}
      
      {subtitle && (
        <p className="text-sm text-gray-500 mb-4">
          {subtitle}
        </p>
      )}
      
      {children && (
        <div className="text-gray-600">
          {children}
        </div>
      )}
    </div>
  )
}

