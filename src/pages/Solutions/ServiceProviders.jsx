import { Briefcase, Users, Code, TrendingUp, ArrowRight } from 'lucide-react'
import { Button } from '../../components/common/Button'
import { Card } from '../../components/common/Card'

export const ServiceProviders = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Partner with Open DDP
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Offer DPP services to your clients with our white-label solution
            </p>
            <Button size="lg" icon={ArrowRight} href="/contact">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Partner Benefits
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card icon={Code} title="White-Label" hover>
              <p className="text-sm">Brand as your own service</p>
            </Card>
            <Card icon={Users} title="Multi-Tenant" hover>
              <p className="text-sm">Manage multiple clients</p>
            </Card>
            <Card icon={TrendingUp} title="Revenue Share" hover>
              <p className="text-sm">Earn from client success</p>
            </Card>
            <Card icon={Briefcase} title="Full Support" hover>
              <p className="text-sm">Technical & sales support</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

