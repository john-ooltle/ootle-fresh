/* eslint-disable react/no-unescaped-entities */

export const metadata = {
  title: "Ootle | Results-first growth for bootstrapped SaaS",
  description:
    "Fractional CMO leadership with hands-on execution for bootstrapped SaaS teams that need pipeline. Weekly shipping, clean measurement, no fluff.",
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
            <a href="#services" className="hover:text-gray-900">
              Services
            </a>
            <a href="#proof" className="hover:text-gray-900">
              Why Ootle
            </a>
            <a href="#process" className="hover:text-gray-900">
              How it works
            </a>
            <a href="#fit" className="hover:text-gray-900">
              Fit
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-black/5 md:inline-flex"
            >
              Email
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              See if we&apos;re a fit
            </a>
          </div>
        </div>
      </header>

      {/* Hero (1) */}
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
              Built for bootstrapped SaaS teams with paying customers
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Results-first growth for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                bootstrapped SaaS teams that need pipeline
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-gray-600">
              Fractional CMO judgement with hands-on execution. I help founders turn scattered
              marketing into predictable pipeline, without agencies, headcount, or fluff.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Talk through your pipeline
              </a>
              <a
                href="#services"
                className="inline-flex justify-center rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-white"
              >
                See what I do
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-gray-600">
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                Paid acquisition
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                Lifecycle and CRM
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                SEO and content
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                Analytics and attribution
              </span>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              Not a fit if you are pre-revenue, or want a traditional agency.
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
                    <div className="text-xs text-gray-500">Primary focus</div>
                    <div className="text-xs font-medium text-emerald-600">
                      Week-by-week momentum
                    </div>
                  </div>
                  <div className="mt-2 text-lg font-bold">High-intent acquisition + conversion</div>
                  <div className="mt-3 h-2 w-full rounded-full bg-gray-100">
                    <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="text-xs text-gray-500">Weekly ship cadence</div>
                    <div className="mt-2 text-2xl font-extrabold">1 sprint</div>
                    <div className="mt-1 text-xs text-gray-500">with clear outcomes</div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="text-xs text-gray-500">Measurement</div>
                    <div className="mt-2 text-2xl font-extrabold">Clean</div>
                    <div className="mt-1 text-xs text-gray-500">no vanity metrics</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="text-xs text-gray-500">What you get</div>
                  <ul className="mt-2 space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      A short list of highest-impact moves
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      Hands-on execution, minimal meetings
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      Tracking you can trust
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-3xl bg-gradient-to-br from-blue-600 to-rose-500 opacity-20 blur-2xl md:block" />
          </div>
        </div>
      </section>

      {/* Services (2) outcome-led */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight">What I do</h2>
          <p className="mt-3 text-gray-600">
            This is not a bundle of deliverables. It is senior growth ownership delivered weekly.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Pipeline acquisition",
              desc: "High-intent channels, offers, and landing pages that convert. Search, paid social, retargeting.",
              list: ["ICP and message clarity", "Campaign build and iteration", "Landing page conversion fixes"],
            },
            {
              title: "Activation and lifecycle",
              desc: "Onboarding, nurture, and winback linked to product behaviour and revenue.",
              list: ["Lifecycle mapping", "Email and CRM setup", "Retention and expansion levers"],
            },
            {
              title: "Compounding SEO",
              desc: "Keyword strategy and content that builds demand and leads over time, not blog vanity.",
              list: ["Topic clusters", "Content briefs and optimisation", "Technical SEO basics"],
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur"
            >
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {c.list.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Not for you (3) */}
      <section id="fit" className="bg-white/60 border-y border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Who this is for</h2>
              <p className="mt-3 text-gray-600">
                Bootstrapped SaaS teams with paying customers that want pipeline owned end-to-end.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {[
                  "Founder-led teams that need momentum without hiring a full growth team",
                  "You have traffic or leads, but conversion and pipeline are inconsistent",
                  "You want senior judgement and hands-on execution",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h3 className="text-base font-semibold">Not a fit</h3>
              <p className="mt-2 text-sm text-gray-600">
                This saves time by being direct.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {[
                  "Pre-revenue or idea-stage",
                  "You want a traditional agency, lots of meetings, or junior delivery",
                  "You are expecting overnight results without willingness to iterate",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-600" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ootle */}
      <section id="proof" className="bg-[#F7F8FF]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Why this works for lean teams
            </h2>
            <p className="mt-3 text-gray-600">
              You are not buying deliverables. You are buying speed, focus, and clean decision-making.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 p-6 border border-black/10">
              <h3 className="font-semibold">Outcome-led</h3>
              <p className="mt-2 text-sm text-gray-700">
                Work ties back to pipeline, activation, retention, or expansion.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-violet-600/10 to-rose-600/10 p-6 border border-black/10">
              <h3 className="font-semibold">Operator mindset</h3>
              <p className="mt-2 text-sm text-gray-700">
                Ship what moves numbers. Skip deck theatre.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-rose-600/10 to-blue-600/10 p-6 border border-black/10">
              <h3 className="font-semibold">Clean measurement</h3>
              <p className="mt-2 text-sm text-gray-700">
                Tracking simplified so you can make faster decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">How it works</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "Step 1",
              title: "Pipeline audit",
              desc: "Positioning, funnel, channels, and tracking. Fast, direct, no wasted weeks.",
            },
            {
              step: "Step 2",
              title: "Prioritised plan",
              desc: "A short list ranked by impact, effort, and confidence. No long roadmap fiction.",
            },
            {
              step: "Step 3",
              title: "Weekly shipping",
              desc: "Execute, measure, iterate. Clear updates and visible momentum every week.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur"
            >
              <div className="text-xs text-gray-500">{s.step}</div>
              <div className="mt-2 font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact (CTA block) */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-blue-600 to-violet-600 p-8 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Want pipeline in weeks, not quarters?
              </h2>
              <p className="mt-3 text-white/90">
                Book a short call. If there is not a clear path to impact, I will tell you quickly.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href="#"
                className="inline-flex justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white/90"
              >
                See if we&apos;re a fit
              </a>
              <a
                href="mailto:hello@ootle.io"
                className="inline-flex justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Email hello@ootle.io
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
            <a href="#services" className="hover:text-gray-900">
              Services
            </a>
            <a href="#process" className="hover:text-gray-900">
              How it works
            </a>
            <a href="#contact" className="hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}