import { CheckCircle, DollarSign, Zap, Users, ArrowRight } from 'lucide-react'
import { Button } from '../../components/common/Button'
import { Card } from '../../components/common/Card'

export const SMEs = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              DPP for Small & Medium Enterprises
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Affordable compliance without the complexity
            </p>
            <Button size="lg" icon={ArrowRight} href="/get-started">
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Built for SMEs
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card icon={DollarSign} title="Budget-Friendly" hover>
              <p className="text-sm">Start free, pay as you grow</p>
            </Card>
            <Card icon={Zap} title="Quick Setup" hover>
              <p className="text-sm">2-4 weeks to compliance</p>
            </Card>
            <Card icon={Users} title="No IT Team Needed" hover>
              <p className="text-sm">Simple, guided process</p>
            </Card>
            <Card icon={CheckCircle} title="Full Compliance" hover>
              <p className="text-sm">Meet all EU requirements</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

