/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        cein: {
          "primary": "#52b69a",
          "primary-2": "#76c893",
          "secondary": "#ffa92c",
          "secondary-2": "#ffc570",
          "neutral": "#0c0c20",
          "neutral-white": "#f6faf9"
        },
      }
    ]
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

    
    extend: {},
    }
  }
  },
  plugins: [
    require('daisyui')
  ],
}
