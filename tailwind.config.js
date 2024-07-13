/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "rgba(189, 190, 191, 1)",
      },
      fontFamily: {
        circular: ["Circular Std", "sans-serif"],
      },
    },
  },
  plugins: [],
};
