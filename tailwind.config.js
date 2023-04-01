/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: {
          50: "#fdfff0",
          100: "#DBFFD1",
          200: "#a4ff8d",
          300: "#468045",
          400: "#98C68D",
        },
        t: {
          50: "#5d5d5d",
          100: "#1c4213",
        },
        sec: {
          100: "#EC9B51",
        },
      },
    },
  },
  plugins: [],
};
