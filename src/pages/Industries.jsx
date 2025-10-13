import { motion } from 'framer-motion'
import { Calendar, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'

export const Industries = () => {
  const industries = [
    {
      id: 'batteries',
      name: 'Batteries',
      icon: '🔋',
      deadline: 'February 18, 2027',
      daysRemaining: Math.ceil((new Date('2027-02-18') - new Date()) / (1000 * 60 * 60 * 24)),
      urgency: 'high',
      description: 'Battery regulation requires detailed lifecycle data, material composition, and carbon footprint tracking.',
      requirements: [
        'Material composition tracking',
        'Carbon footprint calculation',
        'Supply chain transparency',
        'Recycling information',
        'Battery performance data'
      ],
      products: ['EV batteries', 'Industrial batteries', 'Consumer electronics batteries']
    },
    {
      id: 'textiles',
      name: 'Textiles & Apparel',
      icon: '👕',
      deadline: 'July 1, 2027',
      daysRemaining: Math.ceil((new Date('2027-07-01') - new Date()) / (1000 * 60 * 60 * 24)),
      urgency: 'high',
      description: 'Textile products require transparency on materials, manufacturing processes, and sustainability metrics.',
      requirements: [
        'Material traceability',
        'Manufacturing location',
        'Water usage data',
        'Chemical composition',
        'Care instructions'
      ],
      products: ['Clothing', 'Home textiles', 'Technical fabrics']
    },
    {
      id: 'electronics',
      name: 'Electronics',
      icon: '📱',
      deadline: 'January 1, 2028',
      daysRemaining: Math.ceil((new Date('2028-01-01') - new Date()) / (1000 * 60 * 60 * 24)),
      urgency: 'medium',
      description: 'Electronic products need comprehensive data on components, repairability, and end-of-life handling.',
      requirements: [
        'Component sourcing',
        'Repairability score',
        'E-waste management',
        'Energy efficiency',
        'Software updates policy'
      ],
      products: ['Smartphones', 'Computers', 'Home appliances']
    },
    {
      id: 'packaging',
      name: 'Packaging',
      icon: '📦',
      deadline: 'June 1, 2028',
      daysRemaining: Math.ceil((new Date('2028-06-01') - new Date()) / (1000 * 60 * 60 * 24)),
      urgency: 'medium',
      description: 'Packaging materials require data on recyclability, recycled content, and circular economy compliance.',
      requirements: [
        'Material composition',
        'Recycled content percentage',
        'Recyclability information',
        'Disposal instructions',
        'Environmental impact'
      ],
      products: ['Consumer packaging', 'Industrial packaging', 'Food packaging']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Industry-Specific DPP Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Different industries have different compliance requirements and deadlines. 
              Find your industry and understand what you need to do.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  relative bg-white rounded-lg border-2 p-8 hover:shadow-xl transition-shadow
                  ${industry.urgency === 'high' ? 'border-red-300' : 'border-yellow-300'}
                `}
              >
                {/* Urgency Badge */}
                {industry.urgency === 'high' && (
                  <div className="absolute -top-3 -right-3">
                    <span className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      <AlertTriangle size={14} />
                      HIGH URGENCY
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="text-6xl flex-shrink-0">{industry.icon}</div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {industry.name}
                    </h3>

                    {/* Deadline */}
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar size={18} className="text-gray-500" />
                      <span className="text-gray-700 font-medium">
                        Deadline: {industry.deadline}
                      </span>
                      <span className={`ml-2 font-bold ${
                        industry.urgency === 'high' ? 'text-red-600' : 'text-yellow-600'
                      }`}>
                        ({industry.daysRemaining} days)
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">
                      {industry.description}
                    </p>

                    {/* Requirements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {industry.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                      {industry.requirements.length > 3 && (
                        <p className="text-sm text-gray-500 mt-1">
                          +{industry.requirements.length - 3} more requirements
                        </p>
                      )}
                    </div>

                    {/* Products */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Applies to:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.products.map((product, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      icon={ArrowRight}
                      href={`/get-started?industry=${industry.id}`}
                    >
                      Get {industry.name} Assessment
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Applies to You?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Take our 5-minute assessment to understand your specific requirements and compliance timeline
          </p>
          <Button size="lg" href="/get-started">
            Take Free Assessment
          </Button>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Compliance Timeline Overview
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-red-300 via-yellow-300 to-blue-300" />

            {/* Timeline items */}
            <div className="relative grid md:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={industry.id} className="text-center">
                  <div className={`
                    w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-4
                    ${industry.urgency === 'high' ? 'bg-red-100' : 'bg-yellow-100'}
                  `}>
                    {industry.icon}
                  </div>
                  <div className="font-bold text-gray-900 mb-1">{industry.name}</div>
                  <div className="text-sm text-gray-600">{industry.deadline}</div>
                  <div className={`text-xs font-semibold mt-1 ${
                    industry.urgency === 'high' ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {industry.daysRemaining} days left
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Achieve Compliance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with a free assessment to understand your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/get-started">
              Start Free Assessment
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href="/contact"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
