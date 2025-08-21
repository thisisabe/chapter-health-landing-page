import type { Config } from "tailwindcss"
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'health-core': '#18051E',
        'light-balance': '#E8CDFF',
        'restorative-yellow': '#FBF999',
        'peak-performance': '#FF482C',
      },
      fontFamily: { heading: ["var(--font-heading)"], body: ["var(--font-body)"] },
    },
  },
  plugins: [],
} satisfies Config
