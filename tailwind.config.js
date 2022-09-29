/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'base-red': '#943D44ff',
        'base-cream': '#F3E3CEff',
      },

    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
