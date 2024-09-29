/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mypurple: ['#B1B2FF'], mypurpledark: ['#9d9fff'],
        bluishpurple: ['#AAC4FF'],
        lightpurple: ['#D2DAFF'],
        smoothwhite: ['#EEF1FF']
      },
      fontFamily: {
        Publicsans: ['Public sans'],
        SUSE: ['SUSE'],
        Mont: ['Montserrat'],
        Roboto: ['Roboto']
      }
    },
  },
  plugins: [],
}

