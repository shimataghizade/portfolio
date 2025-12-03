"use client";

import { createContext, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createMyTheme } from "../theme/theme";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      mode, // ← حتماً اضافه شود
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [mode]
  );

  const theme = useMemo(() => createMyTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* مهم! پس‌زمینه و متن را طبق تم درست می‌کند */}
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
