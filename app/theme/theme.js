"use client";
import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#ffffff",
            paper: "#fafafa",
          },
          text: {
            primary: "#000000",
            secondary: "#333333",
          },
        }
      : {
          background: {
            default: "#121212",
            paper: "#1e1e1e",
          },
          text: {
            primary: "#ffffff",
            secondary: "#cccccc",
          },
        }),
  },

  typography: {
    allVariants: {
      color: mode === "light" ? "#000" : "#fff",
    },
  },
});

export const createMyTheme = (mode) => createTheme(getDesignTokens(mode));
