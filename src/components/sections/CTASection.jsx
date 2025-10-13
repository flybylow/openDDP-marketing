import { Button } from '../common/Button'
import { ArrowRight, BookOpen, Calendar } from 'lucide-react'

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Get DPP-Compliant?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join manufacturers across Europe who are achieving compliance without breaking the bank
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="secondary" 
              size="lg" 
              icon={ArrowRight}
              href="/get-started"
            >
              Take Free Assessment
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              icon={Calendar}
              href="https://humanmachinebe.vercel.app"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              View Demo
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              icon={BookOpen}
              href="/resources"
              className="text-white hover:bg-blue-500"
            >
              View Documentation
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              No commitment
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              No lengthy sales process
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

