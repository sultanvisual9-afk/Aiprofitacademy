import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export default async function Home() {
  const { data: settings } = await supabase.from('site_settings').select('*').single()
  const waLink = `https://wa.me/${settings?.whatsapp_number || '2347011245712'}`

  return (
    <main style={{ backgroundColor: '#08050D', color: 'white', minHeight: '100vh', padding: '50px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '40px', fontWeight: '900', marginBottom: '20px' }}>
          AI PROFIT ACADEMY
        </h1>
        <p style={{ color: '#888', marginBottom: '40px' }}>
          Founder: {settings?.founder_name || 'Abiodun Sultan (Sultan Visual)'}
        </p>
        <div style={{ background: '#0D0D0D', padding: '40px', borderRadius: '30px', border: '1px solid #333' }}>
          <h2 style={{ fontSize: '30px', margin: '0 0 10px 0' }}>₦{settings?.current_price || '5,000'}</h2>
          <p style={{ color: '#00C2FF', fontSize: '12px', fontWeight: 'bold', marginBottom: '30px' }}>ONE-TIME ACCESS</p>
          <a href={waLink} style={{ display: 'block', background: '#00C2FF', color: 'black', padding: '20px', borderRadius: '15px', textDecoration: 'none', fontWeight: '900' }}>
            JOIN NOW VIA WHATSAPP
          </a>
        </div>
      </div>
    </main>
  )
}
