import { useState } from 'react'
import { Images, CalendarDays, Bot, BarChart3, Smartphone } from 'lucide-react'

const tabs = [
  { key: 'studio', label: 'AI Studio', icon: Images, desc: 'Generate images and polish your text with one click.' },
  { key: 'planning', label: 'CandyCat Planning', icon: CalendarDays, desc: 'Auto-create a content calendar for weeks.' },
  { key: 'agents', label: 'Jellybean Agents', icon: Bot, desc: 'Automate posting and engagement safely.' },
  { key: 'analytics', label: 'Analytics', icon: BarChart3, desc: 'Real-time insights, trends, and suggestions.' },
  { key: 'mobile', label: 'Mobile', icon: Smartphone, desc: 'Create and track on the go.' },
]

export default function FeatureTabs() {
  const [active, setActive] = useState('studio')

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">See Yetty in action</h2>
          <p className="mt-3 text-gray-600">Click through to explore our most-loved features.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition ${active === key ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent' : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50'}`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-gray-500">
                <span className="text-sm">{tabs.find(t=>t.key===active)?.label} preview</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tabs.find(t=>t.key===active)?.label}</h3>
              <p className="text-gray-600 mb-4">{tabs.find(t=>t.key===active)?.desc}</p>
              <a href="#" className="text-purple-700 font-medium hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
