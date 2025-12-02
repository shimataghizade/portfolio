"use client";

import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const skills = [
    "HTML",
    "CSS",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "MUI",
    "Responsive Web Design",
    "Figma to Responsive Frontend",
    "Git & Version Control",
  ];

  return (
    <Container sx={{ mt: 8 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 12 }}>
        <Typography variant="h3" fontWeight="bold">
          Hi, I'm Shima 👋
        </Typography>

        <Typography variant="h5" sx={{ mt: 2, opacity: 0.8 }}>
          React Front-End Developer — Turning Figma designs into responsive
          websites, Git workflow experience
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{ mt: 4 }}
          onClick={() => router.push("/projects")}
        >
          View My Projects
        </Button>
      </Box>

      {/* Skills Section */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
        Skills
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 10 }}>
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            color="primary"
            sx={{ fontSize: "1rem", py: 1 }}
          />
        ))}
      </Box>

      {/* Featured Projects */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Featured Work
      </Typography>

      <Grid container spacing={4}>
        {[1, 2, 3].map((i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6">Project {i}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Brief description of this project...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => router.push("/projects")}
        >
          See All Projects →
        </Button>
      </Box>
    </Container>
  );
}
