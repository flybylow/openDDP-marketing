import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '../components/common/Button'
import { Alert } from '../components/common/Alert'

export const GetStarted = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Start Your DPP Compliance Journey
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Take our free 5-minute assessment to understand your requirements and timeline
            </p>

            {/* No Credit Card Message */}
            <Alert variant="success" className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">30-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Cancel anytime</span>
                </div>
              </div>
            </Alert>

            <Button size="lg" icon={ArrowRight} href="#assessment">
              Start Free Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Assessment Section (Coming Soon) */}
      <section id="assessment" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Assessment Form Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              We're building an intelligent assessment tool that will analyze your specific needs and provide a customized compliance roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="/contact">
                Contact Us Directly
              </Button>
              <Button variant="outline" href="/why-ddp">
                Learn More About DPP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600">
              Your journey to DPP compliance in simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Assessment</h3>
              <p className="text-gray-600">
                Tell us about your company, products, and industry. We'll analyze your specific compliance requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Custom Plan</h3>
              <p className="text-gray-600">
                Receive a personalized implementation roadmap with timeline, costs, and resource requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Implementation</h3>
              <p className="text-gray-600">
                Start your free trial, integrate with your systems, and achieve compliance in 2-4 weeks.
              </p>
            </div>
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
            Join 50+ manufacturers already using Open DPP
          </p>
          <Button variant="secondary" size="lg" href="/contact">
            Contact Our Team
          </Button>
          <p className="mt-4 text-sm text-blue-100">
            Or email us directly at: hello@opendpp.org
          </p>
        </div>
      </section>
    </div>
  )
}

