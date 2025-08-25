/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#F97316",
        tertiary: "#54D6BB",
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-in",
        fadeInLeft: "fadeInLeft 0.7s ease-in",
        fadeInRight: "fadeInRight 0.7s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
    screens: {
      sm: { max: "1000px" },
      lg: { max: "2024px", min: "1001px" },
    },
  },
  plugins: [],
};
