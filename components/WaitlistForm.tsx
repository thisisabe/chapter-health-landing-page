'use client'
import { useState } from 'react'
export default function WaitlistForm(){
  const [email, setEmail] = useState(''); const [msg, setMsg] = useState<{text:string, ok:boolean} | null>(null); const [loading, setLoading] = useState(false)
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setMsg(null)
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; if(!re.test(email)){ setMsg({text:'Please enter a valid email.', ok:false}); return }
    setLoading(true)
    try{
      const res = await fetch('/api/waitlist', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ email }) })
      const data = await res.json(); if(!res.ok) throw new Error(data?.error || 'Unknown error')
      setEmail(''); setMsg({text:'Thanks — you’re on the list.', ok:true})
    }catch(err:any){ setMsg({text: err.message || 'Sorry, something went wrong. Please try again.', ok:false}) }finally{ setLoading(false) }
  }
  return (
    <form onSubmit={submit} className="flex flex-wrap items-center gap-3">
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email address" required aria-label="Email address" className="min-w-[260px] flex-1 rounded-xl border border-[rgba(232,205,255,0.35)] bg-[rgba(232,205,255,0.10)] px-4 py-3 text-light-balance placeholder:text-[rgba(232,205,255,0.7)] outline-none" />
      <button type="submit" disabled={loading} className="rounded-2xl bg-peak-performance px-4 py-3 font-heading text-[0.9rem] font-semibold uppercase tracking-wider text-[#18051E] transition hover:opacity-95 active:translate-y-px disabled:opacity-60">{loading ? 'Joining…' : 'Join the waitlist'}</button>
      {msg && (<div className={`${msg.ok ? 'text-restorative-yellow' : 'text-red-200'} text-sm w-full`}>{msg.text}</div>)}
    </form>
  )
}
