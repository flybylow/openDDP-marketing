import { Target, Heart, Users, Github } from 'lucide-react'
import { Button } from '../components/common/Button'

export const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Open DDP
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Making Digital Product Passports accessible to every manufacturer
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                Democratize DPP compliance through open-source technology
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Transparency, accessibility, and community-driven innovation
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Community</h3>
              <p className="text-gray-600">
                500+ manufacturers, developers, and sustainability experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Built Open DDP</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              When EU ESPR regulations were announced, we saw thousands of manufacturers facing 
              impossible choices: pay €500K+ for proprietary solutions or risk non-compliance.
            </p>
            <p className="mb-4">
              We believed there had to be a better way. Open DDP was born from the conviction that 
              compliance shouldn't be a luxury only large corporations can afford.
            </p>
            <p>
              Today, we're helping manufacturers of all sizes achieve compliance through open-source 
              technology, transparent pricing, and a supportive community.
            </p>
          </div>
          <div className="mt-8">
            <Button icon={Github} href="https://github.com/opendpp">
              View on GitHub
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

