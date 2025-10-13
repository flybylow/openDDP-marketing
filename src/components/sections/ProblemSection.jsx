import { Clock, FileQuestion, DollarSign, HelpCircle } from 'lucide-react'
import { Card } from '../common/Card'

export const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Tight Deadlines',
      description: 'Battery regulation kicks in Feb 2027. Textiles July 2027. No time to waste.'
    },
    {
      icon: FileQuestion,
      title: 'Complex Requirements',
      description: 'Hundreds of data points, supply chain tracking, carbon calculations - overwhelming.'
    },
    {
      icon: DollarSign,
      title: 'Enterprise Costs',
      description: 'Traditional DPP solutions cost €500K+. Out of reach for most manufacturers.'
    },
    {
      icon: HelpCircle,
      title: 'No Clear Path',
      description: 'Confusing regulations, no clear implementation roadmap, expensive consultants.'
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
          {problems.map((problem, index) => (
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
      </div>
    </section>
  )
}

