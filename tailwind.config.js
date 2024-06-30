module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          text: '#151619',
          bg: '#BAC8EE',
          accent: '#D41162',
        },
        dark: {
          text: '#E6E7EA',
          bg: '#111f45',
          accent: '#EE2B7C',
        },
      },
    },
  },
  plugins: [],
}
