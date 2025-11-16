import { Brain, Share2, Bot } from 'lucide-react'

const cards = [
  {
    icon: Brain,
    title: 'Generate Professional Content in Seconds',
    desc: 'Text, images, and videos created by state-of-the-art AI models. From idea to post in a few clicks.',
  },
  {
    icon: Share2,
    title: 'One Dashboard, All Platforms',
    desc: 'Manage Instagram, TikTok, X, LinkedIn and more from a single, beautifully simple workspace.',
  },
  {
    icon: Bot,
    title: 'Social Media on Autopilot',
    desc: 'AI agents that engage with your audience while you focus on what matters most.',
  },
]

export default function ValueProps() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-purple-50/70 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Built to help you grow</h2>
          <p className="mt-3 text-gray-600">Everything you need to create consistently, show up everywhere, and learn what works.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/[0.06] group-hover:via-blue-500/[0.06] group-hover:to-purple-500/[0.06] transition" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-md">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
