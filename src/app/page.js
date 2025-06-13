/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header / Nav */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <img src="/ootle-logo.png" alt="Ootle logo" className="h-10" />
        <nav className="space-x-6 text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600">Product</a>
          <a href="#" className="hover:text-blue-600">Pricing</a>
          <a href="#" className="hover:text-blue-600">Docs</a>
          <a href="#" className="hover:text-blue-600">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-6 bg-white overflow-hidden">
        <img
          src="/hero-bg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Results-first marketing for startups and seed-stage teams
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            AI-informed strategy, expert execution.
          </p>
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
            Book a discovery call
          </button>
        </div>
      </section>
      {/* Why Ootle Section  */}
<section className="py-24 px-6 bg-[#FAF8FF]">
  <div className="text-center mb-16 max-w-3xl mx-auto">
    <h2 className="text-4xl font-extrabold mb-4">Why Ootle?</h2>
    <p className="text-gray-700 text-lg">
      We help early-stage teams{' '}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4d5ff8] to-[#ee6b60] font-semibold">
        go further, faster
      </span>{' '}
      — with clarity, speed, and execution built in.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div className="p-6 rounded-2xl text-white shadow-md hover:shadow-xl transition bg-gradient-to-br from-[#4d5ff8] to-[#6d7dfb]">
      <div className="text-3xl mb-4">🚀</div>
      <h3 className="text-xl font-semibold mb-2">Startup Specialist</h3>
      <p>
        We’ve worked with dozens of early-stage teams — we speak your language.
      </p>
    </div>

    <div className="p-6 rounded-2xl text-white shadow-md hover:shadow-xl transition bg-gradient-to-br from-[#ee6b60] to-[#f78f7e]">
      <div className="text-3xl mb-4">🧠</div>
      <h3 className="text-xl font-semibold mb-2">AI + Human Strategy</h3>
      <p>
        We blend the speed of AI with expert-led insight and positioning.
      </p>
    </div>

    <div className="p-6 rounded-2xl text-white shadow-md hover:shadow-xl transition bg-gradient-to-br from-[#7b5cf9] to-[#af7efc]">
      <div className="text-3xl mb-4">🛠️</div>
      <h3 className="text-xl font-semibold mb-2">Execution Included</h3>
      <p>
        From copy to funnels to automation — we build, not just advise.
      </p>
    </div>
  </div>
</section>
      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Launch your vision with Ootle today</h2>
        <p className="mt-2">Start building in minutes — no credit card required.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-100 transition">
          Get Started Free
        </button>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-100 text-gray-600 text-sm text-center">
        <p>© {new Date().getFullYear()} Ootle. All rights reserved.</p>
      </footer>
    </div>
  );
}