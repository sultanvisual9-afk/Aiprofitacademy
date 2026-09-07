import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export default async function Home() {
  const { data: settings } = await supabase.from('site_settings').select('*').single()
  const waLink = `https://wa.me/${settings?.whatsapp_number || '2347011245712'}`

  return (
    <main style={{ backgroundColor: '#08050D', color: 'white', minHeight: '100vh', padding: '40px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        {/* LOGO / PROFILE IMAGE */}
        {settings?.logo_url && (
          <img src={settings.logo_url} alt="Sultan Visual" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px', border: '2px solid #00C2FF' }} />
        )}

        <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '10px' }}>AI PROFIT ACADEMY</h1>
        <p style={{ color: '#888', marginBottom: '30px', fontSize: '14px' }}>
          Founder: {settings?.founder_name || 'Abiodun Sultan'}
        </p>

        {/* YOUTUBE VIDEO SECTION */}
        {settings?.vsl_url && (
          <div style={{ marginBottom: '40px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #333' }}>
            <iframe 
              width="100%" 
              height="315" 
              src={`https://www.youtube.com/embed/${settings.vsl_url.split('v=')[1]}`} 
              title="VSL" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* PRICING CARD */}
        <div style={{ background: '#0D0D0D', padding: '40px', borderRadius: '30px', border: '1px solid #333', boxShadow: '0 10px 50px rgba(0,0,0,0.5)' }}>
          <h2 style={{ fontSize: '40px', margin: '0 0 5px 0' }}>₦{settings?.current_price || '5,000'}</h2>
          <p style={{ color: '#00C2FF', fontSize: '12px', fontWeight: 'bold', marginBottom: '30px', letterSpacing: '2px' }}>ONE-TIME ACCESS</p>
          <a href={waLink} style={{ display: 'block', background: '#00C2FF', color: 'black', padding: '20px', borderRadius: '15px', textDecoration: 'none', fontWeight: '900', fontSize: '18px' }}>
            JOIN NOW VIA WHATSAPP
          </a>
        </div>

      </div>
    </main>
  )
        }
