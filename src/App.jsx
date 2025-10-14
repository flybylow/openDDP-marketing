import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { WhyDDP } from './pages/WhyDDP'
import { Features } from './pages/Features'
import { Pricing } from './pages/Pricing'
import { Industries } from './pages/Industries'
import { Resources } from './pages/Resources'
import { GetStarted } from './pages/GetStarted'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { ForConsumers } from './pages/ForConsumers'
import { Solutions } from './pages/Solutions'
import { Manufacturers } from './pages/Solutions/Manufacturers'
import { SMEs } from './pages/Solutions/SMEs'
import { ServiceProviders } from './pages/Solutions/ServiceProviders'
import { Documentation } from './pages/Resources/Documentation'
import { Guides } from './pages/Resources/Guides'
import { Templates } from './pages/Resources/Templates'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-ddp" element={<WhyDDP />} />
          <Route path="/for-consumers" element={<ForConsumers />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/guides" element={<Guides />} />
          <Route path="/resources/templates" element={<Templates />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/manufacturers" element={<Manufacturers />} />
          <Route path="/solutions/smes" element={<SMEs />} />
          <Route path="/solutions/service-providers" element={<ServiceProviders />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
