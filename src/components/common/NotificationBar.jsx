import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export const NotificationBar = ({ messages = [], interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (messages.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, interval)

    return () => clearInterval(timer)
  }, [messages.length, interval])

  if (!isVisible || messages.length === 0) return null

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <p className="text-sm font-medium animate-fade-in">
            {messages[currentIndex]}
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-white hover:text-gray-200 transition-colors"
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

