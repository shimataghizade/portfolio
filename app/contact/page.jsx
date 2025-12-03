// app/contact/page.jsx
"use client";

import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // در آینده می‌توان API یا ایمیل اضافه کرد
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Contact Me
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Thank you! Your message has been sent.
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 600 }}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained">
          Send Message
        </Button>
      </Box>
    </Container>
  );
}
