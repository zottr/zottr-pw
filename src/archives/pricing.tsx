import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
} from '@mui/material';
import { GlobalStyles } from '@mui/material';

export default function PricingPage() {
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

      <Box sx={{ textAlign: 'center', mb: 6 }}>
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
          Pricing Plans
        </Typography>
        <Typography sx={{ color: 'grey.700', fontSize: { xs: 14, md: 16 } }}>
          Choose the plan that works best for your business.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{ borderColor: 'grey.300', boxShadow: 1 }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Basic Plan
              </Typography>
              <Typography variant="h4" sx={{ mb: 2 }}>
                ₹499
              </Typography>
              <Typography sx={{ mb: 2, color: 'grey.700' }}>
                Per Month
              </Typography>
              <Typography sx={{ color: 'grey.600' }}>
                Perfect for small businesses just getting started.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{
              borderColor: 'primary.main',
              borderWidth: 2,
              boxShadow: 3,
              position: 'relative',
              backgroundColor: 'primary.light',
              color: 'primary.contrastText',
            }}
          >
            <CardContent>
              <Chip
                label="Best Value"
                color="secondary"
                size="small"
                sx={{ position: 'absolute', top: 16, right: 16 }}
              />
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: 'primary.contrastText' }}
              >
                3-Month Starter
              </Typography>
              <Typography
                variant="h4"
                sx={{ mb: 2, color: 'primary.contrastText' }}
              >
                ₹999
              </Typography>
              <Typography sx={{ mb: 2, color: 'primary.contrastText' }}>
                One-Time
              </Typography>
              <Typography sx={{ color: 'primary.contrastText' }}>
                A special one-time offer to try everything for 3 months.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{ borderColor: 'grey.300', boxShadow: 1 }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pro Plan
              </Typography>
              <Typography variant="h4" sx={{ mb: 2 }}>
                ₹1499
              </Typography>
              <Typography sx={{ mb: 2, color: 'grey.700' }}>
                Per Month
              </Typography>
              <Typography sx={{ color: 'grey.600' }}>
                Best for growing stores needing advanced features.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
