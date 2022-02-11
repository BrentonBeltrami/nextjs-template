module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: {
          default: 'var(--color-text-default)',
        }
      },
      backgroundColor: {
        background: {
          default: 'var(--color-background-default)',
        }
      }
    },
  },
  plugins: [],
}
