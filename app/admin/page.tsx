"use client"
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export default function Admin() {
  const [settings, setSettings] = useState<any>(null)
  const [pass, setPass] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('site_settings').select('*').single()
      if (data) setSettings(data)
    }
    load()
  }, [])

  const handleLogin = () => {
    if (pass === "1234") setIsAuth(true) // You can change '1234' to your own secret code
    else alert("Wrong Code")
  }

  const save = async () => {
    const { error } = await supabase.from('site_settings').update(settings).eq('id', settings.id)
    if (error) alert("Save failed")
    else alert("Website Updated Successfully!")
  }

  if (!isAuth) return (
    <div style={{ backgroundColor: '#08050D', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'sans-serif' }}>
      <h2>Admin Access</h2>
      <input type="password" placeholder="Enter Secret Code" onChange={(e)=>setPass(e.target.value)} style={{ padding: '15px', borderRadius: '10px', border: 'none', marginBottom: '10px' }} />
      <button onClick={handleLogin} style={{ background: '#00C2FF', color: 'black', padding: '10px 30px', borderRadius: '10px', fontWeight: 'bold' }}>Login</button>
    </div>
  )

  return (
    <div style={{ backgroundColor: '#08050D', color: 'white', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#00C2FF' }}>Control Center</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px' }}>
        
        <label>Current Price (₦)</label>
        <input value={settings.current_price} onChange={e => setSettings({...settings, current_price: e.target.value})} style={inputStyle} />

        <label>WhatsApp Number (e.g. 2347011245712)</label>
        <input value={settings.whatsapp_number} onChange={e => setSettings({...settings, whatsapp_number: e.target.value})} style={inputStyle} />

        <label>YouTube VSL Link</label>
        <input value={settings.vsl_url || ''} placeholder="https://youtube.com/..." onChange={e => setSettings({...settings, vsl_url: e.target.value})} style={inputStyle} />

        <label>Founder Name</label>
        <input value={settings.founder_name} onChange={e => setSettings({...settings, founder_name: e.target.value})} style={inputStyle} />

        <label>Profile/Logo Image URL</label>
        <input value={settings.logo_url || ''} placeholder="Paste Image Link Here" onChange={e => setSettings({...settings, logo_url: e.target.value})} style={inputStyle} />

        <button onClick={save} style={{ background: '#00C2FF', color: 'black', padding: '20px', borderRadius: '15px', fontWeight: '900', border: 'none', marginTop: '20px' }}>
          SAVE CHANGES
        </button>
      </div>
    </div>
  )
}

const inputStyle = { padding: '15px', background: '#111', border: '1px solid #333', color: 'white', borderRadius: '10px' }
