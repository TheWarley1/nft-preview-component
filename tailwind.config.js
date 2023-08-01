/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {

    screens:{
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },

    colors:{
      'blue': 'hsl(215, 51%, 70%)',
      'cyan': 'hsl(178, 100%, 50%)',
      'cyanop': 'hsl(178, 100%, 50%, 0.5)',
      'main-BG': 'hsl(217, 54%, 11%)',
      'card-BG': 'hsl(216, 50%, 16%)',
      'line': 'hsl(215, 32%, 27%)',
      'white': 'hsl(0, 0%, 100%)'

    },
  
    extend: {
      fontFamily: {
        'outfit': ['Outfit','sans-serif'],
        
    },

    maxWidth: {
      'xs': '300px',
      'sm': '350px'
    }


  },

  plugins: [],
}
}