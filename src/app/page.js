export const metadata = {
  title: "Ootle — Marketing leadership, built around your business",
  description: "Senior marketing leadership and AI-assisted marketing systems grounded in your business knowledge, commercial strategy and customers.",
};

const knowledge = [
  { number: "01", name: "Business truth", detail: "Products · customers · positioning", tone: "bg-[#EEEAF8]" },
  { number: "02", name: "Commercial context", detail: "Revenue · priorities · competitors", tone: "bg-[#E8E8FF]" },
  { number: "03", name: "Marketing intelligence", detail: "Channels · opportunities · evidence", tone: "bg-[#E6F0EC]" },
];

const outputs = ["SEO & content", "Campaigns", "Email & lifecycle", "Insights & reporting"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2EFF8] text-[#222034]">
      <header className="relative z-20 border-b border-[#28243D]/10 bg-[#F2EFF8]">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-5 px-6 py-6 md:px-10">
          <a href="/" className="text-[28px] font-black tracking-[-0.09em] leading-none" aria-label="Ootle home">ootle<span className="text-[#6955D5]">.</span></a>
          <nav className="hidden items-center gap-9 text-[13px] font-semibold tracking-wide md:flex">
            <a href="#thinking" className="hover:text-[#6955D5]">Our thinking</a>
            <a href="#services" className="hover:text-[#6955D5]">Services</a>
            <a href="#approach" className="hover:text-[#6955D5]">How it works</a>
          </nav>
          <a href="mailto:hello@ootle.io?subject=Let's%20talk%20marketing" className="rounded-full bg-[#262238] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#5745B8]">Let’s talk <span aria-hidden="true" className="ml-3">↗</span></a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="pointer-events-none absolute -right-48 -top-60 h-[600px] w-[600px] rounded-full border border-[#A59AD7]/30" />
        <div className="pointer-events-none absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full border border-[#A59AD7]/30" />
        <div className="relative mx-auto max-w-[1320px]">
          <div className="max-w-[990px]">
            <div className="mb-9 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#675B8E]"><span className="h-[1px] w-8 bg-[#7766B8]"/> Independent marketing consultancy</div>
            <h1 className="text-[clamp(3.7rem,8.7vw,8.5rem)] font-semibold leading-[0.98] tracking-[-0.085em]">
              Less noise.<br/><span className="font-normal italic text-[#7463CD]">More knowing.</span><br/>Better marketing.
            </h1>
          </div>
          <div className="mt-12 flex flex-col gap-8 border-t border-[#262238]/20 pt-7 md:ml-auto md:w-[47%]">
            <p className="text-lg leading-[1.65] text-[#4D4960] md:text-[22px]">Good marketing starts with understanding the business. We bring senior marketing judgement together with AI systems that know your customers, your competitors and what actually drives growth.</p>
            <a href="#thinking" className="group flex w-fit items-center gap-4 text-sm font-bold">Explore our approach <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#29253B] transition group-hover:bg-[#29253B] group-hover:text-white">↘</span></a>
          </div>
        </div>
      </section>

      <section id="thinking" className="bg-[#272439] px-6 py-20 text-[#F6F3FF] md:px-10 md:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <div><div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#B6ABE7]">01 / The difference</div><h2 className="mt-7 text-4xl font-medium leading-[1.07] tracking-[-0.06em] md:text-6xl">AI can make<br/>more content.<br/><span className="italic text-[#B5A5FF]">But does it know<br/>what matters?</span></h2><p className="mt-8 max-w-sm leading-7 text-[#D3CFDE]">A prompt can mimic a tone of voice. It can't reliably make commercial decisions without the context behind them. That's where we start.</p></div>
            <div className="relative rounded-[28px] border border-white/15 bg-[#332F49] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] md:p-8">
              <div className="mb-7 flex items-center justify-between border-b border-white/15 pb-5"><span className="text-xs font-bold tracking-[0.14em] text-[#DAD4F7]">A BUSINESS-SPECIFIC INTELLIGENCE SYSTEM</span><span className="h-2.5 w-2.5 rounded-full bg-[#B7A9FF]"/></div>
              <div className="space-y-3">{knowledge.map(item=><div key={item.number} className={`flex items-start gap-4 rounded-2xl ${item.tone} p-5 text-[#28243D]`}><span className="pt-1 text-xs font-bold text-[#796BA9]">{item.number}</span><div><div className="text-lg font-semibold tracking-tight">{item.name}</div><div className="mt-1 text-xs text-[#676079]">{item.detail}</div></div><span className="ml-auto text-[#887AB3]">↗</span></div>)}</div>
              <div className="flex justify-center py-5"><div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#BDB4DC]"><span className="h-7 w-px bg-[#AFA2E8]"/> Strategy-led workflows <span className="h-7 w-px bg-[#AFA2E8]"/></div></div>
              <div className="grid grid-cols-2 gap-2">{outputs.map(output=><div key={output} className="rounded-xl border border-[#746D90] bg-[#47415F] px-3 py-3 text-center text-xs font-medium">{output}</div>)}</div>
              <p className="mt-5 text-center text-[11px] text-[#C3BED3]">Human review before anything goes live.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#7766B8]">02 / Work with us</p><h2 className="mt-6 text-5xl font-medium tracking-[-0.07em] md:text-7xl">The right kind<br/><span className="italic text-[#7463CD]">of support.</span></h2></div><p className="max-w-sm text-lg leading-7 text-[#575367]">Some businesses need a marketing leader. Others need a better system—or a specific problem solved.</p></div>
        <div className="mt-14 border-t border-[#2A263A]/25">
          <a href="/fractional-cmo" className="group grid gap-5 border-b border-[#2A263A]/25 py-8 transition hover:pl-2 md:grid-cols-[90px_1fr_1fr_55px] md:items-center md:gap-8"><span className="text-sm text-[#8A7EAA]">01</span><h3 className="text-3xl font-medium tracking-[-0.05em] md:text-5xl">Fractional CMO</h3><p className="max-w-sm leading-7 text-[#5B566B]">Senior marketing leadership, direction and accountability—without the full-time hire.</p><span className="text-3xl transition group-hover:-translate-y-1 group-hover:translate-x-1">↗</span></a>
          <a href="/marketing-operating-system" className="group grid gap-5 border-b border-[#2A263A]/25 py-8 transition hover:pl-2 md:grid-cols-[90px_1fr_1fr_55px] md:items-center md:gap-8"><span className="text-sm text-[#8A7EAA]">02</span><h3 className="text-3xl font-medium tracking-[-0.05em] md:text-5xl">Marketing operating system</h3><p className="max-w-sm leading-7 text-[#5B566B]">Build the business knowledge and AI workflows your existing marketing team can own.</p><span className="text-3xl transition group-hover:-translate-y-1 group-hover:translate-x-1">↗</span></a>
          <a href="/marketing-consultancy" className="group grid gap-5 border-b border-[#2A263A]/25 py-8 transition hover:pl-2 md:grid-cols-[90px_1fr_1fr_55px] md:items-center md:gap-8"><span className="text-sm text-[#8A7EAA]">03</span><h3 className="text-3xl font-medium tracking-[-0.05em] md:text-5xl">Marketing consultancy</h3><p className="max-w-sm leading-7 text-[#5B566B]">Hands-on help with acquisition, SEO, lifecycle, analytics and conversion.</p><span className="text-3xl transition group-hover:-translate-y-1 group-hover:translate-x-1">↗</span></a>
        </div>
      </div></section>

      <section id="approach" className="bg-[#DCD6F1] px-6 py-20 md:px-10 md:py-28"><div className="mx-auto grid max-w-[1320px] gap-12 md:grid-cols-2 md:gap-20">
        <div><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#6955A6]">03 / How we think</p><h2 className="mt-6 text-5xl font-medium leading-[1.05] tracking-[-0.07em] md:text-7xl">Know the business.<br/><span className="italic text-[#6F5DBD]">Then do the work.</span></h2></div>
        <div className="space-y-8 md:pt-12"><div className="border-t border-[#544A7D]/30 pt-5"><div className="text-xs font-bold uppercase tracking-widest text-[#6D5E9D]">Understand</div><p className="mt-3 text-lg leading-7">Capture the knowledge that shapes good decisions: products, customers, competitors, proof and commercial priorities.</p></div><div className="border-t border-[#544A7D]/30 pt-5"><div className="text-xs font-bold uppercase tracking-widest text-[#6D5E9D]">Prioritise</div><p className="mt-3 text-lg leading-7">Choose marketing work based on commercial value, not just traffic, trends or output volume.</p></div><div className="border-t border-[#544A7D]/30 pt-5"><div className="text-xs font-bold uppercase tracking-widest text-[#6D5E9D]">Execute and learn</div><p className="mt-3 text-lg leading-7">Use repeatable, human-reviewed workflows. Measure what happens and keep improving the system.</p></div></div>
      </div></section>

      <section className="bg-[#F2EFF8] px-6 py-24 md:px-10 md:py-32"><div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-10 md:flex-row md:items-end"><div><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#7766B8]">Start a conversation</p><h2 className="mt-6 text-5xl font-medium leading-[1.05] tracking-[-0.07em] md:text-8xl">Let's make<br/><span className="italic text-[#7463CD]">marketing matter.</span></h2></div><a href="mailto:hello@ootle.io?subject=Marketing%20enquiry" className="flex h-28 w-28 items-center justify-center rounded-full bg-[#272439] text-center text-sm font-bold text-white transition hover:bg-[#6955D5] md:h-36 md:w-36">Get in touch ↗</a></div></section>
      <footer className="border-t border-[#2A263A]/15 px-6 py-7 md:px-10"><div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 text-xs text-[#6B667B]"><span className="text-xl font-black tracking-[-0.09em] text-[#272439]">ootle.</span><span>Independent marketing consultancy · © {new Date().getFullYear()} Ootle</span><a href="mailto:hello@ootle.io" className="hover:text-[#6955D5]">hello@ootle.io ↗</a></div></footer>
    </main>
  );
}