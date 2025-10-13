import { Mail, MessageCircle, Github, Linkedin } from 'lucide-react'
import { Button } from '../components/common/Button'

export const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help you achieve DPP compliance
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 transition-all">
              <Mail className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                General inquiries and support
              </p>
              <a href="mailto:hello@opendpp.org" className="text-blue-600 font-medium hover:underline">
                hello@opendpp.org
              </a>
            </div>

            {/* Community */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 transition-all">
              <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 mb-4">
                Join our community forum
              </p>
              <Button variant="outline" href="https://github.com/opendpp/discussions">
                Join Discussion
              </Button>
            </div>

            {/* GitHub */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 transition-all">
              <Github className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Open Source</h3>
              <p className="text-gray-600 mb-4">
                Contribute to the project
              </p>
              <Button variant="outline" href="https://github.com/opendpp">
                View on GitHub
              </Button>
            </div>

            {/* Sales */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 transition-all">
              <Linkedin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600 mb-4">
                Become a service provider
              </p>
              <a href="mailto:partners@opendpp.org" className="text-blue-600 font-medium hover:underline">
                partners@opendpp.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Take our free assessment or start using the platform today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/get-started">
              Start Free Assessment
            </Button>
            <Button size="lg" variant="outline" href="https://humanmachinebe.vercel.app">
              Try Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

