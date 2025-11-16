export default function Pricing() {
  const tiers = [
    { name: 'Ignite', price: 'Free', features: ['Basic AI credits', 'Schedule 10 posts/mo', '1 user'] },
    { name: 'Spark', price: '$29/mo', features: ['More AI credits', 'Schedule 100 posts/mo', '3 users'] },
    { name: 'Blaze', price: '$79/mo', features: ['Advanced AI suite', 'Unlimited scheduling', 'Team workspace'] },
    { name: 'Inferno', price: '$199/mo', features: ['Enterprise features', 'Priority support', 'SSO & audit logs'] },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-purple-50/60 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Pick a plan that fits your goals. Change anytime.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <p className="mt-3 text-3xl font-bold text-gray-900">{t.price}</p>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#start" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white font-medium hover:opacity-90 transition">Choose plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
