export default function Testimonials() {
  const quotes = [
    { name: 'Alex R.', role: 'Founder, GlowSkin', text: 'We grew 3x faster after moving to Yetty. The AI content is shockingly good.' },
    { name: 'Maya T.', role: 'Creator', text: 'Planning a month of posts now takes 15 minutes. I finally post consistently.' },
    { name: 'Jordan P.', role: 'CMO, Orbit', text: 'Our engagement went up 78% in 30 days. Agents keep us active 24/7.' },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Loved by creators and brands</h2>
          <p className="mt-3 text-gray-600">Real results from real people using Yetty every day.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-gray-700">“{q.text}”</p>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-900">{q.name}</p>
                <p className="text-sm text-gray-500">{q.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
