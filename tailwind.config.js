/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1221",
        surface: "#121d34",
        accent: {
          DEFAULT: "#40c4ff",
          muted: "#2b7c9f"
        },
        success: "#4ade80",
        danger: "#f87171",
        warning: "#facc15"
      },
      boxShadow: {
        card: "0 16px 40px -24px rgba(64, 196, 255, 0.45)"
      }
    }
  },
  plugins: [],
};
