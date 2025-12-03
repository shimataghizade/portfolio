import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProviderClient from "./components/ThemeProviderClient";
import { Box, Grid } from "@mui/material";
import ThemeContextProvider from "./context/ThemeContext";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderClient>
          <ThemeContextProvider>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            <Footer />
          </ThemeContextProvider>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
