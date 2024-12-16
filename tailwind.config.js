/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        "move-light": {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
    animation: {
      "move-light": "move-light 4s ease-in-out infinite",
    },

    plugins: [],
  },
};
