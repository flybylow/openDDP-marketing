import { Factory, TrendingUp, Shield, Users, Zap, DollarSign, CheckCircle, ArrowRight } from 'lucide-react'
import { Card } from '../../components/common/Card'
import { Button } from '../../components/common/Button'

export const Manufacturers = () => {
  const challenges = [
    {
      icon: Factory,
      title: 'Complex Supply Chains',
      description: 'Tracking materials and components across multiple suppliers and countries'
    },
    {
      icon: TrendingUp,
      title: 'High Product Volumes',
      description: 'Managing DPP data for thousands or millions of product units'
    },
    {
      icon: Shield,
      title: 'Regulatory Uncertainty',
      description: 'Navigating evolving EU ESPR requirements and industry-specific rules'
    },
    {
      icon: DollarSign,
      title: 'Budget Constraints',
      description: 'Traditional DPP solutions cost €500K+, out of reach for most manufacturers'
    }
  ]

  const solutions = [
    {
      icon: Zap,
      title: 'Automated Data Collection',
      description: 'Integrate with your ERP, PLM, and supply chain systems. Automatically pull product data without manual entry.'
    },
    {
      icon: Factory,
      title: 'Bulk DPP Generation',
      description: 'Create thousands of DPPs at once. Import via CSV, API, or direct database connection.'
    },
    {
      icon: Users,
      title: 'Supply Chain Integration',
      description: 'Connect with suppliers to automatically gather material and component data.'
    },
    {
      icon: Shield,
      title: 'Compliance Templates',
      description: 'Pre-built templates for batteries, textiles, electronics. Industry-specific requirements included.'
    }
  ]

  const implementation = [
    {
      week: 'Week 1',
      title: 'Discovery & Setup',
      tasks: [
        'Initial consultation and requirements gathering',
        'System architecture review',
        'API credentials setup',
        'Team onboarding'
      ]
    },
    {
      week: 'Week 2',
      title: 'Integration & Data',
      tasks: [
        'ERP/PLM system integration',
        'Data mapping and validation',
        'Supplier portal setup',
        'Initial DPP creation'
      ]
    },
    {
      week: 'Week 3',
      title: 'Testing & Training',
      tasks: [
        'QR code generation and testing',
        'User acceptance testing',
        'Team training sessions',
        'Documentation review'
      ]
    },
    {
      week: 'Week 4',
      title: 'Launch & Support',
      tasks: [
        'Production deployment',
        'Bulk DPP generation',
        'Monitoring setup',
        'Ongoing support activation'
      ]
    }
  ]

  const caseStudy = {
    company: 'GreenTech Manufacturing',
    industry: 'Electronics',
    size: '500+ employees',
    challenge: 'Needed to make 15,000 electronic products compliant by Jan 2028. Traditional solutions quoted €500K+.',
    solution: 'Implemented Open DDP in 3 weeks. Integrated with existing SAP system. Created automated workflow.',
    results: [
      'Compliant in 3 weeks vs 6+ months',
      '€475K saved vs traditional solutions',
      '15,000+ products with DPPs',
      'Automated 95% of data collection'
    ]
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  For Manufacturers
                </span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                DPP Solutions Built for Manufacturing Operations
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Handle complex supply chains, high volumes, and strict compliance requirements 
                with affordable, scalable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" icon={ArrowRight} href="/get-started">
                  Start Free Assessment
                </Button>
                <Button size="lg" variant="outline" href="/demo">
                  See Manufacturer Demo
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <Factory className="w-24 h-24 text-blue-600" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">2-4</div>
                  <div className="text-sm text-gray-600">Weeks to Deploy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">90%</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Challenges Manufacturers Face
            </h2>
            <p className="text-xl text-gray-600">
              We understand the unique obstacles in manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <Card 
                key={index}
                icon={challenge.icon}
                title={challenge.title}
                hover
              >
                <p className="text-sm">{challenge.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Manufacturer-Focused Solution
            </h2>
            <p className="text-xl text-gray-600">
              Purpose-built features for manufacturing operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              4-Week Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              Structured approach to get you compliant fast
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementation.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connector */}
                {index < implementation.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-blue-200 z-0" />
                )}
                
                <div className="relative bg-white border-2 border-blue-200 rounded-lg p-6">
                  <div className="absolute -top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {phase.week}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-4">
                    {phase.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {phase.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Success Story: {caseStudy.company}
            </h2>
            <div className="flex justify-center gap-4 text-sm text-blue-100">
              <span>{caseStudy.industry}</span>
              <span>•</span>
              <span>{caseStudy.size}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">The Challenge</h3>
              <p className="text-blue-100 mb-6">
                {caseStudy.challenge}
              </p>
              
              <h3 className="text-xl font-bold mb-4">The Solution</h3>
              <p className="text-blue-100">
                {caseStudy.solution}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">The Results</h3>
              <div className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-blue-100">{result}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="secondary" href="/get-started">
                  Get Your Custom Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Integrates with Your Existing Systems
            </h2>
            <p className="text-xl text-gray-600">
              Connect seamlessly to your ERP, PLM, and supply chain tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-3">ERP Systems</h3>
              <p className="text-sm text-gray-600 mb-4">Direct integration with major platforms</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div>SAP</div>
                <div>Oracle ERP</div>
                <div>Microsoft Dynamics</div>
                <div>NetSuite</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-3">PLM Systems</h3>
              <p className="text-sm text-gray-600 mb-4">Product lifecycle management</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div>Siemens Teamcenter</div>
                <div>PTC Windchill</div>
                <div>Dassault ENOVIA</div>
                <div>Arena PLM</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-3">Supply Chain</h3>
              <p className="text-sm text-gray-600 mb-4">Supplier and logistics platforms</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div>Custom APIs</div>
                <div>EDI Integration</div>
                <div>Supplier Portals</div>
                <div>Logistics Systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Compliance Process?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join manufacturers who've achieved compliance in weeks, not months
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/get-started">
              Start Free Assessment
            </Button>
            <Button size="lg" variant="outline" href="/contact">
              Talk to Our Team
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            No credit card required • Free consultation • Custom implementation plan
          </p>
        </div>
      </section>
    </div>
  )
}
