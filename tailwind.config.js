export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'desktop': '1280px',
    },

    maxWidth: {
      'content': '1280px',
    },

    extend: {
      gridTemplateRows: {
        'layout': 'min-content 1fr min-content',
      },
    },
  },
  plugins: [],
}
