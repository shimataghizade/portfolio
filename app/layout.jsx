import "./globals.css";
import Navbar from "./components/Navbar";
import ThemeProviderClient from "./components/ThemeProviderClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderClient>
          <Navbar />
          {children}
        </ThemeProviderClient>
      </body>
    </html>
  );
}
