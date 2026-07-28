export default function StatsSection() {
  return (
    <section className="bg-dark text-white py-12 sm:py-16 border-y border-gray-800/80 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-2">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent-gold tracking-tight">
            150+
          </span>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">
            Happy Clients
          </p>
        </div>
        <div className="p-2">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent-gold tracking-tight">
            300+
          </span>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">
            Projects Completed
          </p>
        </div>
        <div className="p-2">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent-gold tracking-tight">
            98%
          </span>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">
            Client Satisfaction
          </p>
        </div>
        <div className="p-2">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent-gold tracking-tight">
            5+
          </span>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">
            Years Experience
          </p>
        </div>
      </div>
    </section>
  )
}
