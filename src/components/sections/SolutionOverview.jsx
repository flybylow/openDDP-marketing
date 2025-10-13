import { CheckCircle, Github, Zap, Shield, Code, Users, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

export const SolutionOverview = () => {
  const benefits = [
    {
      icon: Github,
      title: 'Open Source & Transparent',
      description: 'No vendor lock-in. Full code access. Community-driven development.'
    },
    {
      icon: Zap,
      title: '2-4 Week Implementation',
      description: 'Guided onboarding gets you compliant fast, not in months.'
    },
    {
      icon: DollarSign,
      title: '90% Cost Reduction',
      description: 'Compared to traditional solutions. Free tier available. Pay as you grow.'
    },
    {
      icon: Shield,
      title: 'Full EU ESPR Compliance',
      description: 'Built to meet all EU regulations and industry-specific requirements.'
    },
    {
      icon: Code,
      title: 'Self-Hosted or Managed',
      description: 'Deploy on your infrastructure or use our managed service.'
    },
    {
      icon: Users,
      title: 'Active Community',
      description: 'Get support from developers and manufacturers worldwide.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open DDP: Built for Every Manufacturer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The first open-source DPP solution that delivers powerful capabilities at accessible prices
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-6 py-3">
            <CheckCircle className="text-green-600" size={20} />
            <span className="text-green-900 font-medium">
              Join 50+ companies already using Open DDP
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

