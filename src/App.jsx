import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { WhyDDP } from './pages/WhyDDP'
import { Features } from './pages/Features'
import { Pricing } from './pages/Pricing'
import { Industries } from './pages/Industries'
import { Resources } from './pages/Resources'
import { GetStarted } from './pages/GetStarted'
import { Solutions } from './pages/Solutions'
import { Manufacturers } from './pages/Solutions/Manufacturers'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-ddp" element={<WhyDDP />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/manufacturers" element={<Manufacturers />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
