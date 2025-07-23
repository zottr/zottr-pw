import { Box, Container, Typography } from '@mui/material';
import { GlobalStyles } from '@mui/material';

export default function ContactUs() {
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
          Contact Us
        </Typography>
      </Box>

      <Typography
        sx={{ mb: 2, color: 'grey.700', fontSize: { xs: 14, md: 16 } }}
        paragraph
      >
        We would love to hear from you! Feel free to reach out through the
        following channels:
      </Typography>

      <ul>
        <li>
          <Typography component="span" sx={{ color: 'grey.800' }}>
            Phone: +91-9509146376
          </Typography>
        </li>
        <li>
          <Typography component="span" sx={{ color: 'grey.800' }}>
            Email: hello@zottr.com
          </Typography>
        </li>
        <li>
          <Typography component="span" sx={{ color: 'grey.800' }}>
            Address: 4/502, near Hanuman Temple, Shiwajinagar, Campu, Tonk,
            Rajasthan 304001, India
          </Typography>
        </li>
      </ul>
    </Container>
  );
}
