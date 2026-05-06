import { Box, Container, Typography } from '@mui/material';
import { GlobalStyles } from '@mui/material';

export default function AboutUs() {
  return (
    <Container maxWidth="md" sx={{ my: 6, pt: 8 }}>
      <GlobalStyles
        styles={{
          strong: {
            color: 'grey.800',
            fontWeight: 500,
          },
        }}
      />
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: 20, md: 40 },
            lineHeight: 1.2,
            fontWeight: 500,
            color: 'grey.900',
          }}
          gutterBottom
        >
          About Us
        </Typography>
      </Box>

      <Typography
        sx={{ mb: 2, color: 'grey.700', fontSize: { xs: 14, md: 16 } }}
        paragraph
      >
        Zottr is built by Rohit and Shilpi — a husband and wife duo who are
        passionate software developers with over a decade of experience.
      </Typography>

      <Typography
        sx={{ mb: 2, color: 'grey.700', fontSize: { xs: 14, md: 16 } }}
        paragraph
      >
        We’ve worked with some of the world’s top product companies and bring
        that experience to solving real-world challenges for Indian individuals,
        small businesses, and communities.
      </Typography>

      <Typography
        sx={{ mb: 2, color: 'grey.700', fontSize: { xs: 14, md: 16 } }}
        paragraph
      >
        Our mission with Zottr is to empower anyone to launch and grow their own
        online store — simply, affordably, and with confidence.
      </Typography>
    </Container>
  );
}
