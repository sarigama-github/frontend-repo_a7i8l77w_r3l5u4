import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import FeatureTabs from './components/FeatureTabs'
import UGCShowcase from './components/UGCShowcase'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import MobilePromo from './components/MobilePromo'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <FeatureTabs />
        <UGCShowcase />
        <Pricing />
        <Testimonials />
        <MobilePromo />
        <FAQ />
        <CTA />
      </main>
      <footer className="py-10 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Yetty, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="/test" className="hover:text-gray-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
