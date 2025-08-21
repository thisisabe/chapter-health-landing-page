'use client'
import { useEffect, useState } from 'react'
export default function PrivacyPolicyModal(){
  const [open, setOpen] = useState(false)
  useEffect(() => { const onKey = (e: KeyboardEvent) => { if(e.key === 'Escape') setOpen(false) }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey) }, [])
  return (<>
    <button type="button" onClick={() => setOpen(true)} className="underline underline-offset-2 hover:opacity-90" aria-haspopup="dialog" aria-expanded={open}>Privacy Policy</button>
    {open && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
      <div className="relative z-10 max-w-2xl w-full rounded-2xl bg-[#1F0A26] text-light-balance shadow-xl border border-[rgba(232,205,255,0.15)]">
        <div className="flex items-center justify-between p-4 border-b border-[rgba(232,205,255,0.15)]">
          <h2 className="m-0 font-heading text-lg uppercase tracking-wide">Privacy Policy</h2>
          <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-md px-2 py-1 hover:bg-white/10">✕</button>
        </div>
        <div className="p-4 space-y-4 text-sm leading-6">
          <p><strong>Who we are.</strong> Chapter Health AU Pty Ltd (“Chapter Health”) is a digital health platform that connects patients with Australian healthcare partners — doctors, pharmacies and pathology providers — and manages acquisition, communications, patient journey management and payments for services (medication payments are handled by partner pharmacies).</p>
          <p><strong>What we collect.</strong> If you join the waitlist we collect your email address. If you proceed with care, we may collect contact details and health information relevant to your care (e.g. lab testing and treatment information) from you and our partners.</p>
          <p><strong>How we use it.</strong> To operate the platform, communicate with you, arrange consultations, order and deliver lab results, coordinate with partner pharmacies, improve services and meet legal obligations. No medical advice is provided on this page.</p>
          <p><strong>Legal basis.</strong> We rely on your consent, performance of a contract, and our legitimate interests. For health information, we collect, use and disclose it with your consent or as permitted by the <em>Privacy Act 1988 (Cth)</em> and the Australian Privacy Principles.</p>
          <p><strong>Sharing.</strong> We share personal information with Australian-registered providers involved in your care (e.g. treating doctor), our pathology partner (i-screen), partner compounding pharmacies, and trusted service providers (hosting, security, analytics) under confidentiality obligations.</p>
          <p><strong>Overseas storage.</strong> Some systems may store data outside Australia. We take reasonable steps to ensure recipients safeguard information consistently with the Australian Privacy Principles.</p>
          <p><strong>Retention & security.</strong> We keep information only as long as needed for these purposes or as required by law, and apply reasonable administrative, technical and physical safeguards.</p>
          <p><strong>Your rights.</strong> You may request access to or correction of your personal information, and you can withdraw consent to marketing at any time. Contact us to make a request.</p>
          <p><strong>Contact.</strong> Email: <a href="mailto:hi@mychapter.com.au" className="underline">hi@mychapter.com.au</a>.</p>
          <p className="opacity-75 text-xs">Last updated: 21 August 2025. This short-form policy may be updated. A full policy will be provided in the patient portal at sign-up.</p>
        </div>
        <div className="p-4 border-t border-[rgba(232,205,255,0.15)] flex justify-end">
          <button onClick={() => setOpen(false)} className="rounded-xl bg-peak-performance px-4 py-2 font-heading uppercase tracking-wider text-[#18051E]">Close</button>
        </div>
      </div>
    </div>)}
  </>)
}
