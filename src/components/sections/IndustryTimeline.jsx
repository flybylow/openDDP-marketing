import { motion } from 'framer-motion'
import { Calendar, AlertTriangle } from 'lucide-react'
import { Button } from '../common/Button'

export const IndustryTimeline = () => {
  const industries = [
    {
      id: 'batteries',
      name: 'Batteries',
      icon: '🔋',
      deadline: 'Feb 18, 2027',
      daysRemaining: Math.ceil((new Date('2027-02-18') - new Date()) / (1000 * 60 * 60 * 24)),
      urgency: 'high',
      requirements: ['Material composition', 'Carbon footprint', 'Supply chain data']
    },
    {
      id: 'textiles',
      name: 'Textiles',
      icon: '👕',
      deadline: 'July 1, 2027',
      daysRemaining: Math.ceil((new Date('2027-07-01') - new Date()) / (1000 * 60 * 60 * 24)),
      urgency: 'high',
      requirements: ['Material traceability', 'Water usage', 'Chemical composition']
    },
    {
      id: 'electronics',
      name: 'Electronics',
      icon: '📱',
      deadline: 'Jan 1, 2028',
      daysRemaining: Math.ceil((new Date('2028-01-01') - new Date()) / (1000 * 60 * 60 * 24)),
      urgency: 'medium',
      requirements: ['Component sourcing', 'Repairability score', 'E-waste info']
    },
    {
      id: 'packaging',
      name: 'Packaging',
      icon: '📦',
      deadline: 'June 1, 2028',
      daysRemaining: Math.ceil((new Date('2028-06-01') - new Date()) / (1000 * 60 * 60 * 24)),
      urgency: 'medium',
      requirements: ['Recycled content', 'Recyclability', 'Disposal instructions']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Industry, Your Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Different industries have different compliance deadlines. Find yours and start preparing today.
          </p>
        </div>

        {/* Timeline visualization */}
        <div className="relative mb-12">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-yellow-200 to-blue-200" />
          
          <div className="grid md:grid-cols-4 gap-6 relative">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  relative bg-white rounded-lg shadow-lg border-2 p-6 
                  ${industry.urgency === 'high' ? 'border-red-300' : 'border-yellow-300'}
                  hover:shadow-xl transition-shadow
                `}
              >
                {/* Urgency badge */}
                {industry.urgency === 'high' && (
                  <div className="absolute -top-3 -right-3">
                    <span className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      <AlertTriangle size={12} />
                      URGENT
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
                    <Calendar size={16} />
                    <span>{industry.deadline}</span>
                  </div>

                  <div className={`text-2xl font-bold mb-3 ${
                    industry.urgency === 'high' ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {industry.daysRemaining} days
                  </div>

                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-xs text-gray-500 mb-2">Key Requirements:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {industry.requirements.map((req, idx) => (
                        <li key={idx}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" href="/industries">
            Explore All Industries
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Get detailed compliance requirements for your specific industry
          </p>
        </div>
      </div>
    </section>
  )
}

