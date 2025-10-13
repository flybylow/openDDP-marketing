import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Github, Star } from 'lucide-react'
import { Button } from '../common/Button'
import { Badge } from '../common/Badge'

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                ⚠️ EU Compliance Deadline: Feb 2027
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Product Passports.
              <span className="text-blue-600"> Simple. Affordable. Compliant.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Open-source DPP solution that gets you ESPR-compliant in weeks, not months. 
              Built for manufacturers and SMEs who need compliance without complexity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" icon={ArrowRight} href="/get-started">
                Start Free Assessment
              </Button>
              <Button size="lg" variant="outline" href="https://demo.opendpp.org">
                View Live Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                Open source
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                EU ESPR compliant
              </div>
            </div>

            {/* Open Source Badges */}
            <div className="flex items-center gap-4 flex-wrap">
              <Badge variant="success">100% Open Source</Badge>
              <a 
                href="https://github.com/opendpp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Github size={18} />
                <span className="font-medium">Star on GitHub</span>
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                  <Star size={12} className="text-yellow-500" />
                  <span className="text-xs font-semibold">50+</span>
                </div>
              </a>
            </div>
          </motion.div>
          
          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-lg shadow-2xl p-8 border border-gray-200">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">[DPP Demo Preview]</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
            >
              <p className="text-sm text-gray-600">Setup Time</p>
              <p className="text-3xl font-bold text-blue-600">2-4 weeks</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
            >
              <p className="text-sm text-gray-600">vs Enterprise</p>
              <p className="text-3xl font-bold text-green-600">90% less</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

