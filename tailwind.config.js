/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#55D8A1",
        "primary-blue": "#293B96",
        "opacity-green": "#0EB85F",
        "secondary-green": "#0EB85F",
        "gray-text": "#999999",
      },
    },
  },
  plugins: [],
};
