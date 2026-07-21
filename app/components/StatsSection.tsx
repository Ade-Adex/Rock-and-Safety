export default function StatsSection() {
  return (
    <section className="bg-dark text-white py-12 border-y border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <span className="text-3xl font-extrabold text-[#cca352]">150+</span>
          <p className="text-xs text-gray-400 mt-1">Happy Clients</p>
        </div>
        <div>
          <span className="text-3xl font-extrabold text-[#cca352]">300+</span>
          <p className="text-xs text-gray-400 mt-1">Projects Completed</p>
        </div>
        <div>
          <span className="text-3xl font-extrabold text-[#cca352]">98%</span>
          <p className="text-xs text-gray-400 mt-1">Client Satisfaction</p>
        </div>
        <div>
          <span className="text-3xl font-extrabold text-[#cca352]">5+</span>
          <p className="text-xs text-gray-400 mt-1">Years Experience</p>
        </div>
      </div>
    </section>
  )
}
