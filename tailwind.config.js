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
          bgDimmed: '#A7B4D6', // dimmed light background color
          accent: '#D41162',
        },
        dark: {
          text: '#E6E7EA',
          bg: '#111f45',
          bgDimmed: '#0F1C3E', // dimmed light background color
          accent: '#EE2B7C',
        },
      },
    },
  },
  plugins: [],
}
