/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue':'#0076CE',
        'custom-purple':'#9400D3',
        'custom-blue2':'#0076CE'
      }
    },
  },
  plugins: [],
}

