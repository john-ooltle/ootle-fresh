export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <img src="/ootle-logo.png" alt="Ootle logo" className="h-10 mb-4" />
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-white to-blue-50">
        <h1 className="text-5xl font-extrabold leading-tight max-w-3xl">
          Build smarter, launch faster with <span className="text-blue-600">Ootle</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          The AI-powered platform for founders and teams to turn ideas into scalable products.
        </p>
        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Why Ootle?</h2>
          <p className="mt-2 text-gray-600">We make building and scaling your startup easier than ever.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI-Driven Insights</h3>
            <p className="text-gray-600">Surface the most impactful tasks and automate the rest.</p>
          </div>
          <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Modular Components</h3>
            <p className="text-gray-600">Choose from best-practice blocks and launch fast.</p>
          </div>
          <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
            <p className="text-gray-600">Built on Next.js and Vercel for performance at scale.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">How it works</h2>
          <p className="mt-2 text-gray-600">From idea to product in days, not months.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <span className="text-blue-600 text-lg font-bold">1.</span>
              <h3 className="font-semibold mt-2">Plan</h3>
              <p className="text-gray-600">Define your value prop, users, and workflow in minutes.</p>
            </div>
            <div>
              <span className="text-blue-600 text-lg font-bold">2.</span>
              <h3 className="font-semibold mt-2">Build</h3>
              <p className="text-gray-600">Use Ootle's component library and AI-generated templates.</p>
            </div>
            <div>
              <span className="text-blue-600 text-lg font-bold">3.</span>
              <h3 className="font-semibold mt-2">Launch</h3>
              <p className="text-gray-600">Push live with one click and scale confidently.</p>
            </div>
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