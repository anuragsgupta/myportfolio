/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/resources/wp1.jpg')",
        'hero-pattern2': "url('/src/resources/wp2.jpg')",
        'hero-pattern3': "url('/src/resources/wp3.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    animation: {
      "border" : "linear 3s ease-in-out",
    },

      colors: {
       
      },
      text: {
          "mmd": "17px"
      }
    },
  },
  plugins: [],
}
