import ServiceExplorer from "./components/ServiceExplorer";
import MotionEnhancements from "./components/MotionEnhancements";
/* eslint-disable react/no-unescaped-entities */
export const metadata = {
  title: "Ootle | Senior Marketing Leadership & AI-Powered Execution",
  description: "Build a smarter marketing function with experienced marketing leadership, commercial intelligence and business-specific AI workflows.",
};

const sources = [
  { icon: "▤", label: "Business knowledge", items: ["Products & services", "Target customers", "Competitors", "Brand & positioning"], accent: "violet" },
  { icon: "◈", label: "Commercial strategy", items: ["Revenue goals", "Key opportunities", "Differentiation", "Decision rules"], accent: "peach" },
];
const workflows = ["Blog & SEO", "Social media", "Email campaigns", "Reports & insights"];
const execution = ["Website", "Email", "Social media", "Paid campaigns"];
const leftBrain = [
  { symbol: "▣", title: "Your business", desc: "Products, pricing, proof, goals", color: "bg-[#EEE9FF]" },
  { symbol: "♙", title: "Your customers", desc: "Audiences, use cases, buying motivations", color: "bg-[#FCE8F1]" },
  { symbol: "◎", title: "Your market", desc: "Competitors, trends, opportunities", color: "bg-[#DFF5F3]" },
  { symbol: "♡", title: "Your brand", desc: "Tone of voice, positioning, evidence", color: "bg-[#FFF0DE]" },
];
const rightBrain = [
  { symbol: "↗", title: "Strategic planning", desc: "Prioritised opportunities and channel strategy", color: "bg-[#E5F5FA]" },
  { symbol: "✎", title: "Content creation", desc: "Blogs, social, newsletters and campaigns", color: "bg-[#FBE6F8]" },
  { symbol: "◉", title: "Performance insights", desc: "Analytics, reporting and recommendations", color: "bg-[#DFF5F3]" },
  { symbol: "ϟ", title: "Consistent execution", desc: "On-brand, commercially focused marketing", color: "bg-[#FFF0DE]" },
];
function MiniCard({ title, items, type = "purple" }) {
  return <div className="ootle-interactive ootle-hero-panel relative rounded-[18px] border border-white/80 bg-white/90 p-4 shadow-[0_18px_50px_rgba(55,40,130,0.12)] backdrop-blur-md sm:p-5">
    <div className="mb-3 text-[12px] font-bold text-[#1C1B3B]">{title}</div>
    <div className="space-y-2">{items.map((item, i) => <div key={item} className="flex items-center gap-2 text-[10px] font-medium text-[#515173] sm:text-[11px]"><span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] ${type === "peach" ? "bg-[#FFE8DE] text-[#9C6185]" : type === "mint" ? "bg-[#DDF6F4] text-[#258D99]" : "bg-[#EAE5FF] text-[#6650CC]"}`}>{["▤", "✦", "◎", "▥"][i]}</span>{item}</div>)}</div>
  </div>;
}
function KnowledgeVisual() {
  return <div className="relative mx-auto w-full max-w-[630px]">
    <div className="pointer-events-none absolute inset-5 rounded-[40%] bg-[#C8B9FF]/35 blur-3xl" />
    <div data-reveal className="relative grid grid-cols-2 gap-3 pb-3 sm:gap-4">
      <MiniCard title="Business knowledge" items={sources[0].items} />
      <MiniCard title="Commercial strategy" items={sources[1].items} type="peach" />
    </div>
    <div className="relative mx-auto my-3 w-[92%] rounded-[22px] border border-white/90 bg-[#ECE9FF]/95 p-3 shadow-[0_22px_70px_rgba(81,57,175,0.22)] sm:p-4">
      <div className="rounded-[16px] border border-[#D7D1F4] bg-white/90 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-2 border-b border-[#E8E4F6] pb-3"><span className="text-xl font-black tracking-[-0.09em] text-[#28234D]">ootle<span className="text-[#6E4AF0]">.</span></span><span className="rounded-full bg-[#EAE5FF] px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[#6A53C7]">Marketing intelligence</span></div>
        <p className="mt-3 text-[11px] font-bold text-[#272448]">Your marketing system</p>
        <div className="mt-3 grid grid-cols-4 gap-2">{[["▤", "Understand"], ["▦", "Plan"], ["✧", "Create"], ["▥", "Measure"]].map(([icon, label], i) => <div key={label} className="rounded-xl bg-[#F5F3FF] px-1 py-3 text-center"><div className={`mx-auto flex h-8 w-8 items-center justify-center rounded-lg text-lg ${i === 2 ? "bg-[#DFD5FF] text-[#6C46E8]" : "bg-white text-[#6552C6]"}`}>{icon}</div><div className="mt-2 text-[9px] font-semibold text-[#393459]">{label}</div></div>)}</div>
      </div>
    </div>
    <div data-reveal className="relative grid grid-cols-2 gap-3 pt-1 sm:gap-4">
      <MiniCard title="AI-assisted workflows" items={workflows} />
      <MiniCard title="Marketing execution" items={execution} type="mint" />
    </div>
    <div className="relative mt-3 text-center text-[10px] font-medium text-[#6E6698]">Illustration of the Ootle methodology · Human approval at every stage</div>
  </div>;
}
function BrainRow({ item }) {
  return <div className="ootle-interactive flex min-w-0 items-center gap-3 rounded-2xl border border-[#E7E3F5] bg-white/90 p-3 shadow-[0_8px_25px_rgba(58,48,121,0.08)] sm:p-4">
    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl text-[#5142B0] ${item.color}`}>{item.symbol}</span>
    <div className="min-w-0"><p className="text-xs font-bold text-[#20203E]">{item.title}</p><p className="mt-1 text-[10px] leading-[1.4] text-[#666586]">{item.desc}</p></div>
  </div>;
}
export default function Home() {
  return <><MotionEnhancements/><><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-5 focus:py-3 focus:text-[#242044] focus:shadow-lg">Skip to content</a><main id="main-content" className="overflow-x-hidden bg-white text-[#1B1B3D]">
    <header className="relative z-20 border-b border-[#EEEAF8] bg-[#F8F6FF]">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <a href="/" aria-label="Ootle home" className="text-[28px] font-black tracking-[-0.09em]">ootle<span className="text-[#7254ED]">.</span></a>
        <nav className="hidden items-center gap-8 text-[13px] font-semibold text-[#29274A] md:flex"><a href="#services" className="hover:text-[#7254ED]">Services</a><a href="#approach" className="hover:text-[#7254ED]">Approach</a><a href="#why-ootle" className="hover:text-[#7254ED]">Why Ootle</a></nav>
        <a href="mailto:hello@ootle.io?subject=Ootle%20enquiry" className="ootle-button rounded-full bg-[#6B4CE8] px-5 py-3 text-xs font-bold text-white shadow-[0_7px_20px_rgba(107,76,232,0.25)] transition hover:bg-[#5637C9]">Get in touch <span className="ml-2">↗</span></a>
      </div>
    </header>

    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_70%_40%,#E7E0FF_0%,#F6F3FF_44%,#FBFAFF_78%)]">
      <div className="pointer-events-none absolute right-[-8%] top-[-12%] h-[550px] w-[550px] rotate-45 rounded-[100px] bg-[#C9B8FF]/20 blur-2xl"/>
      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-5 pb-16 pt-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:pb-24 lg:pt-24">
        <div className="relative z-10">
          <p className="mb-6 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#6B4CE8]">Senior marketing leadership. AI-powered execution.</p>
          <h1 className="max-w-[660px] text-[clamp(3.25rem,5.4vw,5.9rem)] font-extrabold leading-[1.04] tracking-[-0.07em]">Less noise.<br/>More knowing.<br/><span className="text-[#7151E7]">Better marketing.</span></h1>
          <p className="mt-7 max-w-[520px] text-[16px] leading-[1.75] text-[#555573] sm:text-[18px]">We help growing businesses build smarter marketing functions by combining senior marketing expertise with AI-powered systems tailored to their business.</p>
          <div data-reveal className="mt-8 flex flex-wrap gap-3"><a href="mailto:hello@ootle.io?subject=Ootle%20enquiry" className="ootle-button rounded-full bg-[#6B4CE8] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(108,76,230,0.25)] hover:bg-[#5739D2]">Get in touch <span className="ml-2">↗</span></a><a href="#approach" className="rounded-full border border-[#CEC4EF] bg-white/80 px-7 py-3.5 text-sm font-bold text-[#252248] hover:border-[#7054E0]">See how it works <span className="ml-2 text-[#7151E7]">▶</span></a></div>
          <div className="mt-11 grid max-w-[510px] grid-cols-3 gap-4 border-t border-[#E2DCF3] pt-6">{[["◎","Commercially focused"],["✧","AI-assisted execution"],["▥","Built for growing businesses"]].map(([icon,txt])=><div key={txt} className="flex items-start gap-2"><span className="text-2xl text-[#7051E8]">{icon}</span><span className="text-[11px] font-semibold leading-[1.4]">{txt}</span></div>)}</div>
        </div>
        <KnowledgeVisual/>
      </div>
    </section>

    <section className="border-y border-[#F0EDF9] bg-white py-7"><div data-reveal className="mx-auto max-w-[1300px] px-5 sm:px-8"><p className="mb-5 text-center text-[10px] font-extrabold uppercase tracking-[0.19em] text-[#7465B7]">Built for ambitious teams across</p><div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-[12px] font-semibold text-[#77769F]">{[["☁","SaaS"],["▥","Professional services"],["◇","E-commerce"],["♡","Health & fitness"],["⌂","Education"],["♧","Recruitment"]].map(([icon,txt])=><span key={txt} className="flex items-center gap-2"><span className="text-xl text-[#8581BE]">{icon}</span>{txt}</span>)}</div></div></section>

    <section id="approach" className="bg-[linear-gradient(135deg,#FAF9FF_0%,#F0ECFF_65%,#F8F7FF_100%)] px-5 py-20 sm:px-8 lg:py-28">
      <div data-reveal className="mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#6B4CE8]">The Ootle approach</p><h2 className="mt-6 text-[clamp(2.6rem,4vw,4.4rem)] font-extrabold leading-[1.08] tracking-[-0.065em]">A business brain<br/>for better marketing.</h2><p className="mt-6 max-w-[430px] text-[16px] leading-[1.8] text-[#565575]">We capture what makes your business unique, turn it into a structured knowledge base and use it to guide AI-assisted marketing across all channels.</p><a href="/marketing-operating-system" className="mt-7 inline-flex rounded-full border border-[#BEB2E9] bg-white px-6 py-3 text-sm font-bold text-[#2D2854] shadow-sm hover:border-[#7151E7]">Explore the approach <span className="ml-3">→</span></a></div>
        <div className="relative rounded-[30px] border border-white/70 bg-white/35 p-4 shadow-[0_24px_80px_rgba(87,65,155,0.08)] sm:p-6">
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_0.8fr_1fr] sm:gap-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">{leftBrain.map(item=><BrainRow key={item.title} item={item}/>)}</div>
            <div className="relative flex items-center justify-center py-7 sm:py-0"><div className="absolute h-44 w-44 rounded-[35%] bg-[#A68DFF]/20 blur-2xl"/><div className="absolute h-44 w-44 rotate-45 rounded-[28px] border border-[#BCAAFB]/40 bg-[#C6B6FF]/20"/><div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-[26px] bg-[linear-gradient(140deg,#9B7BFF,#5030BA)] text-white shadow-[0_18px_40px_rgba(94,58,187,0.3)] sm:h-36 sm:w-36"><span className="text-3xl font-black tracking-[-0.1em]">ootle.</span><span className="mt-2 max-w-[90px] text-center text-[10px] leading-4">Your marketing intelligence system</span></div></div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">{rightBrain.map(item=><BrainRow key={item.title} item={item}/>)}</div>
          </div>
          <p className="mt-5 text-center text-[10px] font-medium text-[#8278AA]">Conceptual illustration — knowledge and strategy guide every workflow</p>
        </div>
      </div>
    </section>

    <ServiceExplorer />

    <section id="why-ootle" className="relative overflow-hidden bg-[#FCFBFF] px-5 py-20 sm:px-8 lg:py-24">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#EAE3FF]/60 blur-3xl"/>
      <div className="relative mx-auto max-w-[1300px]">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.25fr_0.95fr] lg:items-stretch">
          <div className="flex flex-col justify-between rounded-[24px] border border-[#E7E2F6] bg-[linear-gradient(145deg,#F0EBFF,#FFFFFF)] p-7 shadow-[0_16px_45px_rgba(77,54,143,0.09)]">
            <div><span className="inline-flex rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#6B4CE8] shadow-sm">Built around your business</span><h3 className="mt-7 text-[27px] font-extrabold leading-[1.13] tracking-[-0.05em] text-[#211E43]">Your knowledge.<br/>Your strategy.<br/><span className="text-[#7253DD]">One joined-up system.</span></h3><p className="mt-5 text-[13px] leading-6 text-[#65617F]">Product truth, customer insight and commercial priorities shape the work before AI starts creating.</p></div>
            <div className="mt-9 rounded-2xl border border-[#E1D9FB] bg-white/90 p-4 shadow-[0_10px_25px_rgba(90,70,156,0.08)]"><div className="flex items-center justify-between"><span className="text-[11px] font-bold text-[#3E355E]">Commercial context</span><span className="rounded-full bg-[#E8E1FF] px-2 py-1 text-[9px] font-bold text-[#6249C2]">At the centre</span></div><div className="mt-3 flex gap-2">{["Customers","Competitors","Goals"].map(t=><span key={t} className="rounded-lg bg-[#F4F0FF] px-2 py-1.5 text-[9px] font-semibold text-[#62558F]">{t}</span>)}</div></div>
          </div>
          <div className="flex flex-col justify-center px-1 py-5 lg:px-5"><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#6B4CE8]">Why Ootle works differently</p><h2 className="mt-5 text-[clamp(2.7rem,4vw,4.4rem)] font-extrabold leading-[1.06] tracking-[-0.065em] text-[#1C1B3B]">More impact.<br/><span className="text-[#7151E7]">Less complexity.</span></h2><p className="mt-5 max-w-[490px] text-[14px] leading-7 text-[#63617D]">Experienced marketing judgement, supported by systems that understand your business. More consistency and control, without adding unnecessary layers of tools or suppliers.</p><div className="mt-9 grid gap-5 sm:grid-cols-3">{[["◎","Strategic focus","Not just more content"],["ϟ","Efficient execution","AI that understands context"],["▥","Measurable progress","Built around business goals"]].map(([icon,title,detail])=><div key={title} className="border-t-2 border-[#C8BBF4] pt-4"><span className="text-[27px] text-[#7151E7]">{icon}</span><h3 className="mt-3 text-[12px] font-extrabold text-[#252245]">{title}</h3><p className="mt-1 text-[11px] leading-5 text-[#77728D]">{detail}</p></div>)}</div></div>
          <div className="rounded-[24px] border border-[#E5E2F8] bg-[linear-gradient(145deg,#F1F0FF,#EAE8FA)] p-7 shadow-[0_16px_45px_rgba(77,54,143,0.08)]"><div className="mb-7 flex items-center justify-between"><span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#6556A0]">The Ootle advantage</span><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-xl text-[#7253DD] shadow-sm">✦</span></div><div className="space-y-5">{["Senior marketing expertise","Business-specific AI system","Works with your existing tools","Human approval at every step","Built for long-term growth"].map(t=><div key={t} className="flex items-center gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7957E7] text-xs font-bold text-white shadow-[0_5px_12px_rgba(108,77,215,0.2)]">✓</span><span className="text-[12px] font-semibold leading-5 text-[#373255]">{t}</span></div>)}</div><div className="mt-9 h-1.5 overflow-hidden rounded-full bg-white"><div className="h-full w-3/4 rounded-full bg-[linear-gradient(90deg,#8D6AF0,#B6A4F5)]"/></div><p className="mt-3 text-[10px] text-[#81799E]">A considered approach, not a generic AI template.</p></div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_90%_100%,#4B347B_0%,#1A1839_55%,#14132D_100%)] px-5 py-20 text-white sm:px-8"><div className="pointer-events-none absolute -bottom-44 -left-20 h-80 w-80 rounded-full bg-[#8258C6]/20 blur-3xl"/><div className="relative mx-auto flex max-w-[1300px] flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8A7E6]">Ready to build a smarter marketing function?</p><h2 className="mt-5 max-w-[760px] text-[clamp(2.2rem,4vw,4.4rem)] font-extrabold leading-[1.15] tracking-[-0.06em]">Let's make your marketing work harder.</h2></div><div className="shrink-0"><a href="mailto:hello@ootle.io?subject=Marketing%20enquiry" className="inline-flex rounded-full bg-[#7954EC] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_35px_rgba(114,84,232,0.25)] hover:bg-[#8A6AFF]">Get in touch <span className="ml-3">↗</span></a><p className="mt-3 text-center text-xs text-[#D0C8E8]">A conversation about your priorities.</p></div></div></section>
    <footer className="bg-[#14132D] px-5 py-7 text-white/60 sm:px-8"><div className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-between gap-4 text-xs"><a href="/" className="text-2xl font-black tracking-[-0.09em] text-white">ootle.</a><span>© {new Date().getFullYear()} Ootle · Senior marketing expertise, smarter execution.</span><a className="hover:text-white" href="mailto:hello@ootle.io">hello@ootle.io ↗</a></div></footer>
  </main></></>; }
