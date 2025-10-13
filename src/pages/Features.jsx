import { 
  QrCode, Database, Globe, Shield, Code, BarChart, 
  Zap, Cloud, Lock, RefreshCw, Webhook, FileJson 
} from 'lucide-react'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { useState } from 'react'

export const Features = () => {
  const [activeCategory, setActiveCategory] = useState('core')

  const categories = [
    { id: 'core', name: 'Core Features' },
    { id: 'automation', name: 'Automation' },
    { id: 'integrations', name: 'Integrations' },
    { id: 'compliance', name: 'Compliance' },
    { id: 'developer', name: 'Developer Tools' }
  ]

  const features = {
    core: [
      {
        icon: QrCode,
        title: 'QR Code Generation',
        description: 'Automatically generate unique QR codes for every product with customizable designs and branding options.'
      },
      {
        icon: Database,
        title: 'Product Data Management',
        description: 'Centralized database for all product information including materials, manufacturing details, and lifecycle data.'
      },
      {
        icon: Globe,
        title: 'Multi-language Support',
        description: 'Display product information in multiple languages to serve global markets and meet local requirements.'
      },
      {
        icon: Cloud,
        title: 'Cloud or Self-Hosted',
        description: 'Deploy on your own infrastructure or use our managed cloud service. Full flexibility and control.'
      }
    ],
    automation: [
      {
        icon: Zap,
        title: 'Automated Data Collection',
        description: 'Integrate with ERP, PLM, and supply chain systems to automatically gather product data without manual entry.'
      },
      {
        icon: RefreshCw,
        title: 'Bulk Operations',
        description: 'Create, update, or delete thousands of DPPs at once with CSV import/export and batch processing.'
      },
      {
        icon: BarChart,
        title: 'Analytics Dashboard',
        description: 'Track QR code scans, user engagement, geographic data, and compliance metrics in real-time.'
      },
      {
        icon: Webhook,
        title: 'Event Webhooks',
        description: 'Get real-time notifications when products are scanned, updated, or when compliance events occur.'
      }
    ],
    integrations: [
      {
        icon: Code,
        title: 'REST API',
        description: 'Complete RESTful API for integrating DPP functionality into your existing systems and workflows.'
      },
      {
        icon: FileJson,
        title: 'Data Import/Export',
        description: 'Support for multiple formats including JSON, CSV, XML. Easy migration from existing systems.'
      },
      {
        icon: Database,
        title: 'ERP Integration',
        description: 'Pre-built connectors for SAP, Oracle, Microsoft Dynamics, and other major ERP systems.'
      },
      {
        icon: Cloud,
        title: 'Cloud Platforms',
        description: 'Deploy on AWS, Azure, Google Cloud, or any cloud provider. Full containerization support.'
      }
    ],
    compliance: [
      {
        icon: Shield,
        title: 'EU ESPR Compliant',
        description: 'Built to meet all EU Ecodesign for Sustainable Products Regulation requirements out of the box.'
      },
      {
        icon: FileJson,
        title: 'Industry Templates',
        description: 'Pre-configured templates for batteries, textiles, electronics, and other regulated industries.'
      },
      {
        icon: Lock,
        title: 'Data Security & Privacy',
        description: 'GDPR compliant with encryption at rest and in transit. Role-based access control included.'
      },
      {
        icon: BarChart,
        title: 'Compliance Reporting',
        description: 'Automated reports for regulatory submissions. Export data in required formats for authorities.'
      }
    ],
    developer: [
      {
        icon: Code,
        title: 'Open Source',
        description: 'Full access to source code on GitHub. Customize and extend to fit your exact needs.'
      },
      {
        icon: FileJson,
        title: 'GraphQL API',
        description: 'Modern GraphQL API in addition to REST. Query exactly the data you need, nothing more.'
      },
      {
        icon: Webhook,
        title: 'SDKs & Libraries',
        description: 'Official SDKs for JavaScript, Python, Java, and more. Get started quickly with your preferred stack.'
      },
      {
        icon: Code,
        title: 'Comprehensive Docs',
        description: 'Detailed documentation, API references, code examples, and tutorials to get you up and running fast.'
      }
    ]
  }

  const technicalSpecs = [
    { label: 'API Response Time', value: '< 100ms' },
    { label: 'Uptime SLA', value: '99.9%' },
    { label: 'Data Centers', value: 'EU & Global' },
    { label: 'Encryption', value: 'AES-256' },
    { label: 'Supported Formats', value: 'JSON, XML, CSV' },
    { label: 'Concurrent Users', value: 'Unlimited' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for DPP Compliance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to create, manage, and deploy Digital Product Passports at scale
            </p>
            <Button size="lg" href="/get-started">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features[activeCategory].map((feature, index) => (
              <Card 
                key={index}
                icon={feature.icon}
                title={feature.title}
                hover
              >
                <p className="text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade performance and security
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">{spec.label}</p>
                <p className="text-2xl font-bold text-blue-600">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Integrations & Compatibility
            </h2>
            <p className="text-xl text-gray-600">
              Works with your existing tools and systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ERP Systems</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• SAP</li>
                <li>• Oracle ERP</li>
                <li>• Microsoft Dynamics</li>
                <li>• NetSuite</li>
                <li>• Custom ERP via API</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Platforms</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Amazon Web Services</li>
                <li>• Microsoft Azure</li>
                <li>• Google Cloud Platform</li>
                <li>• DigitalOcean</li>
                <li>• Self-hosted options</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Docker & Kubernetes</li>
                <li>• GitHub Actions</li>
                <li>• Jenkins / CI/CD</li>
                <li>• Postman / API Testing</li>
                <li>• Custom integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with our free tier and upgrade as you grow. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/get-started">
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href="/demo"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
