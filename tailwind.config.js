/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mine-shaft': {
              '50': '#f6f6f6',
              '100': '#e7e7e7',
              '200': '#d1d1d1',
              '300': '#b0b0b0',
              '400': '#888888',
              '500': '#6d6d6d',
              '600': '#5d5d5d',
              '700': '#4f4f4f',
              '800': '#454545',
              '900': '#3d3d3d',
              '950': '#2d2d2d',
          },
          'royal-purple': {
              '50': '#fbf5ff',
              '100': '#f5e9fe',
              '200': '#ecd7fd',
              '300': '#deb7fb',
              '400': '#c98af6',
              '500': '#b55def',
              '600': '#a13ce1',
              '700': '#8a2ac6',
              '800': '#802bb1',
              '900': '#5f2182',
              '950': '#410b60',
          },

      }
    },
  },
  plugins: [],
}