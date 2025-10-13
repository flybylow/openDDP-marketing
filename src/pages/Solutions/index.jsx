import { Factory, Users, Briefcase, Code, Cloud, Shield, Zap, ArrowRight } from 'lucide-react'
import { Card } from '../../components/common/Card'
import { Button } from '../../components/common/Button'
import { Link } from 'react-router-dom'

export const Solutions = () => {
  const services = [
    {
      icon: Factory,
      title: 'DPP Creation & Management',
      description: 'Complete platform for creating, managing, and deploying Digital Product Passports at scale',
      features: [
        'Bulk DPP generation',
        'QR code creation',
        'Product data management',
        'Multi-language support'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & Self-Hosted Deployment',
      description: 'Flexible deployment options to match your infrastructure and security requirements',
      features: [
        'Managed cloud service',
        'Self-hosted on your servers',
        'Hybrid deployment',
        'EU data residency'
      ]
    },
    {
      icon: Code,
      title: 'API & Integration Services',
      description: 'Connect Open DDP to your existing ERP, PLM, and supply chain systems',
      features: [
        'REST & GraphQL APIs',
        'ERP integrations (SAP, Oracle, etc.)',
        'Custom connectors',
        'Webhook support'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance & Consulting',
      description: 'Expert guidance to ensure you meet all EU ESPR requirements for your industry',
      features: [
        'Compliance assessment',
        'Industry-specific templates',
        'Regulatory updates',
        'Documentation support'
      ]
    },
    {
      icon: Zap,
      title: 'Implementation & Training',
      description: 'Guided onboarding and training to get your team up to speed quickly',
      features: [
        '2-4 week implementation',
        'Team training sessions',
        'Best practices guidance',
        'Ongoing technical support'
      ]
    },
    {
      icon: Users,
      title: 'Managed Services',
      description: 'Let our team handle the technical details while you focus on your business',
      features: [
        'Data migration',
        'System monitoring',
        'Updates & maintenance',
        'Dedicated support team'
      ]
    }
  ]

  const customerTypes = [
    {
      icon: Factory,
      title: 'Manufacturers',
      description: 'Large-scale production, complex supply chains, multiple product lines',
      link: '/solutions/manufacturers',
      highlights: ['Bulk operations', 'ERP integration', 'Supply chain tracking']
    },
    {
      icon: Users,
      title: 'SMEs',
      description: 'Small and medium enterprises needing affordable compliance solutions',
      link: '/solutions/smes',
      highlights: ['Quick setup', 'Budget-friendly', 'Easy to use']
    },
    {
      icon: Briefcase,
      title: 'Service Providers',
      description: 'Consultancies and agencies offering DPP services to clients',
      link: '/solutions/service-providers',
      highlights: ['White-label', 'Multi-tenant', 'Revenue sharing']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Complete DPP Solutions for Every Need
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From software to consulting, we provide everything you need to achieve 
              EU ESPR compliance and build sustainable product transparency
            </p>
            <Button size="lg" icon={ArrowRight} href="/get-started">
              Find Your Solution
            </Button>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Provide
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end services for Digital Product Passport implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-600 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Customer Type */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solutions by Customer Type
            </h2>
            <p className="text-xl text-gray-600">
              Tailored approaches for different business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerTypes.map((type, index) => (
              <Link key={index} to={type.link}>
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-600 h-full">
                  <type.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {type.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600 font-medium text-sm">
                    Learn more
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Open DDP Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">100% Open Source</h3>
                <p className="text-gray-600">No vendor lock-in. Full code transparency. Community-driven development.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-600">50+ companies successfully deployed. 100,000+ products tracked.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Implementation</h3>
                <p className="text-gray-600">2-4 week deployment vs 6+ months with other solutions.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">Compliance experts and technical team available throughout your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the level of support that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Self-Service</h3>
              <p className="text-gray-600 mb-6">
                Use our platform with documentation and community support
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  Full platform access
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  Documentation & guides
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  Community forum
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  Email support
                </li>
              </ul>
              <Button variant="outline" className="w-full" href="/get-started">
                Start Free
              </Button>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 shadow-lg border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guided Implementation</h3>
              <p className="text-gray-600 mb-6">
                Work with our team for smooth, fast deployment
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  All Self-Service features
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  Dedicated implementation specialist
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  Custom integration support
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  Team training sessions
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  Priority support
                </li>
              </ul>
              <Button className="w-full" href="/contact">
                Contact Sales
              </Button>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fully Managed</h3>
              <p className="text-gray-600 mb-6">
                We handle everything - you focus on compliance
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  All Guided features
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  Complete data migration
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  Ongoing system management
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  SLA guarantees
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  White-glove service
                </li>
              </ul>
              <Button variant="outline" className="w-full" href="/contact">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              Structured approach to get you compliant quickly
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Discovery',
                description: 'Assess your requirements, systems, and compliance timeline'
              },
              {
                step: '2',
                title: 'Setup',
                description: 'Configure platform, integrate systems, import data'
              },
              {
                step: '3',
                title: 'Training',
                description: 'Train your team, test workflows, validate compliance'
              },
              {
                step: '4',
                title: 'Launch',
                description: 'Go live, generate DPPs, ongoing support'
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-blue-200 z-0" />
                )}
                <div className="relative bg-white border-2 border-blue-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your specific needs
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
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

