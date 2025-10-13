import { BookOpen, FileText, Download, Video, Code, Users, Lightbulb, ArrowRight } from 'lucide-react'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { useState } from 'react'

export const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'guides', name: 'Guides' },
    { id: 'templates', name: 'Templates' },
    { id: 'documentation', name: 'Documentation' },
    { id: 'case-studies', name: 'Case Studies' }
  ]

  const resources = [
    // Guides
    {
      category: 'guides',
      icon: BookOpen,
      title: 'Battery DPP Implementation Guide',
      description: 'Complete step-by-step guide for implementing DPP for battery products. Includes regulatory requirements and best practices.',
      type: 'PDF Guide',
      size: '2.5 MB',
      pages: '45 pages',
      downloadUrl: '#'
    },
    {
      category: 'guides',
      icon: BookOpen,
      title: 'Textile Compliance Checklist',
      description: 'Comprehensive checklist for textile manufacturers. Covers all EU ESPR requirements for apparel and fabrics.',
      type: 'PDF Checklist',
      size: '1.2 MB',
      pages: '12 pages',
      downloadUrl: '#'
    },
    {
      category: 'guides',
      icon: BookOpen,
      title: 'SME Quick Start Guide',
      description: 'Simplified guide for small and medium enterprises. Get started with DPP in less than 30 days.',
      type: 'PDF Guide',
      size: '1.8 MB',
      pages: '20 pages',
      downloadUrl: '#'
    },
    {
      category: 'guides',
      icon: Video,
      title: 'Video Tutorial: First DPP Setup',
      description: 'Watch our 15-minute walkthrough on creating your first Digital Product Passport from scratch.',
      type: 'Video',
      duration: '15 minutes',
      downloadUrl: '#'
    },

    // Templates
    {
      category: 'templates',
      icon: FileText,
      title: 'Product Data Collection Template',
      description: 'Excel template for gathering all required product information. Pre-formatted for easy import into Open DPP.',
      type: 'Excel Template',
      size: '250 KB',
      downloadUrl: '#'
    },
    {
      category: 'templates',
      icon: FileText,
      title: 'Supply Chain Mapping Template',
      description: 'Document your supply chain relationships and material flows. Essential for compliance reporting.',
      type: 'Excel Template',
      size: '180 KB',
      downloadUrl: '#'
    },
    {
      category: 'templates',
      icon: FileText,
      title: 'Carbon Footprint Calculator',
      description: 'Calculate product carbon footprints using industry-standard methodologies. Export-ready for DPP.',
      type: 'Excel Template',
      size: '320 KB',
      downloadUrl: '#'
    },
    {
      category: 'templates',
      icon: Code,
      title: 'API Integration Template',
      description: 'Sample code and API integration templates for Node.js, Python, and Java. Jump-start your development.',
      type: 'Code Templates',
      size: '1.1 MB',
      downloadUrl: '#'
    },

    // Documentation
    {
      category: 'documentation',
      icon: Code,
      title: 'API Reference Documentation',
      description: 'Complete API documentation with endpoints, parameters, examples, and best practices.',
      type: 'Online Docs',
      link: '/docs/api'
    },
    {
      category: 'documentation',
      icon: BookOpen,
      title: 'Developer Getting Started',
      description: 'Technical documentation for developers. Installation, configuration, and first integration.',
      type: 'Online Docs',
      link: '/docs/getting-started'
    },
    {
      category: 'documentation',
      icon: BookOpen,
      title: 'EU ESPR Regulation Summary',
      description: 'Simplified explanation of EU Ecodesign for Sustainable Products Regulation. Updated for 2025.',
      type: 'PDF Document',
      size: '3.2 MB',
      pages: '28 pages',
      downloadUrl: '#'
    },
    {
      category: 'documentation',
      icon: FileText,
      title: 'Industry-Specific Requirements',
      description: 'Detailed breakdown of requirements for batteries, textiles, electronics, and packaging.',
      type: 'PDF Document',
      size: '2.8 MB',
      pages: '56 pages',
      downloadUrl: '#'
    },

    // Case Studies
    {
      category: 'case-studies',
      icon: Lightbulb,
      title: 'GreenTech Manufacturing Success Story',
      description: 'How a 500-person electronics manufacturer achieved compliance in 3 weeks and saved €475K.',
      type: 'Case Study',
      size: '1.5 MB',
      pages: '8 pages',
      downloadUrl: '#'
    },
    {
      category: 'case-studies',
      icon: Lightbulb,
      title: 'Italian Textile Co: From Panic to Prepared',
      description: 'Small textile manufacturer implements DPP for 2,000+ products with limited IT resources.',
      type: 'Case Study',
      size: '1.2 MB',
      pages: '6 pages',
      downloadUrl: '#'
    },
    {
      category: 'case-studies',
      icon: Lightbulb,
      title: 'Nordic Battery Solutions: Enterprise Alternative',
      description: 'Large battery manufacturer chooses Open DPP over €500K enterprise solution.',
      type: 'Case Study',
      size: '1.8 MB',
      pages: '10 pages',
      downloadUrl: '#'
    }
  ]

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === activeCategory)

  const featuredResources = [
    {
      icon: BookOpen,
      title: 'DPP Starter Kit',
      description: 'Everything you need to begin your DPP journey',
      items: ['Implementation guide', 'Data templates', 'Checklist', 'Video tutorials'],
      buttonText: 'Download Kit',
      buttonLink: '#'
    },
    {
      icon: Code,
      title: 'Developer Resources',
      description: 'Technical documentation and code samples',
      items: ['API docs', 'SDK downloads', 'Integration guides', 'Sample code'],
      buttonText: 'View Docs',
      buttonLink: '/docs'
    },
    {
      icon: Users,
      title: 'Community & Support',
      description: 'Connect with other manufacturers and experts',
      items: ['Community forum', 'Slack channel', 'Monthly webinars', 'Expert consultations'],
      buttonText: 'Join Community',
      buttonLink: '#'
    }
  ]

  const webinars = [
    {
      title: 'Understanding EU ESPR Requirements',
      date: 'Nov 15, 2025',
      time: '2:00 PM CET',
      duration: '60 minutes',
      spots: '45 spots left'
    },
    {
      title: 'DPP for Textile Manufacturers',
      date: 'Nov 22, 2025',
      time: '3:00 PM CET',
      duration: '45 minutes',
      spots: '32 spots left'
    },
    {
      title: 'API Integration Workshop',
      date: 'Nov 29, 2025',
      time: '10:00 AM CET',
      duration: '90 minutes',
      spots: 'Technical session'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Resources & Documentation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Guides, templates, case studies, and documentation to help you achieve DPP compliance
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600">
              Start with these curated collections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border-2 border-blue-100">
                <resource.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" className="w-full" href={resource.buttonLink}>
                  {resource.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resource Library
            </h2>
            <p className="text-xl text-gray-600">
              Browse our complete collection of guides, templates, and documentation
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <resource.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-blue-600 font-medium mb-1">
                      {resource.type}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  {resource.size && <span>{resource.size}</span>}
                  {resource.pages && <span>{resource.pages}</span>}
                  {resource.duration && <span>{resource.duration}</span>}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  icon={resource.link ? ArrowRight : Download}
                  href={resource.link || resource.downloadUrl}
                  className="w-full"
                >
                  {resource.link ? 'View' : 'Download'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-600">
              Join our live sessions and learn from experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {webinar.date}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {webinar.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <span>🕐</span>
                    <span>{webinar.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⏱️</span>
                    <span>{webinar.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>👥</span>
                    <span className="text-green-600 font-medium">{webinar.spots}</span>
                  </div>
                </div>
                <Button variant="primary" size="sm" className="w-full" href="#register">
                  Register Free
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Join Our Community
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Connect with other manufacturers, developers, and compliance experts. 
                Share experiences, ask questions, and stay updated.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">Community Forum</div>
                    <div className="text-sm text-gray-600">Ask questions and share knowledge with 500+ members</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">Developer Slack</div>
                    <div className="text-sm text-gray-600">Real-time chat with developers and technical support</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">Monthly Workshops</div>
                    <div className="text-sm text-gray-600">Free training sessions on compliance and implementation</div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" href="#community">
                  Join Community
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Active Community Members</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Companies</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Developers</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help you navigate your DPP compliance journey
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
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
