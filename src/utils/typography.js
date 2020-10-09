import Typography from "typography";

const typography = new Typography({
  googleFonts: [
    {
      name: "Raleway",
      styles: ["700"],
    },
    {
      name: "Lato",
      styles: ["400"],
    },
  ],
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
