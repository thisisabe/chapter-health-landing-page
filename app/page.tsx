import Image from "next/image"
import BackgroundCrossfade from "@/components/BackgroundCrossfade"
import WaitlistForm from "@/components/WaitlistForm"
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal"

const IMAGES = [
  "/bg/chase-yi-p-cfvgdus-g-unsplash-1920.webp",
  "/bg/dane-wetton-aksjqnem75y-unsplash-1920.webp",
  "/bg/dmitriy-frantsev-siqmq-6726y-unsplash-1920.webp",
  "/bg/pexels-alesger-novruz-721211807-18977541-1920.webp",
  "/bg/pexels-bamboo-ave-677926128-29205082-1920.webp",
  "/bg/pexels-ketut-subiyanto-4908993-1920.webp",
  "/bg/pexels-maksgelatin-4775192-1920.webp",
  "/bg/pexels-rethaferguson-3621183-1920.webp",
  "/bg/pexels-tima-miroshnichenko-6388383-1920.webp",
  "/bg/todd-quackenbush-e9pjo-vl3e8-unsplash-1920.webp",
]

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <BackgroundCrossfade images={IMAGES} />

      <header className="relative z-10 flex items-center justify-between gap-4 p-6">
        <div className="flex items-center gap-3">
          <Image src="/CH-FullLogo-RGB_LightPurple-FA.svg" alt="Chapter Health" width={180} height={28} priority />
        </div>
      </header>

      <main className="relative z-10 grid min-h-[calc(100vh-88px)] place-items-center px-6 pb-10 pt-4">
        <section className="max-w-[920px] text-center md:text-left">
          <div className="font-heading text-xs uppercase tracking-[0.12em] opacity-85">( Take Control )</div>
          <h1 className="font-heading text-[clamp(44px,8.2vw,110px)] leading-[0.92] uppercase my-2">TAKE CONTROL</h1>
          <div className="font-heading uppercase tracking-wide text-[clamp(16px,2.4vw,28px)] opacity-95">Join the waitlist</div>
          <p className="mt-3 max-w-[48ch] opacity-95 text-[clamp(16px,2.2vw,22px)]">
            A place where your health isn’t a script you follow — but a story you edit. This is healthcare built for people who refuse to settle.
          </p>

          <div className="mt-4"><WaitlistForm /></div>
          <p className="mt-2 text-xs opacity-75">
            By joining, you agree we may email you about the launch. No medical advice is provided on this page. <PrivacyPolicyModal />
          </p>
        </section>
      </main>

      <footer className="relative z-10 p-6 text-xs opacity-60">
        © {new Date().getFullYear()} Chapter Health — mychapter.com.au
      </footer>
    </div>
  )
}
