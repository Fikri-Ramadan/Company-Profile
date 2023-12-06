/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        112: '28rem',
        128: '32rem',
        142: '35.5rem',
        160: '40rem',
      },
      screens: {
        tablet: { max: '1023px' },
        mobile: { max: '767px' },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
