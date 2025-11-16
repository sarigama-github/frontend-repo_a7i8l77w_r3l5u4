import { Menu, Rocket, PlayCircle } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-sm" />
            <span className="font-semibold tracking-tight text-gray-900">Yetty</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#testimonials" className="hover:text-gray-900">Customers</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-50 transition">
              <PlayCircle className="h-4 w-4" />
              Watch demo
            </a>
            <a href="#start" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow hover:opacity-90 transition">
              <Rocket className="h-4 w-4" />
              Start free trial
            </a>
          </div>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 text-gray-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
