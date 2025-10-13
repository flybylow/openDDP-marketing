import { BookOpen, Download } from 'lucide-react'
import { Button } from '../../components/common/Button'

export const Guides = () => {
  const guides = [
    { title: 'Battery DPP Implementation Guide', pages: '45 pages', industry: 'Batteries' },
    { title: 'Textile Compliance Checklist', pages: '12 pages', industry: 'Textiles' },
    { title: 'Electronics DPP Guide', pages: '38 pages', industry: 'Electronics' },
    { title: 'SME Quick Start Guide', pages: '20 pages', industry: 'All' }
  ]

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Implementation Guides</h1>
          <p className="text-xl text-gray-600 mb-8">
            Step-by-step guides for your industry
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <BookOpen className="w-10 h-10 text-blue-600" />
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{guide.industry}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{guide.pages}</p>
                <Button variant="outline" size="sm" icon={Download} href="#" className="w-full">
                  Download Guide
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

