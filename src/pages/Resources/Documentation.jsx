import { Book, Code, FileText, ArrowRight } from 'lucide-react'
import { Card } from '../../components/common/Card'
import { Button } from '../../components/common/Button'

export const Documentation = () => {
  const docs = [
    { icon: Book, title: 'Getting Started', desc: 'Quick start guide for new users', link: '#' },
    { icon: Code, title: 'API Reference', desc: 'Complete API documentation', link: '#' },
    { icon: FileText, title: 'Integration Guide', desc: 'Connect to your systems', link: '#' },
    { icon: Book, title: 'Best Practices', desc: 'Tips for optimal DPP implementation', link: '#' }
  ]

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Documentation</h1>
          <p className="text-xl text-gray-600 mb-8">
            Technical guides and API references
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {docs.map((doc, index) => (
              <Card key={index} icon={doc.icon} title={doc.title} hover>
                <p className="text-sm mb-4">{doc.desc}</p>
                <Button variant="outline" size="sm" icon={ArrowRight} href={doc.link} className="w-full">
                  Read
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

