import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function Home() {
  const { data: settings } = await supabase.from('site_settings').select('*').single()

  const waLink = `https://wa.me/${settings?.whatsapp_number}?text=Hello Sultan, I've gone through the website and I'm ready to join AI Profit Academy.`

  return (
    <main className="bg-[#08050D] text-white min-h-screen font-sans selection:bg-[#00C2FF]/30">
      {/* HERO SECTION */}
      <section className="pt-24 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#5A0F8B]/10 blur-[120px] rounded-full" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="border border-[#5A0F8B] px-4 py-2 rounded-full text-[10px] tracking-widest uppercase text-[#00C2FF] font-bold">
            AI PROFIT ACADEMY
          </span>
          <h1 className="text-5xl md:text-7xl font-black mt-8 mb-6 leading-tight tracking-tighter">
            Learn AI Skills. <br />
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#5A0F8B] bg-clip-text text-transparent italic font-light">Build Your Skill.</span> <br />
            <span className="text-white">Learn How to Monetize It.</span>
          </h1>
          
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            A practical training program created by <span className="text-white font-medium">{settings?.founder_name}</span>. 
            Master AI video creation, prompting, and monetization strategies.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href={waLink} className="bg-white text-black font-black py-5 px-10 rounded-xl w-full md:w-auto hover:bg-[#00C2FF] transition-all shadow-xl shadow-white/5">
              ■ I'M READY — JOIN NOW
            </a>
            <button className="bg-[#0D0D0D] border border-gray-800 text-white font-bold py-5 px-10 rounded-xl w-full md:w-auto">
              ■ WATCH MY STORY
            </button>
          </div>
        </div>
      </section>

      {/* PRICING OFFER */}
      <section className="py-20 px-6 bg-[#0D0D0D]/50 border-y border-white/5">
        <div className="max-w-md mx-auto bg-[#08050D] border border-[#5A0F8B]/30 p-10 rounded-3xl text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5A0F8B] text-[10px] font-black px-4 py-1 rounded-full uppercase">One-Time Payment</div>
          <div className="flex items-center justify-center gap-4 mb-2 mt-4">
            <span className="text-gray-600 line-through text-2xl font-bold">₦{settings?.previous_price}</span>
            <span className="text-6xl font-black text-white">₦{settings?.current_price}</span>
          </div>
          <p className="text-[#00C2FF] text-sm font-bold mb-8">Early Bird Discount Applied</p>
          <a href={waLink} className="block w-full bg-[#00C2FF] text-black font-black py-4 rounded-xl uppercase hover:scale-105 transition-transform">
            Get Instant Access
          </a>
        </div>
      </section>

      {/* MOBILE STICKY FOOTER */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden">
        <a href={waLink} className="flex items-center justify-between bg-[#0D0D0D]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl">
          <div>
            <p className="text-[10px] text-gray-500 uppercase font-bold">Join Academy</p>
            <p className="font-black text-lg text-[#00C2FF]">₦{settings?.current_price}</p>
          </div>
          <span className="bg-white text-black px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest">JOIN NOW</span>
        </a>
      </div>
    </main>
  )
        }
