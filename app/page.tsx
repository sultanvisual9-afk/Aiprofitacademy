import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function Home() {
  const { data: settings } = await supabase.from('site_settings').select('*').single()
  const waLink = `https://wa.me/${settings?.whatsapp_number}?text=Hello Sultan, I'm ready to join AI Profit Academy.`

  return (
    <main className="bg-[#08050D] text-white min-h-screen relative overflow-x-hidden">
      {/* GLOWING BACKGROUND */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#5A0F8B]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block border border-[#5A0F8B] px-4 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase text-[#00C2FF] font-black mb-10">
            AI PROFIT ACADEMY
          </span>
          
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Learn AI Skills.<br />
            <span className="text-gray-500 font-light italic">Build Your Skill.</span><br />
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#5A0F8B] bg-clip-text text-transparent uppercase">
              Learn How to Monetize It.
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            A practical training program created by <span className="text-white font-semibold">{settings?.founder_name}</span>. 
            Transform your vision into a profit-generating machine.
          </p>

          <div className="flex flex-col gap-4 items-center">
            <a href={waLink} className="w-full max-w-xs bg-white text-black font-black py-5 rounded-2xl text-lg shadow-xl shadow-white/10 active:scale-95 transition-all">
              JOIN AI PROFIT ACADEMY
            </a>
            <button className="w-full max-w-xs bg-white/5 border border-white/10 text-white font-bold py-5 rounded-2xl text-xs uppercase tracking-widest">
              Watch My Story
            </button>
          </div>
        </div>
      </section>

      {/* PRICING CARD */}
      <section className="py-10 px-6 relative z-10">
        <div className="max-w-sm mx-auto bg-black/40 border border-white/10 p-10 rounded-[2.5rem] text-center backdrop-blur-md">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-gray-600 line-through text-xl font-bold">₦{settings?.previous_price}</span>
            <span className="text-5xl font-black text-white">₦{settings?.current_price}</span>
          </div>
          <p className="text-[#00C2FF] text-xs font-bold mb-8 uppercase tracking-widest">One-Time Access</p>
          <a href={waLink} className="block w-full bg-[#00C2FF] text-black font-black py-4 rounded-xl uppercase text-xs">
            Get Instant Access
          </a>
        </div>
      </section>

      {/* STICKY MOBILE FOOTER */}
      <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <a href={waLink} className="flex items-center justify-between bg-black/90 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl shadow-2xl">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 font-bold uppercase">Price Now</span>
            <span className="font-black text-[#00C2FF]">₦{settings?.current_price}</span>
          </div>
          <span className="bg-white text-black px-6 py-3 rounded-xl text-[10px] font-black uppercase">JOIN NOW</span>
        </a>
      </div>
    </main>
  )
}
