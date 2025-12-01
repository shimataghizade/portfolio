"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";

export default function ThemeProviderClient({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
