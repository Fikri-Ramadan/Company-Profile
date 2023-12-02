/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      spacing: {
        112: '28rem',
        128: '32rem',
        160: '40rem',
      },
    },
  },
  plugins: [],
};
