import { Clock, FileQuestion, DollarSign, HelpCircle, Users } from 'lucide-react'
import { Card } from '../common/Card'

export const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Tight Deadlines',
      description: 'Battery regulation kicks in Feb 2027. Textiles July 2027. No time to waste.',
      type: 'manufacturer'
    },
    {
      icon: FileQuestion,
      title: 'Complex Requirements',
      description: 'Hundreds of data points, supply chain tracking, carbon calculations - overwhelming.',
      type: 'manufacturer'
    },
    {
      icon: DollarSign,
      title: 'Enterprise Costs',
      description: 'Traditional DPP solutions cost €500K+. Out of reach for most manufacturers.',
      type: 'manufacturer'
    },
    {
      icon: HelpCircle,
      title: 'No Clear Path',
      description: 'Confusing regulations, no clear implementation roadmap, expensive consultants.',
      type: 'manufacturer'
    },
    {
      icon: Users,
      title: 'For Consumers',
      description: '❌ Can\'t verify product claims\n❌ No recycling information\n❌ Hidden supply chains',
      highlight: true,
      type: 'consumer'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The DPP Dilemma Facing Manufacturers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EU regulations are coming fast, but compliance solutions are expensive and complex
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.slice(0, 4).map((problem, index) => (
            <Card 
              key={index}
              icon={problem.icon}
              title={problem.title}
              hover
            >
              <p className="text-sm">{problem.description}</p>
            </Card>
          ))}
        </div>

        {/* Consumer Perspective */}
        <div className="mt-8 max-w-3xl mx-auto">
          <Card 
            icon={Users}
            title="For Consumers"
            className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200"
          >
            <div className="space-y-2 text-sm mb-4">
              <p className="flex items-start gap-2">
                <span className="text-red-500">❌</span>
                <span>Can't verify product claims or sustainability</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-500">❌</span>
                <span>No clear recycling or disposal guidance</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-500">❌</span>
                <span>Hidden supply chains and manufacturing</span>
              </p>
            </div>
            <p className="text-sm font-semibold text-blue-700 mt-4">
              → We provide: Complete transparency at your fingertips via QR code
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

