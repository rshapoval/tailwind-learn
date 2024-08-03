/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors(theme) {
        return {
          primary: {
            DEFAULT: 'hsl(263, 55%, 52%)',
            dark: 'hsl(217, 19%, 35%)',
            blackish: 'hsl(219, 29%, 14%)',
          },
          gray: {
            ...theme.colors.gray,
            100: 'hsl(0, 0%, 81%)',
            200: 'hsl(210, 46%, 95%)',
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

