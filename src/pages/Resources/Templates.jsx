import { FileText, Download } from 'lucide-react'
import { Button } from '../../components/common/Button'

export const Templates = () => {
  const templates = [
    { title: 'Product Data Collection Template', format: 'Excel', size: '250 KB' },
    { title: 'Supply Chain Mapping Template', format: 'Excel', size: '180 KB' },
    { title: 'Carbon Footprint Calculator', format: 'Excel', size: '320 KB' },
    { title: 'Compliance Checklist Template', format: 'PDF', size: '500 KB' }
  ]

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Templates & Tools</h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready-to-use templates for data collection and compliance
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((template, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <FileText className="w-10 h-10 text-blue-600" />
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{template.format}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{template.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{template.size}</p>
                <Button variant="outline" size="sm" icon={Download} href="#" className="w-full">
                  Download Template
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

