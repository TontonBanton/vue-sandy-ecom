/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],    //files to watch by tailwind index & all src folder vue, js, tx files
  theme: {                                                        //additional classes
    extend: {
      fontFamily: { sans: ['Poppins', 'sans-serif'] },
      gridTemplateColumns: { '70/30': '70% 28%'}
    },
  },
  plugins: [],
}

