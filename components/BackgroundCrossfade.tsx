'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
type Props = { images: string[], intervalMs?: number }
export default function BackgroundCrossfade({ images, intervalMs = 6000 }: Props){
  const [index, setIndex] = useState(0)
  const [showA, setShowA] = useState(true)
  useEffect(() => { images.forEach(src => { const i = new window.Image(); i.src = src }) }, [images])
  useEffect(() => { const id = setInterval(() => { setIndex(i => (i + 1) % images.length); setShowA(s => !s) }, intervalMs); return () => clearInterval(id) }, [images.length, intervalMs])
  const current = images[index]; const next = images[(index + 1) % images.length]
  return (
    <div aria-hidden className="fixed inset-0 overflow-hidden">
      <div className={`absolute inset-0 transition-opacity duration-700 ${showA ? 'opacity-100' : 'opacity-0'}`}>
        <Image src={current} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-700 ${showA ? 'opacity-0' : 'opacity-100'}`}>
        <Image src={next} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(120% 120% at 10% 10%, rgba(24,5,30,0.15), rgba(24,5,30,0.76))' }}/>
    </div>
  )
}
