"use client";

import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  CardActions,
  Button,
  Pagination,
  Box,
} from "@mui/material";

// -----------------------------
// 🔹 Projects Data
// فقط کافیست پروژه جدید اضافه کنید، صفحه خودکار آپدیت می‌شود
// -----------------------------
const projectsData = [
  {
    title: "Enterprise Workflow Management Platform",
    subtitle: "Commercial Product for multiple steel factories",
    description:
      "Developed the front-end of a large-scale process management system using MUI. Implemented and customized BPMN.io flows for designing and visualizing organizational processes. Built process status dashboards, migrated Context to Zustand, integrated with Keycloak, enabled real-time collaboration using WebSocket, created dynamic forms and interactive organization charts with rc-tree.",
    tech: [
      "React.js",
      "Zustand",
      "MUI",
      "WebSocket",
      "BPMN.io",
      "rc-tree",
      "Axios",
      "JWT",
      "REST API",
      "Keycloak",
    ],
    link: null, // اضافه کنید اگر لینک دمو یا گیت دارید
  },
  {
    title: "Internal Data Transfer Tool",
    subtitle: "In-house project for database data flow",
    description:
      "Developed the front-end of an internal data transfer tool. Implemented form validation using React Hook Form, managed application state with Zustand, and built reusable UI components and input forms for internal users.",
    tech: [
      "React.js",
      "Zustand",
      "React Hook Form",
      "MUI",
      "Axios",
      "REST API",
    ],
    link: null,
  },
  // پروژه‌های آینده را اینجا اضافه کنید
];

// -----------------------------
// 🔹 Constants
// -----------------------------
const ITEMS_PER_PAGE = 3;

// -----------------------------
// 🔹 Projects Page Component
// -----------------------------
export default function ProjectsPage() {
  const [page, setPage] = useState(1);
  const count = Math.ceil(projectsData.length / ITEMS_PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedProjects = projectsData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4, textAlign: "center" }}
      >
        My Projects
      </Typography>

      <Grid container spacing={4}>
        {displayedProjects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ mb: 1, color: "text.secondary" }}
                >
                  {project.subtitle}
                </Typography>
                <Typography sx={{ fontSize: 14, mb: 2 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.tech.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      color="primary"
                    />
                  ))}
                </Box>
              </CardContent>
              {project.link && (
                <CardActions>
                  <Button size="small" href={project.link} target="_blank">
                    View
                  </Button>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      {count > 1 && (
        <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={count}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Box>
      )}
    </Container>
  );
}
