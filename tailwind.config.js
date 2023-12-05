/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      mobile: { max: '767px' },
      tablet: { max: '1023px' },
    },
    extend: {
      spacing: {
        112: '28rem',
        128: '32rem',
        142: '35.5rem',
        160: '40rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
