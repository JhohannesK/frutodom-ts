/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        Cairo: ["Cairo", "sans-serif"],
        Comfortaa: ["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [],
};
