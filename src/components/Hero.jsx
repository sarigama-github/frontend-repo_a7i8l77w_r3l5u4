import Spline from '@splinetool/react-spline'
import { PlayCircle, Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white pointer-events-none" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-3 py-1 text-xs text-purple-700 mb-4">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              New: AI Agents that engage for you
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Revolutionize Your Social Media with AI-Powered Automation
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Create, schedule, and analyze content across all major platforms with one powerful tool.
              Save hours every week and grow faster with Yetty.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#start" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white shadow-lg shadow-purple-600/20 hover:opacity-90 transition">
                <Rocket className="h-5 w-5" />
                Start Free Trial
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-6 py-3 text-gray-800 hover:bg-white transition">
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i+10}`} alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-white" />
                ))}
              </div>
              <p>Trusted by 3,000+ creators and brands</p>
            </div>
          </div>
          <div className="relative h-[420px] lg:h-[560px] rounded-2xl overflow-hidden ring-1 ring-white/50 shadow-2xl"></div>
        </div>
      </div>
    </section>
  )
}
