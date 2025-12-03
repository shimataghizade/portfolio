// app/about/page.jsx
"use client";

import React from "react";
import { Container, Typography, Box, Chip, Grid } from "@mui/material";

const skills = [
  "React.js",
  "Next.js",
  "MUI",
  "Zustand",
  "React Hook Form",
  "JavaScript",
  "HTML",
  "CSS",
];

export default function AboutPage() {
  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        About Me
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        I am a Front-End Developer with 4 years of experience specializing in
        React.js and building responsive, modern web applications. I have worked
        on both commercial and internal projects, implementing complex UIs,
        state management, and real-time features.
      </Typography>

      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        Key Skills
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {skills.map((skill) => (
          <Chip key={skill} label={skill} color="primary" />
        ))}
      </Box>
    </Container>
  );
}
