export default function MobilePromo() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Yetty in your pocket</h2>
            <p className="mt-4 text-gray-600">Create posts, track performance, and manage your calendar on the go. Perfect for busy teams and solo creators.</p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-black text-white px-4 py-2 text-sm">App Store</a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-black text-white px-4 py-2 text-sm">Google Play</a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[9/16] rounded-[2rem] bg-gradient-to-br from-purple-100 to-blue-100 ring-1 ring-purple-200/50 shadow-inner mx-auto max-w-xs flex items-center justify-center text-gray-500">
              <span className="text-sm">Mobile app preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
