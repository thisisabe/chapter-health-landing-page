import localFont from "next/font/local"

export const heading = localFont({
  src: [{ path: "../public/fonts/national-2-narrow-medium.woff2", weight: "600", style: "normal" }],
  variable: "--font-heading",
  display: "swap",
})

export const body = localFont({
  src: [
    { path: "../public/fonts/PPMori-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/PPMori-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
})
