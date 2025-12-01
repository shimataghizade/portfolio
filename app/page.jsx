"use client";

import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 5 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h3" fontWeight="bold">
          Hi, I'm Shima 👋
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, opacity: 0.8 }}>
          Front-End Developer | React & Next.js
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 4 }}>
          View My Work
        </Button>
      </Box>

      {/* Projects Preview Section */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
        Some Projects
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Project 1</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Description of project 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Project 2</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Description of project 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Project 3</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Description of project 3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
