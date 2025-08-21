import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
export async function POST(req: Request){
  try{
    const { email } = await req.json()
    if(!email || typeof email !== 'string') return NextResponse.json({ error:'Invalid email' }, { status: 400 })
    const SUPABASE_URL = process.env.SUPABASE_URL
    const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY
    if(!SUPABASE_URL || (!SUPABASE_SERVICE_ROLE && !SUPABASE_ANON_KEY)){
      return NextResponse.json({ ok:true, stored:'local' })
    }
    const key = SUPABASE_SERVICE_ROLE || SUPABASE_ANON_KEY!
    const supabase = createClient(SUPABASE_URL, key)
    const { error } = await supabase.from('waitlist').insert([{ email, source: 'coming-soon', user_agent: req.headers.get('user-agent') || '' }])
    if(error) throw error
    return NextResponse.json({ ok: true })
  }catch(err:any){
    return NextResponse.json({ error: err.message || 'Unexpected error' }, { status: 500 })
  }
}
