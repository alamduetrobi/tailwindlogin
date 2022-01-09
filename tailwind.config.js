module.exports = {
  content: [
    "./layouts/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary:'Poppins, sans-serif',
        sans:'Roboto, sans-serif',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
