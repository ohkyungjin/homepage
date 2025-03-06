/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A3F5E',
        secondary: '#f7d8df',
        text: '#333333',
        accent: '#dbdee7',
        accent2: '#c9ccd5',
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336',
        info: '#2196F3',
        light: '#f8f9fa',
        dark: '#343a40',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        section: '80px',
      },
    },
  },
  plugins: [],
}; 