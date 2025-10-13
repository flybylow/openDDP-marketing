import { ClipboardCheck, Settings, Rocket } from 'lucide-react'
import { Button } from '../common/Button'

export const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: ClipboardCheck,
      title: 'ASSESS',
      description: 'Take our 5-minute assessment to understand your requirements and compliance timeline',
      action: 'Input your requirements'
    },
    {
      number: '2',
      icon: Settings,
      title: 'IMPLEMENT',
      description: '2-4 week guided setup process with our technical team and documentation',
      action: 'Guided setup'
    },
    {
      number: '3',
      icon: Rocket,
      title: 'LAUNCH',
      description: 'Go live with your DPP system, start generating QR codes, and achieve compliance',
      action: 'Go live with DPP'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get compliant in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-blue-200 z-0" />
              )}
              
              {/* Step Content */}
              <div className="relative z-10 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-32 h-32 bg-white rounded-full border-4 border-blue-100 shadow-lg">
                  <step.icon className="w-12 h-12 text-blue-600" />
                </div>
                
                <div className="absolute top-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                
                <p className="text-sm text-blue-600 font-medium">
                  → {step.action}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" href="/get-started">
            Start Assessment
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Takes only 5 minutes • Get instant results
          </p>
        </div>
      </div>
    </section>
  )
}

