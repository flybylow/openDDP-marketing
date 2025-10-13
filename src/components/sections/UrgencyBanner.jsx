import { AlertCircle } from 'lucide-react'
import { Button } from '../common/Button'

export const UrgencyBanner = () => {
  const calculateDaysRemaining = (deadline) => {
    const today = new Date()
    const target = new Date(deadline)
    const diffTime = target - today
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const batteryDays = calculateDaysRemaining('2027-02-18')
  const textilesDays = calculateDaysRemaining('2027-07-01')

  return (
    <section className="bg-red-50 border-y border-red-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
            <div className="text-sm">
              <span className="font-bold text-red-900">⏰ Battery manufacturers: {batteryDays} days until deadline</span>
              <span className="text-red-700 ml-4">Textiles: {textilesDays} days</span>
            </div>
          </div>
          <Button variant="outline" size="sm" href="/industries" className="border-red-600 text-red-600 hover:bg-red-50">
            See Your Industry's Timeline →
          </Button>
        </div>
      </div>
    </section>
  )
}

