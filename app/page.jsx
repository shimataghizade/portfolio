"use client";

import React from "react";
import { Container, Typography, Button, Box, Stack } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container
      sx={{
        mt: 12,
        mb: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
        Hi, I'm Shima
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ mb: 4, maxWidth: 600 }}
      >
        Front-End Developer with 4 years of experience building modern,
        responsive web applications using React.js and Next.js. Skilled in state
        management, form validation, and creating interactive user interfaces.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Link href="/projects" passHref>
          <Button variant="contained" color="primary">
            View Projects
          </Button>
        </Link>
        <Link href="/contact" passHref>
          <Button variant="outlined" color="primary">
            Contact Me
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}
