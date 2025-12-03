import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProviderClient from "./components/ThemeProviderClient";
import { Grid } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderClient>
          <Grid id="" container flexDirection="column" height="100%">
            <Navbar />
            <Grid sx={{ flexGrow: 1 }}>{children}</Grid>
            <Footer />
          </Grid>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
