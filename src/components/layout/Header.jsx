import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '../common/Button'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navigation = [
    { name: 'Why DDP', href: '/why-ddp' },
    { name: 'For Consumers', href: '/consumer' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Features', href: '/features' },
    { name: 'Industries', href: '/industries' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
  ]
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Open DDP</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" href="https://humanmachinebe.vercel.app" size="sm">
              View Demo
            </Button>
            <Button variant="ghost" href="https://humanmachinebe.vercel.app/admin" size="sm">
              Admin
            </Button>
            <Button href="/get-started" size="sm">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4 space-y-2">
              <Button variant="outline" href="https://humanmachinebe.vercel.app" className="w-full">
                View Demo
              </Button>
              <Button variant="ghost" href="https://humanmachinebe.vercel.app/admin" className="w-full">
                Admin
              </Button>
              <Button href="/get-started" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

