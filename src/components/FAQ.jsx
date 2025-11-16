export default function FAQ() {
  const faqs = [
    { q: 'How does the token system work?', a: 'Each plan includes a monthly number of AI credits. Creating AI text, images or videos uses a small amount of credits. Unused credits roll over for 30 days on paid plans.' },
    { q: 'Which platforms are supported?', a: 'Instagram, TikTok, X (Twitter), LinkedIn, Facebook, YouTube, and Pinterest — with more added regularly.' },
    { q: 'Do I need technical knowledge?', a: 'Nope. If you can describe what you want, Yetty can create it. Everything is designed to be simple and friendly.' },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center">FAQs</h2>
        <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="list-none cursor-pointer select-none text-lg font-semibold text-gray-900 flex items-center justify-between">
                {f.q}
                <span className="ml-4 h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white inline-flex items-center justify-center">{/** icon */} <span className="-mt-0.5">+</span></span>
              </summary>
              <p className="mt-3 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
