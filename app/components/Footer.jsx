// components/Footer.jsx
"use client";

import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 6,
        borderTop: "1px solid #e0e0e0",
        textAlign: "center",
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <MuiLink href="mailto:your.email@example.com" underline="hover">
          your.email@example.com
        </MuiLink>
      </Typography>
    </Box>
  );
}
