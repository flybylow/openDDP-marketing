import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export const SocialProof = () => {
  const testimonials = [
    {
      quote: "We went from panic to prepared in 3 weeks. Open DDP saved us from a €500k enterprise solution.",
      author: "Sarah Chen",
      role: "COO",
      company: "GreenTech Manufacturing",
      industry: "Electronics",
      rating: 5
    },
    {
      quote: "As an SME, we thought DPP compliance was out of reach. Open DPP proved us wrong.",
      author: "Marco Rossi",
      role: "Operations Director",
      company: "Italian Textile Co",
      industry: "Textiles",
      rating: 5
    },
    {
      quote: "The open-source approach gave us the flexibility we needed. We're now compliant and profitable.",
      author: "Emma Wilson",
      role: "Sustainability Lead",
      company: "Nordic Battery Solutions",
      industry: "Batteries",
      rating: 5
    }
  ]

  const stats = [
    { value: '50+', label: 'Companies Using Open DDP' },
    { value: '100K+', label: 'Products Tracked' },
    { value: '2-4', label: 'Weeks to Compliance' },
    { value: '90%', label: 'Cost Reduction vs Enterprise' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Manufacturers Across Europe
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers say about their DPP journey
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 relative"
            >
              <Quote className="absolute top-4 right-4 text-blue-100" size={48} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
                <div className="text-xs text-blue-600 mt-1">{testimonial.industry}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-200 pt-12">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
              Trusted By Leading Companies
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="bg-gray-200 rounded-lg px-8 py-4 text-gray-500 font-bold">
              Company Logo
            </div>
            <div className="bg-gray-200 rounded-lg px-8 py-4 text-gray-500 font-bold">
              Company Logo
            </div>
            <div className="bg-gray-200 rounded-lg px-8 py-4 text-gray-500 font-bold">
              Company Logo
            </div>
            <div className="bg-gray-200 rounded-lg px-8 py-4 text-gray-500 font-bold">
              Company Logo
            </div>
          </div>
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-lg shadow-sm px-6 py-3 border border-gray-200">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-900 font-bold">4.8/5</span>
            <span className="text-gray-500">from 50+ companies</span>
          </div>
        </div>
      </div>
    </section>
  )
}

