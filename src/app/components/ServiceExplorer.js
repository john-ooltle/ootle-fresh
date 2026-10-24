"use client";

import { useRef, useState } from "react";

const services = [
  {
    id: "fractional-cmo", number: "01", tab: "Fractional CMO",
    eyebrow: "Senior marketing leadership", heading: "Clarity at the top. Momentum everywhere.",
    description: "Experienced marketing leadership that connects commercial priorities, channel decisions and the people doing the work — without the full-time hire.",
    highlights: ["Commercial direction", "Team & agency leadership", "Accountable delivery"],
    href: "/fractional-cmo", cta: "Explore Fractional CMO",
    color: "purple",
  },
  {
    id: "marketing-operating-system", number: "02", tab: "AI Marketing Operating System",
    eyebrow: "Business-specific AI execution", heading: "Give your marketing team a business brain for AI.",
    description: "Connect your knowledge, strategy and existing tools into practical workflows that help your team plan, create and review with more context.",
    highlights: ["Structured business knowledge", "Connected workflows", "Human approval"],
    href: "/marketing-operating-system", cta: "Explore the operating system",
    color: "lavender",
  },
  {
    id: "marketing-consultancy", number: "03", tab: "Marketing Consultancy",
    eyebrow: "Focused marketing expertise", heading: "Solve the right marketing problem first.",
    description: "Get practical support where it will make a difference — from acquisition and conversion to SEO, analytics and customer retention.",
    highlights: ["SEO & acquisition", "Conversion & lifecycle", "Measurement & insights"],
    href: "/marketing-consultancy", cta: "Explore Marketing Consultancy",
    color: "peach",
  },
];

function StrategyVisual() {
  return <div className="relative mx-auto w-full max-w-[510px]">
    <div className="absolute -left-3 top-12 h-32 w-32 rounded-full bg-[#BFAAFF]/50 blur-3xl" aria-hidden="true" />
    <div className="relative rounded-[24px] border border-white/80 bg-white/90 p-5 shadow-[0_25px_65px_rgba(44,32,103,.15)] sm:p-7">
      <div className="flex items-center justify-between gap-3"><span className="text-xs font-extrabold text-[#302751]">Commercial priorities</span><span className="rounded-full bg-[#E9E2FF] px-3 py-1 text-[10px] font-bold text-[#6548BB]">Leadership view</span></div>
      <div className="mt-5 space-y-3">{[
        ["01","Define the opportunity","Customer & market focus"],
        ["02","Align the marketing plan","Channels, teams & budgets"],
        ["03","Review and improve","Accountability & learning"],
      ].map(([n,t,d],i)=><div key={n} className={`flex items-center gap-4 rounded-2xl p-4 ${i===0?"bg-[#EAE3FF]":i===1?"bg-[#F8EBF2]":"bg-[#EEF5F3]"}`}><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-extrabold text-[#6949C8]">{n}</span><div className="min-w-0"><p className="text-xs font-extrabold text-[#292342]">{t}</p><p className="mt-1 text-[11px] text-[#6B6380]">{d}</p></div><span className="ml-auto text-lg text-[#6C54BC]" aria-hidden="true">↗</span></div>)}</div>
    </div>
    <div className="relative -mt-3 ml-auto mr-2 w-[75%] rounded-2xl border border-[#D8C9FF] bg-[#302657] p-4 text-white shadow-[0_15px_35px_rgba(38,28,89,.23)] sm:mr-[-8px]"><span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#CDBDFF]">One joined-up plan</span><p className="mt-2 text-sm font-bold">Direction → execution → learning</p></div>
  </div>;
}

function SystemVisual() {
  return <div className="relative mx-auto w-full max-w-[510px]">
    <div className="relative rounded-[24px] border border-white/80 bg-white/90 p-5 shadow-[0_25px_65px_rgba(44,32,103,.14)] sm:p-7">
      <div className="flex items-center justify-between"><span className="text-xs font-extrabold text-[#302751]">Business intelligence</span><span className="rounded-full bg-[#E9E2FF] px-3 py-1 text-[10px] font-bold text-[#6548BB]">Shared knowledge</span></div>
      <div className="mt-5 grid grid-cols-2 gap-3">{[["Products & services","bg-[#EAE3FF]"],["Customers & needs","bg-[#FCE8EF]"],["Commercial strategy","bg-[#E3F5F1]"],["Brand & proof","bg-[#FFF0DF]"]].map(([t,b])=><div key={t} className={`rounded-xl p-4 ${b}`}><span className="text-lg text-[#7355C8]" aria-hidden="true">▤</span><p className="mt-3 text-[11px] font-bold text-[#302751]">{t}</p></div>)}</div>
      <div className="flex justify-center py-3" aria-hidden="true"><span className="text-xl text-[#7B61CE]">↓</span></div>
      <div className="rounded-xl bg-[#302657] p-4 text-white"><span className="text-[10px] font-bold uppercase tracking-wider text-[#CCBCFF]">AI-assisted workflows</span><div className="mt-3 flex flex-wrap gap-2">{["Plan","Create","Review","Measure"].map(t=><span key={t} className="rounded-lg bg-white/15 px-3 py-2 text-[10px] font-semibold">{t}</span>)}</div></div>
    </div>
    <div className="relative -mt-3 ml-auto mr-2 w-[70%] rounded-2xl border border-[#E0D4FF] bg-[#F3EFFF] p-4 text-[#302657] shadow-[0_15px_35px_rgba(70,46,129,.12)] sm:mr-[-8px]"><span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#7759BF]">Human-led by design</span><p className="mt-2 text-sm font-bold">Your team stays in control.</p></div>
  </div>;
}

function ConsultingVisual() {
  return <div className="relative mx-auto w-full max-w-[510px]">
    <div className="relative rounded-[24px] border border-white/80 bg-white/95 p-5 shadow-[0_25px_65px_rgba(44,32,103,.13)] sm:p-7">
      <div className="flex items-center justify-between"><span className="text-xs font-extrabold text-[#302751]">Opportunity map</span><span className="rounded-full bg-[#FCE8E5] px-3 py-1 text-[10px] font-bold text-[#A16A77]">Focus areas</span></div>
      <div className="mt-5 grid grid-cols-2 gap-3">{[["Acquisition","SEO & paid media","bg-[#F8E5EB]"],["Conversion","Website & journeys","bg-[#EAE4FF]"],["Retention","Email & lifecycle","bg-[#E1F2EC]"],["Measurement","Analytics & insights","bg-[#FFF0DF]"]].map(([title,desc,b])=><div key={title} className={`min-h-[114px] rounded-2xl p-4 ${b}`}><span className="text-xl text-[#7957BB]" aria-hidden="true">◎</span><p className="mt-3 text-xs font-extrabold text-[#302751]">{title}</p><p className="mt-1 text-[10px] text-[#6B6380]">{desc}</p></div>)}</div>
      <div className="mt-4 rounded-xl border border-[#E5DDF0] bg-[#FAF8FF] p-4"><p className="text-xs font-bold text-[#302751]">Start with the highest-value opportunity.</p><div className="mt-3 h-2 overflow-hidden rounded-full bg-[#E8E2F2]"><div className="h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#7955D9,#D59CBF)]"/></div><p className="mt-2 text-[10px] text-[#817794]">Illustrative prioritisation, not client data</p></div>
    </div>
  </div>;
}

export default function ServiceExplorer() {
  const [active,setActive] = useState(0);
  const tabs = useRef([]);
  const item = services[active];
  const handleKey = (event,index) => {
    let next = index;
    if(event.key==="ArrowRight" || event.key==="ArrowDown") next=(index+1)%services.length;
    else if(event.key==="ArrowLeft" || event.key==="ArrowUp") next=(index-1+services.length)%services.length;
    else if(event.key==="Home") next=0;
    else if(event.key==="End") next=services.length-1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };
  return <section id="services" className="relative overflow-hidden bg-[#FAF8FF] px-5 py-20 text-[#211B41] sm:px-8 lg:py-28">
    <div className="pointer-events-none absolute -right-40 top-28 h-96 w-96 rounded-full bg-[#E9DFFF]/70 blur-[100px]" aria-hidden="true"/>
    <div className="relative mx-auto max-w-[1300px]">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#6B4CE8]">Our services</p><h2 className="mt-4 max-w-[850px] text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-[-.065em]">Different challenges.<br/><span className="text-[#7253DD]">One smarter approach.</span></h2></div>
        <p className="max-w-[370px] text-sm leading-7 text-[#656382]">Explore how we combine experienced marketing judgement with smarter ways of working.</p>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-3" role="tablist" aria-label="Ootle services">
        {services.map((service,index)=><button key={service.id} type="button" role="tab" id={`service-tab-${service.id}`} aria-controls="service-panel" aria-selected={active===index} tabIndex={active===index?0:-1} ref={el=>{tabs.current[index]=el;}} onKeyDown={event=>handleKey(event,index)} onClick={()=>setActive(index)} className={`group relative min-h-[85px] rounded-2xl border px-5 py-4 text-left transition-[background-color,border-color,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7955D9] ${active===index?"border-[#B8A4FF] bg-white shadow-[0_12px_30px_rgba(65,44,120,.12)]":"border-[#E4DFF2] bg-white/55 hover:border-[#B8A4FF] hover:bg-white"}`}>
          <span className="block text-[10px] font-bold tracking-[.14em] text-[#8065C8]">{service.number} / SERVICE</span><span className="mt-2 block text-sm font-extrabold leading-5 text-[#302751]">{service.tab}</span>
          <span className={`absolute bottom-0 left-5 right-5 h-1 rounded-t-full transition-colors duration-300 ${active===index?"bg-[#7955D9]":"bg-transparent"}`}/>
        </button>)}
      </div>
      <div id="service-panel" role="tabpanel" aria-labelledby={`service-tab-${item.id}`} className="mt-5 grid min-w-0 gap-10 overflow-hidden rounded-[30px] border border-[#E5DEF7] bg-[linear-gradient(120deg,#F0EBFF_0%,#FBF9FF_55%,#F8ECF0_100%)] p-6 shadow-[0_22px_55px_rgba(73,48,130,.08)] sm:p-9 lg:min-h-[520px] lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-12 lg:p-12">
        <div className="min-w-0"><p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#7253DD]">{item.eyebrow}</p><h3 className="mt-5 max-w-[510px] text-[clamp(1.9rem,3.1vw,3.4rem)] font-extrabold leading-[1.12] tracking-[-.055em]">{item.heading}</h3><p className="mt-5 max-w-[460px] text-sm leading-7 text-[#625D79]">{item.description}</p>
          <ul className="mt-6 space-y-3">{item.highlights.map(t=><li key={t} className="flex items-center gap-3 text-xs font-semibold text-[#40365F]"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#7653D8]" aria-hidden="true">✓</span>{t}</li>)}</ul>
          <a href={item.href} className="ootle-button mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#7150DA] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#5D3CC3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7955D9]">{item.cta} <span className="ml-3" aria-hidden="true">↗</span></a>
        </div>
        <div className="min-w-0" aria-label={`Illustration of ${item.tab}`}>{active===0?<StrategyVisual/>:active===1?<SystemVisual/>:<ConsultingVisual/>}</div>
      </div>
      <p className="mt-4 text-right text-[11px] text-[#817794]">Conceptual illustrations — not live client data.</p>
    </div>
  </section>;
}
