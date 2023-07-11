/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-sarpanch)"],
        mono: ["var(--font-roboto-mono)"],
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "rotate(-90deg)",
            borderRadius: "24% 76% 35% 65% / 27% 36% 64% 73%",
          },
          "50%": {
            transform: "ratate(-10deg) ",
            borderRadius: "76% 24% 33% 67% / 68% 55% 45% 32%",
          },
        },
      },
      animation: {
        blob: "blob 10s infinite alternate",
      },
    },
  },
  plugins: [],
};
