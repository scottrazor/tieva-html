/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.njk"],
  safelist: [
    "bg-brand-eggplant",
    "bg-brand-yellow",
    "bg-brand-sky",
    "bg-brand-red",
    "bg-brand-purple",
    "bg-brand-green",
    "bg-base-grey",
    "bg-base-black",
    "bg-base-white",
    "fill-brand-eggplant",
    "fill-brand-yellow",
    "fill-brand-sky",
    "fill-brand-red",
    "fill-brand-purple",
    "fill-brand-green",
    "text-center",
    "text-right",
    {
      pattern: /^p-/,
    },
    {
      pattern: /^pb-/,
    },
    {
      pattern: /^pt-/,
    },
    {
      pattern: /^pl-/,
    },
    {
      pattern: /^pr-/,
    },
  ],
  theme: {
    fontFamily: {
      sans: ["Beausite Classic", "sans-serif"],
    },
    colors: {
     brand: {
        eggplant: "#332D39",
        yellow: "#FBEB8E",
        sky: "#B6E6E3",
        red: "#FB8E8E",
        purple: "#B6A5F6",
        green: "#34B19A",
      },
      base: {
        grey: "#F0EDE7",
        black: "#131313",
        white: "#FFFFFF",
      },
      transparent: "transparent",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {},
  },
  plugins: [],
}

