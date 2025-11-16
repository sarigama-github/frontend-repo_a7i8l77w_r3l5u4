export default function UGCShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Create Professional UGC in Minutes</h2>
            <p className="mt-4 text-gray-600">Turn a simple selfie and product photo into a polished video ad. Perfect lighting, captions, and music handled for you.</p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-purple-600" />
                <p className="text-gray-700">Product + Selfie → Studio-quality video</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <p className="text-gray-700">Auto captions and on-brand styles</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-indigo-600" />
                <p className="text-gray-700">Ready to post everywhere</p>
              </div>
            </div>
            <blockquote className="mt-8 border-l-4 border-purple-300 pl-4 text-gray-700 italic">“Yetty cut my content time from hours to minutes. My engagement doubled in a week.” — Jamie, Creator</blockquote>
          </div>
          <div>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 ring-1 ring-purple-200/50 shadow-inner flex items-center justify-center text-gray-500">
              <span className="text-sm">UGC workflow animation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
