import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      primary: "#B00000",
      secondary: "#EFA438",

      background: "#111111",
      dark: "#666666",
      mid: "#AAAAAA",
      light: "#CCCCCC",
      foreground: "#EEEEEE",
    },

    fonts: {
      tiles: "Oswald, sans-serif",
      body: "Roboto, sans-serif",
    },

    lineHeights: {
      base: 1.5,
    },

    fontSizes: {
      title1: "2.625rem",
      title2: "2rem",
      title3: "1.5rem",
      title4: "1.125rem",

      large: "1.125rem",
      regular: "1rem",
      small: "0.875rem",
    },

    space: {
      4: 4,
      8: 8,
    },
  },
});
