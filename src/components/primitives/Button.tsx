import { styled } from "@/src/stitches.config";

export const Button = styled("button", {
  border: 0,
  color: "white",
  borderRadius: "8px",

  "&:hover": {
    background: "#456",
  },

  variants: {
    type: {
      primary: {
        background: "$primary",
      },
      secondary: {
        background: "red",
      },
    },
  },

  defaultVariants: {
    type: "primary",
  },
});
