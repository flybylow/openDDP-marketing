import { Check, X } from 'lucide-react'
import { Button } from '../components/common/Button'

export const Pricing = () => {
  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for small manufacturers testing DPP',
      features: [
        { text: 'Up to 1,000 products', included: true },
        { text: 'QR code generation', included: true },
        { text: 'Basic product data', included: true },
        { text: 'Email support', included: true },
        { text: 'Community access', included: true },
        { text: 'API access', included: false },
        { text: 'Custom branding', included: false },
        { text: 'Priority support', included: false }
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Professional',
      price: 'Contact Us',
      description: 'For growing manufacturers with compliance needs',
      features: [
        { text: 'Up to 10,000 products', included: true },
        { text: 'All Starter features', included: true },
        { text: 'Full API access', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Analytics dashboard', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Bulk operations', included: true },
        { text: 'SLA guarantee', included: false }
      ],
      cta: 'Contact Sales',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large manufacturers with complex needs',
      features: [
        { text: 'Unlimited products', included: true },
        { text: 'All Professional features', included: true },
        { text: 'Dedicated support', included: true },
        { text: '99.9% SLA guarantee', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'On-premise deployment', included: true },
        { text: 'Training & onboarding', included: true },
        { text: 'Custom contracts', included: true }
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  const faqs = [
    {
      question: 'What counts as a "product"?',
      answer: 'Each unique product SKU counts as one product. If you have 5 different battery models, that\'s 5 products, regardless of how many units you manufacture.'
    },
    {
      question: 'Can I upgrade or downgrade anytime?',
      answer: 'Yes! You can change your plan at any time. Upgrades are immediate, and downgrades take effect at the end of your current billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, Amex), bank transfers, and can set up invoicing for annual plans.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Professional and Enterprise plans include a 14-day free trial. No credit card required to start.'
    },
    {
      question: 'What if I exceed my product limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can either upgrade your plan or purchase additional product capacity.'
    },
    {
      question: 'Do you offer discounts for non-profits?',
      answer: 'Yes! We offer 50% discounts for registered non-profit organizations and educational institutions. Contact us for details.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              No hidden fees. No enterprise sales calls. Start free and scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-lg border-2 p-8 ${
                  tier.popular
                    ? 'border-blue-600 shadow-xl scale-105'
                    : 'border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {tier.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? 'primary' : 'outline'}
                  className="w-full"
                  href={tier.name === 'Starter' ? '/get-started' : '/contact'}
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              All plans include: SSL certificates, automatic backups, 99.9% uptime, and EU data residency
            </p>
          </div>
        </div>
      </section>

      {/* Comparison to Alternatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compare to Alternatives
            </h2>
            <p className="text-xl text-gray-600">
              See how Open DDP stacks up against other options
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-6 text-gray-900 font-semibold">Solution</th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Cost</th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Time to Deploy</th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Maintenance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium text-gray-900">Building In-House</td>
                  <td className="text-center py-4 px-6 text-red-600 font-semibold">€100,000+</td>
                  <td className="text-center py-4 px-6 text-red-600">12+ months</td>
                  <td className="text-center py-4 px-6 text-red-600">Full dev team</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium text-gray-900">Enterprise Solutions</td>
                  <td className="text-center py-4 px-6 text-orange-600 font-semibold">€500K+ setup</td>
                  <td className="text-center py-4 px-6 text-orange-600">6+ months</td>
                  <td className="text-center py-4 px-6 text-orange-600">Vendor dependent</td>
                </tr>
                <tr className="bg-blue-50 border-b-2 border-blue-600">
                  <td className="py-4 px-6 font-bold text-blue-900">Open DDP</td>
                  <td className="text-center py-4 px-6 text-green-600 font-bold">Free to start</td>
                  <td className="text-center py-4 px-6 text-green-600 font-bold">2-4 weeks</td>
                  <td className="text-center py-4 px-6 text-green-600 font-bold">Managed or self-hosted</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              * Based on average mid-size manufacturer (5,000-10,000 products)
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compare All Features
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                    Starter
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                    Professional
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Products</td>
                  <td className="px-6 py-4 text-sm text-center">1,000</td>
                  <td className="px-6 py-4 text-sm text-center">10,000</td>
                  <td className="px-6 py-4 text-sm text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">QR Scans/month</td>
                  <td className="px-6 py-4 text-sm text-center">10,000</td>
                  <td className="px-6 py-4 text-sm text-center">100,000</td>
                  <td className="px-6 py-4 text-sm text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Team Members</td>
                  <td className="px-6 py-4 text-sm text-center">3</td>
                  <td className="px-6 py-4 text-sm text-center">10</td>
                  <td className="px-6 py-4 text-sm text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Support</td>
                  <td className="px-6 py-4 text-sm text-center">Email</td>
                  <td className="px-6 py-4 text-sm text-center">Priority Email</td>
                  <td className="px-6 py-4 text-sm text-center">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions?
            </p>
            <Button variant="outline" href="/contact">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Your DPP Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 50+ manufacturers who trust Open DPP for their compliance needs
          </p>
          <Button variant="secondary" size="lg" href="/get-started">
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  )
}
