"use client";
import { useRef, useState } from "react";

const steps = [
  {
    id:"knowledge", number:"01", label:"Know the business", heading:"Capture the context AI usually misses.",
    body:"Build a trusted knowledge base covering products, audiences, positioning, proof and the commercial realities behind decisions.",
    sources:["Products & pricing","Customer needs","Competitors","Brand & proof"],
    output:"A shared, structured source of truth",
    accent:"violet"
  },
  {
    id:"strategy", number:"02", label:"Set the strategy", heading:"Give every workflow commercial direction.",
    body:"Connect company goals, acquisition priorities, competitive opportunities and decision rules to the knowledge base.",
    sources:["Revenue priorities","Channel opportunities","Commercial constraints","Success measures"],
    output:"Marketing priorities grounded in the business",
    accent:"peach"
  },
  {
    id:"workflows", number:"03", label:"Build the workflows", heading:"Turn good judgement into repeatable work.",
    body:"Create workflows for planning, drafting, review and reporting that refer back to the same approved knowledge.",
    sources:["Weekly planning","Blog & SEO","Social & email","Performance review"],
    output:"Consistent, reviewable marketing drafts",
    accent:"mint"
  },
  {
    id:"execution", number:"04", label:"Execute & learn", heading:"Keep people in control of what goes live.",
    body:"Review and approve outputs, publish through your existing tools, measure results and update the knowledge as your business changes.",
    sources:["Human approval","Existing tools","Measurement","Continuous updates"],
    output:"More controlled execution and learning",
    accent:"blue"
  }
];
export default function OperatingSystemStory(){
  const [active,setActive]=useState(0);
  const tabsRef=useRef([]);
  const selectByKeyboard=(event,index)=>{
    let next=index;
    if(event.key==="ArrowRight" || event.key==="ArrowDown") next=(index+1)%steps.length;
    else if(event.key==="ArrowLeft" || event.key==="ArrowUp") next=(index-1+steps.length)%steps.length;
    else if(event.key==="Home") next=0;
    else if(event.key==="End") next=steps.length-1;
    else return;
    event.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  };
  const step=steps[active];
  return <section id="system-in-action" className="relative overflow-hidden bg-[#211B41] px-5 py-20 text-white sm:px-8 lg:py-28">
    <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#7550C6]/25 blur-[90px]"/>
    <div className="relative mx-auto max-w-[1250px]">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C5B1FF]">Explore the operating system</p>
      <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-[750px] text-[clamp(2.7rem,4.6vw,4.8rem)] font-extrabold leading-[1.08] tracking-[-0.065em]">From business knowledge<br/><span className="text-[#B9A3FF]">to better execution.</span></h2><p className="max-w-[320px] text-sm leading-7 text-[#D4CDEA]">Select a stage to see how the same commercial context shapes each part of marketing.</p></div>
      <div className="mt-10 grid gap-3 sm:grid-cols-4" role="tablist" aria-label="Marketing operating system stages">
        {steps.map((item,i)=><button key={item.id} type="button" id={`system-tab-${item.id}`} role="tab" ref={el=>{tabsRef.current[i]=el;}} tabIndex={active===i?0:-1} aria-selected={active===i} aria-controls="system-panel" onKeyDown={event=>selectByKeyboard(event,i)} onClick={()=>setActive(i)} className={`group min-h-[88px] rounded-2xl border px-4 py-4 text-left transition-[background-color,border-color,transform] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D5C7FF] motion-safe:hover:-translate-y-1 ${active===i?"border-[#B8A4FF] bg-[#6548B8] shadow-[0_14px_30px_rgba(0,0,0,0.16)]":"border-white/20 bg-white/5 hover:border-[#A18BDD] hover:bg-white/10"}`}><span className="block text-[10px] font-bold tracking-widest text-[#D2C3FF]">{item.number}</span><span className="mt-2 block text-sm font-bold">{item.label}</span><span className={`mt-3 block h-1 rounded-full transition-colors ${active===i?"bg-[#E9DFFF]":"bg-white/15"}`}/></button>)}
      </div>
      <div role="tabpanel" id="system-panel" aria-labelledby={`system-tab-${step.id}`} className="mt-5 grid gap-6 rounded-[30px] border border-white/15 bg-[#312951] p-5 shadow-[0_28px_65px_rgba(0,0,0,0.18)] sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="flex flex-col justify-center py-4"><span className="text-xs font-bold uppercase tracking-[0.16em] text-[#BDA8FF]">Stage {step.number} / 04</span><h3 className="mt-5 max-w-[500px] text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl">{step.heading}</h3><p className="mt-5 max-w-[450px] text-sm leading-7 text-[#DDD5F1]">{step.body}</p><div className="mt-9 flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-[#B9A4FF]"/><span className="text-xs font-bold text-[#E3D8FF]">One connected system, not disconnected prompts</span></div></div>
        <div className="relative overflow-hidden rounded-[24px] bg-[#F7F4FF] p-5 text-[#242044] sm:p-7">
          <div className="flex items-center justify-between border-b border-[#E1DBF3] pb-4"><span className="text-lg font-black tracking-[-0.08em]">ootle<span className="text-[#7755E8]">.</span></span><span className="rounded-full bg-[#E7DFFF] px-3 py-1.5 text-[10px] font-bold text-[#6248BA]">System overview</span></div>
          <p className="mt-6 text-[11px] font-extrabold uppercase tracking-widest text-[#7C6BB2]">{step.label}</p>
          <div className="mt-4 grid grid-cols-2 gap-3">{step.sources.map((source,i)=><div key={source} className={`rounded-2xl border border-white px-3 py-4 shadow-[0_8px_20px_rgba(65,45,128,0.07)] ${["bg-[#E8E1FF]","bg-[#FBE8ED]","bg-[#DFF4F0]","bg-[#FFF0E1]"][i]}`}><span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/80 text-lg text-[#7052CC]">{["▤","✦","◎","▥"][i]}</span><span className="text-xs font-bold leading-5">{source}</span></div>)}</div>
          <div className="flex justify-center py-4" aria-hidden="true"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7DFFF] text-xl text-[#7153C9]">↓</span></div>
          <div className="rounded-2xl bg-[#2D2556] p-5 text-white shadow-[0_12px_25px_rgba(40,29,88,0.18)]"><span className="text-[10px] font-bold uppercase tracking-widest text-[#C7B7FF]">Result</span><p className="mt-2 text-sm font-bold">{step.output}</p></div>
          <p className="mt-4 text-center text-[10px] text-[#7D739F]">Conceptual workflow illustration · No automated publishing</p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4"><p className="text-xs text-[#C7B9E7]">Explore each stage using the controls above.</p><button type="button" onClick={()=>setActive((active+1)%steps.length)} className="rounded-full border border-[#A48DE0] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Next stage →</button></div>
    </div>
  </section>;
}
