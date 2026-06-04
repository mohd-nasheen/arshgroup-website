/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bodoni Moda", "serif"],
        sans: ["Instrument Sans", "sans-serif"],
      },
      colors: {
        alabaster: "#efebe3",
        bone: "#d8d0c3",
        carbon: "#111111",
        graphite: "#2a2b29",
        lichen: "#536456",
        oxide: "#9b593c",
        wine: "#5c2531",
        nickel: "#8c8f8a",
        paper: "#fbfaf7",
      },
      boxShadow: {
        editorial: "0 24px 60px rgba(17,17,17,0.14)",
      },
      backgroundImage: {
        "hero-overlay": "linear-gradient(90deg, rgba(9,9,9,0.72), rgba(9,9,9,0.26) 58%, rgba(9,9,9,0.46))",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        24: "6rem",
      },
    },
  },
  plugins: [],
};
