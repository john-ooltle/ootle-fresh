/* eslint-disable react/no-unescaped-entities */

export const metadata = {
  title: "Ootle | Results-first marketing for startups",
  description:
    "Ootle is a results-first marketing partner for startups and seed-stage teams. Strategy, execution, and lead generation with a clean, modern stack.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F8FF] text-gray-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600" />
            <span className="text-sm font-semibold tracking-tight">Ootle</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#proof" className="hover:text-gray-900">Why Ootle</a>
            <a href="#process" className="hover:text-gray-900">How it works</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-black/5 md:inline-flex"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-24 top-20 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-rose-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Built for startups and seed-stage teams
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Results-first marketing for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                startups that need pipeline
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-gray-600">
              Ootle helps founders and lean teams plan and ship demand generation that converts.
              Positioning, acquisition, lifecycle, analytics, and execution, without the agency fluff.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Book a discovery call
              </a>
              <a
                href="#services"
                className="inline-flex justify-center rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-white"
              >
                See services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-gray-600">
              <span className="rounded-full bg-white/70 px-3 py-1 border border-black/10">Paid acquisition</span>
              <span className="rounded-full bg-white/70 px-3 py-1 border border-black/10">Lifecycle and CRM</span>
              <span className="rounded-full bg-white/70 px-3 py-1 border border-black/10">SEO and content</span>
              <span className="rounded-full bg-white/70 px-3 py-1 border border-black/10">Analytics and attribution</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Pipeline snapshot</div>
                <div className="text-xs text-gray-500">Example</div>
              </div>

              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">Primary channel</div>
                    <div className="text-xs font-medium text-emerald-600">Improving</div>
                  </div>
                  <div className="mt-2 text-lg font-bold">High-intent search</div>
                  <div className="mt-3 h-2 w-full rounded-full bg-gray-100">
                    <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="text-xs text-gray-500">Weekly leads</div>
                    <div className="mt-2 text-2xl font-extrabold">+18%</div>
                    <div className="mt-1 text-xs text-gray-500">with tighter ICP targeting</div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="text-xs text-gray-500">Conversion lift</div>
                    <div className="mt-2 text-2xl font-extrabold">+0.7pp</div>
                    <div className="mt-1 text-xs text-gray-500">from landing page rebuild</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="text-xs text-gray-500">What you get</div>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" /> A clear plan tied to revenue outcomes</li>
                    <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" /> Fast execution, minimal meetings</li>
                    <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" /> Clean measurement, no vanity metrics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-3xl bg-gradient-to-br from-blue-600 to-rose-500 opacity-20 blur-2xl md:block" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight">Services that drive pipeline</h2>
          <p className="mt-3 text-gray-600">
            Built for an agency model, but delivered like an internal growth team.
            Clear scope, fast cycles, and measurable outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Demand Gen and Paid",
              desc: "Search, social, and retargeting built around ICP, landing pages, and conversion."
            },
            {
              title: "Lifecycle and CRM",
              desc: "Onboarding, nurture, activation, and winback, tied to product usage and revenue."
            },
            {
              title: "SEO and Content",
              desc: "Keyword strategy, content briefs, on-page optimisation, and topic clusters that compound."
            },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              <div className="mt-5 inline-flex text-sm font-semibold text-blue-700">
                Learn more
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Ootle */}
      <section id="proof" className="bg-white/60 border-y border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Why Ootle helps teams go further, faster
            </h2>
            <p className="mt-3 text-gray-600">
              You are not buying deliverables. You are buying speed, focus, and clear decision-making.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 p-6 border border-black/10">
              <h3 className="font-semibold">Outcome-led</h3>
              <p className="mt-2 text-sm text-gray-700">
                Every sprint ties back to pipeline, activation, retention, or expansion.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-violet-600/10 to-rose-600/10 p-6 border border-black/10">
              <h3 className="font-semibold">Operator mindset</h3>
              <p className="mt-2 text-sm text-gray-700">
                The goal is shipping what moves numbers, not polishing decks.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-rose-600/10 to-blue-600/10 p-6 border border-black/10">
              <h3 className="font-semibold">Clean measurement</h3>
              <p className="mt-2 text-sm text-gray-700">
                Tracking is simplified so you can make faster, better calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">How it works</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="text-xs text-gray-500">Step 1</div>
            <div className="mt-2 font-semibold">Discovery and audit</div>
            <p className="mt-2 text-sm text-gray-600">
              Quick read on positioning, funnel, channels, and tracking. No wasted weeks.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="text-xs text-gray-500">Step 2</div>
            <div className="mt-2 font-semibold">Plan and prioritise</div>
            <p className="mt-2 text-sm text-gray-600">
              A short list of actions ranked by impact, effort, and confidence.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="text-xs text-gray-500">Step 3</div>
            <div className="mt-2 font-semibold">Ship weekly</div>
            <p className="mt-2 text-sm text-gray-600">
              Execute, measure, iterate. Weekly momentum with clear reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-blue-600 to-violet-600 p-8 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Want pipeline in weeks, not quarters?</h2>
              <p className="mt-3 text-white/90">
                Book a short call. If we cannot see a clear path to impact, we will tell you quickly.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href="#"
                className="inline-flex justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white/90"
              >
                Book a discovery call
              </a>
              <a
                href="#"
                className="inline-flex justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Ootle</div>
          <div className="flex gap-5">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#process" className="hover:text-gray-900">How it works</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}