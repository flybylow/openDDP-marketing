import { Link } from 'react-router-dom'
import { Github, Twitter, Linkedin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Open DDP</h3>
            <p className="text-sm">
              Open-source Digital Product Passport solution for EU ESPR compliance
            </p>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions/manufacturers" className="hover:text-white">Manufacturers</Link></li>
              <li><Link to="/solutions/smes" className="hover:text-white">SMEs</Link></li>
              <li><Link to="/solutions/service-providers" className="hover:text-white">Service Providers</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources" className="hover:text-white">Documentation</Link></li>
              <li><Link to="/resources#guides" className="hover:text-white">Guides</Link></li>
              <li><Link to="/resources#templates" className="hover:text-white">Templates</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><a href="https://github.com/opendpp" className="hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Open DDP. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/opendpp" className="hover:text-white"><Github size={20} /></a>
            <a href="https://twitter.com/opendpp" className="hover:text-white"><Twitter size={20} /></a>
            <a href="https://linkedin.com/company/opendpp" className="hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

