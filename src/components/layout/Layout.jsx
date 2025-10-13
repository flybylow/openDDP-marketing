import { Header } from './Header'
import { Footer } from './Footer'
import { NotificationBar } from '../common/NotificationBar'

export const Layout = ({ children }) => {
  const notifications = [
    "⏰ Battery manufacturers: Only 500 days until Feb 2027 deadline",
    "✓ Join 50+ companies already preparing for DPP compliance",
    "📊 Download our free 2025 EU ESPR Compliance Guide"
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <NotificationBar messages={notifications} interval={6000} />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

