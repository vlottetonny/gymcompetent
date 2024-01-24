/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        '1/7': '14.2857143%', // Approximately 1/7th (100/7)
      }
    },
  },
  plugins: [],
}

