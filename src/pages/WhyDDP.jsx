import { FileText, Euro, Building2, Calendar, AlertTriangle, CheckCircle } from 'lucide-react'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'

export const WhyDDP = () => {
  const regulations = [
    { industry: 'Batteries', deadline: 'February 18, 2027', urgency: 'high' },
    { industry: 'Textiles & Apparel', deadline: 'July 1, 2027', urgency: 'high' },
    { industry: 'Electronics', deadline: 'January 1, 2028', urgency: 'medium' },
    { industry: 'Packaging', deadline: 'June 1, 2028', urgency: 'medium' }
  ]

  const requirements = [
    'Product composition and materials',
    'Manufacturing location and date',
    'Carbon footprint and environmental impact',
    'Repair and maintenance information',
    'Recycling and end-of-life instructions',
    'Supply chain transparency',
    'Durability and expected lifespan',
    'Spare parts availability'
  ]

  const nonComplianceCosts = [
    {
      icon: Euro,
      title: 'Fines up to 4% of Annual Turnover',
      description: 'EU can impose substantial fines for non-compliance with ESPR regulations'
    },
    {
      icon: Building2,
      title: 'Market Access Blocked',
      description: 'Cannot sell products in EU market without proper DPP compliance'
    },
    {
      icon: AlertTriangle,
      title: 'Reputational Damage',
      description: 'Non-compliance signals poor environmental and governance practices'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Why Digital Product Passports?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Understanding the EU's ESPR regulation and why every manufacturer needs to act now
            </p>
            <Button size="lg" href="/get-started">
              Check Your Compliance Status
            </Button>
          </div>
        </div>
      </section>

      {/* What is DPP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What is a Digital Product Passport?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Digital Product Passport (DPP) is a comprehensive digital record containing detailed 
                information about a product's entire lifecycle - from raw materials to end-of-life disposal.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Think of it as a "nutrition label" for products, but digital and much more detailed. 
                It's accessible via QR code or NFC tag and provides complete transparency to consumers, 
                regulators, and recyclers.
              </p>
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Enables circular economy by making products repairable and recyclable</p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Increases transparency in supply chains</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Empowers consumers to make informed decisions</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">DPP Contains:</h3>
                <ul className="space-y-2">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EU ESPR Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              EU ESPR Timeline & Deadlines
            </h2>
            <p className="text-xl text-gray-600">
              Different industries have different compliance deadlines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {regulations.map((reg, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg border-2 ${
                  reg.urgency === 'high' 
                    ? 'border-red-300 bg-red-50' 
                    : 'border-yellow-300 bg-yellow-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{reg.industry}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    reg.urgency === 'high' 
                      ? 'bg-red-200 text-red-800' 
                      : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {reg.urgency === 'high' ? 'High Urgency' : 'Medium Urgency'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar size={18} />
                  <span className="font-medium">{reg.deadline}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-blue-900">
              <strong>Important:</strong> Implementation takes 2-4 weeks minimum. 
              Don't wait until the last minute - start your compliance journey today.
            </p>
          </div>
        </div>
      </section>

      {/* Cost of Non-Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Cost of Non-Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Ignoring DPP requirements isn't an option
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {nonComplianceCosts.map((cost, index) => (
              <Card 
                key={index}
                icon={cost.icon}
                title={cost.title}
              >
                <p className="text-sm">{cost.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Real Example: A €10M company could face €400K in fines
            </h3>
            <p className="text-gray-700 mb-6">
              Plus the inability to sell in the EU market - your largest market opportunity
            </p>
            <Button variant="primary" size="lg" href="/get-started">
              Start Your Compliance Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Why Act Now */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why You Need to Act Now
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">⏰ Lead Time Required</h3>
              <p className="text-gray-300">
                Even with our fast implementation, you need 2-4 weeks. Plus time for data collection, 
                testing, and rollout to your product lines.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">📊 Data Collection Takes Time</h3>
              <p className="text-gray-300">
                Gathering supply chain data, carbon calculations, and material compositions 
                can't be rushed. Start early to ensure accuracy.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🎯 Competitive Advantage</h3>
              <p className="text-gray-300">
                Early adopters are using DPP as a marketing tool. Show customers you're ahead 
                of regulations and care about sustainability.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">💰 Avoid Rush Premiums</h3>
              <p className="text-gray-300">
                Last-minute implementations are expensive. Our pricing stays the same, but 
                you'll have more time to optimize and save on rushed data collection.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" href="/get-started">
              Take Free 5-Minute Assessment
            </Button>
            <p className="mt-4 text-gray-400">
              See exactly where you stand and what you need to do
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
