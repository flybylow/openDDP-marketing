import { QrCode, Map, Heart, Globe, Leaf, Shield, Recycle, Sparkles } from 'lucide-react'
import { Button } from '../components/common/Button'
import { Card } from '../components/common/Card'

export const ForConsumers = () => {
  const infoCategories = [
    {
      icon: Globe,
      title: 'Origin Story',
      items: [
        'Farm/factory locations',
        'Working conditions',
        'Local impact'
      ],
      color: 'blue'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      items: [
        'Carbon footprint',
        'Water usage',
        'Renewable energy %'
      ],
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Certifications',
      items: [
        'Organic status',
        'Fair trade',
        'Safety testing'
      ],
      color: 'purple'
    },
    {
      icon: Recycle,
      title: 'End of Life',
      items: [
        'How to recycle',
        'Repair guides',
        'Take-back programs'
      ],
      color: 'orange'
    }
  ]

  const steps = [
    {
      icon: QrCode,
      title: '1. Scan QR Code',
      description: 'Use your phone camera or our app to scan the product\'s QR code',
      color: 'blue'
    },
    {
      icon: Map,
      title: '2. Explore Journey',
      description: 'See where materials came from, who made it, and how it traveled',
      color: 'green'
    },
    {
      icon: Heart,
      title: '3. Save & Share',
      description: 'Save favorites, follow brands, share discoveries with your community',
      color: 'purple'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-900">For Consumers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Know What You Buy.
              <span className="text-green-600"> Share What You Learn.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Scan any product to reveal its complete journey, then help others make better choices.
            </p>
          </div>

          {/* Demo Scanner Visual */}
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-200">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex flex-col items-center justify-center mb-4">
                <QrCode className="w-32 h-32 text-blue-600 mb-4" />
                <p className="text-sm text-gray-600 text-center">
                  Point your camera at any product's QR code
                </p>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-green-600 to-blue-600"
                href="https://humanmachinebe.vercel.app"
              >
                Try Live Demo →
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3">
                Works with your phone camera - no app needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to complete product transparency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-${step.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className={`w-10 h-10 text-${step.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                
                {/* Placeholder for demo image/gif */}
                <div className="mt-4 aspect-video bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                  <p className="text-sm text-gray-400">[Demo Visual]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information You Can Access */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Transparency at Your Fingertips
            </h2>
            <p className="text-xl text-gray-600">
              Every scan reveals the full story behind your products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-2 border-gray-200 hover:border-blue-600 transition-all">
                <category.icon className={`w-12 h-12 text-${category.color}-600 mb-4`} />
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Features Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Sustainable Shopping Companion
            </h2>
            <p className="text-xl text-gray-600">
              Save favorites, follow brands, and share discoveries with your community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* My Scans */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">My Scans</h3>
              <p className="text-gray-600 mb-4">
                History of all products you've scanned
              </p>
              <div className="text-sm text-gray-500">
                • Quick access to details
                <br />• Sort by date or brand
                <br />• Export your history
              </div>
            </div>

            {/* Favorites & Collections */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border-2 border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Favorites</h3>
              <p className="text-gray-600 mb-4">
                Create collections of products you love
              </p>
              <div className="text-sm text-gray-500">
                • Organize into lists
                <br />• Share with friends
                <br />• Get restock alerts
              </div>
            </div>

            {/* Following & Updates */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-6 border-2 border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Following</h3>
              <p className="text-gray-600 mb-4">
                Stay updated on brands you trust
              </p>
              <div className="text-sm text-gray-500">
                • New product alerts
                <br />• Sustainability updates
                <br />• Recall notifications
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Your Transparency Journey
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Join thousands making informed choices every day
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              href="https://humanmachinebe.vercel.app"
            >
              Try Web Scanner
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              href="#apps"
            >
              Get Mobile App (Soon)
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white opacity-90">
            <span>✓ Free forever for consumers</span>
            <span>✓ No ads, no tracking</span>
            <span>✓ Your data stays yours</span>
          </div>
        </div>
      </section>
    </div>
  )
}

