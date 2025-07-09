/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ffff', // your custom color
      },
      screens: {
        // your custom breakpoints
        '3xl': '1600px',
      },
      extend: {
        colors: { 
            'primary': '#009D71', // Example primary color
            'secondary': '#F0F0F0', // Example secondary color
            'accent': '#4a5568',
            'white' : '#FFFFFF' // Example accent color
        },
        boxShadow: {
          custom: "0px 4px 54px 10px rgba(18,19,21, 0.06)",
        },
        backgroundImage: {
        hero: "url('/Ultrainfo_Hero.png')", // asegúrate que el archivo exista en /public
      },
      }
    },
  },
  plugins: [],
};
