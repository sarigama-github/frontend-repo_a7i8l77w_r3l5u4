export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/10 backdrop-blur-md p-10 ring-1 ring-white/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Supercharge Your Social Media Today</h2>
              <p className="mt-3 text-white/80">Join thousands of creators and brands saving hours each week. No credit card required for the free trial.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <a href="#start" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-purple-700 font-semibold shadow hover:bg-white/90 transition">Start your free trial</a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-6 py-3 text-white hover:bg-white/10 transition">Schedule a demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
