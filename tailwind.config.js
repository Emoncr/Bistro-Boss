/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      40: ["40px", "normal"],
    },
    extend: {
      padding: {
        30: "30px",
        50: "50px",
        15: "60px",
        70: "70px",
      },
      margin: {
        30: "30px",
        50: "50px",
        15: "60px",
        70: "70px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
      },
      colors: {
        brandDark: "#151515",
        brand: "#D1A054",
        menuCardBg: "#F3F3F3",
        tinyHeading: "#D99904",
        navActive: "#EEFF25",
      },
    },
  },
  plugins: [],
};
