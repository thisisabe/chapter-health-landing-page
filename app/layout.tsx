import type { Metadata } from "next"
import "./globals.css"
import { heading, body } from "@/lib/fonts"
export const metadata: Metadata = {
  title: "Chapter Health — Take Control",
  description: "A place where your health isn’t a script you follow — but a story you edit. This is healthcare built for people who refuse to settle.",
  icons: { icon: "/CH-Logomark-RGB_LightPurple-FA.svg" },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en-AU"><body className={`${body.variable} ${heading.variable} bg-health-core text-light-balance`}>{children}</body></html>)
}
