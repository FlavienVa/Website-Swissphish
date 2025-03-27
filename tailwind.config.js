/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
        sm: '2rem',
        lg: '3rem',
      },
    },
    extend: {
      fontFamily: {
        contraxt: ["conthrax"],
      },
    },
  },
  plugins: [],
};
