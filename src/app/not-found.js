export const metadata = { title: "Page not found", robots: { index: false, follow: false } };
export default function NotFound() {
  return <main className="flex min-h-screen flex-col items-center justify-center bg-[#F7F3FF] px-6 text-center text-[#211B41]">
    <a href="/" className="text-3xl font-black tracking-[-0.09em] text-[#6B4CE8]">ootle.</a>
    <p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-[#6B4CE8]">404 · Page not found</p>
    <h1 className="mt-5 max-w-xl text-5xl font-extrabold tracking-[-0.06em]">This page isn't here.</h1>
    <p className="mt-5 max-w-md leading-7 text-[#625D79]">The address may have changed. Explore our services or return to the homepage.</p>
    <a href="/" className="mt-8 rounded-full bg-[#6B4CE8] px-7 py-4 text-sm font-bold text-white hover:bg-[#5636C9]">Back to Ootle ↗</a>
  </main>;
}
