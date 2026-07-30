'use client'

export default function FooterNewsletter() {
  return (
    <div className="sm:col-span-2 lg:col-span-1">
      <h4 className="text-foreground font-bold mb-4 tracking-wide">
        Newsletter
      </h4>
      <p className="mb-3 leading-relaxed">
        Subscribe to get the latest news, tips and offers.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col space-y-2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-foreground focus:outline-none focus:border-accent-gold transition-colors"
        />
        <button
          type="submit"
          className="w-full bg-accent-gold hover:bg-gold-dark text-black font-extrabold py-2.5 rounded-lg transition-all active:scale-[0.98] uppercase cursor-pointer"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}
