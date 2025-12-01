// app/theme.js
import { createTheme } from "@mui/material/styles";

// رنگ‌ها و فونت‌ها
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // آبی استاندارد
    },
    secondary: {
      main: "#f50057", // صورتی
    },
    background: {
      default: "#f5f5f5", // پس‌زمینه روشن
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 400,
    },
  },
});

export default theme;
