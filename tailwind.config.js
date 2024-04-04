/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#00ABAD",
        secondary: "#D0D0D2",
        mainText: "#12151C",
        title: "#28649C",
        bgFooter: "#CCEEEF",
      },

      animation: {
        "spin-slow": "spin 6s linear infinite",
        "spin-slow-nolinear": "spin 6s reverse infinite",
        "anim-ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      fontFamily: {
        opensans: [`var(--font-opensans)`, "sans-serif"],
        secondary: [`var(--font-title)`, "sans-serif"],
      },
    },
  },

  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
