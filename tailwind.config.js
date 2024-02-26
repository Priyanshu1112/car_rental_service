/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        white: "white",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
