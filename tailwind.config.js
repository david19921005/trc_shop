/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        pri: {
          main: "#DECDBA",
          content: "#FBFAEE",
          title: "#9F7E69",
        },
        nav: {
          text:'#999',
          border:'#e5e5e5',
          bg:'#f8f8f8;'
        },
        hover:{
          text:'#666'
        }
      },
    },
  },
  plugins: [],
};
