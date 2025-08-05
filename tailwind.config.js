/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // Add more paths if needed
  ],
  theme: {
    extend: {
      // Example: colors: { primary: '#1d4ed8' }
    },
  },
  plugins: [
    // Example: require('@tailwindcss/forms'), require('@tailwindcss/typography')
  ],
};
