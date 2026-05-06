import React, { FC } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  GlobalStyles,
  Button,
} from '@mui/material';

const HomePricing: FC = () => {
  return (
    <Box
      id="Pricing"
      sx={{
        // backgroundColor: 'background.default',
        py: { xs: 8, md: 12 },
      }}
    >
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
            fontSize: { xs: 24, md: 48 },
            lineHeight: 1.2,
            fontWeight: 500,
            color: 'grey.900',
            letterSpacing: 1.5,
          }}
          gutterBottom
        >
          Pricing Plans
        </Typography>
        <Typography
          sx={{
            color: 'grey.700',
            fontSize: { xs: 16, md: 20 },
            fontWeight: 400,
          }}
        >
          Choose the plan that works best for your business.
        </Typography>
      </Box>

      <Grid
        container
        sx={{
          width: '100%',
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Card
            variant="outlined"
            sx={{ borderColor: 'grey.300', boxShadow: 1, width: '90%' }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                2-Month Free Trial
              </Typography>
              <Typography variant="h4" sx={{ mb: 2 }}>
                Free
              </Typography>
              <Typography sx={{ mb: 2, color: 'grey.700' }}>
                2 months access
              </Typography>
              <Typography sx={{ color: 'grey.600', mb: 3 }}>
                Try Zottr with full features for 2 months—no charge.
              </Typography>
              <Button
                // onClick={handleDialogOpen}
                variant="contained"
                sx={{
                  height: { xs: '4rem', md: '3.6rem' },
                  width: { xs: '100%', md: '35%' },
                  borderRadius: '50px',
                  bgcolor: 'secondary.light',
                  '&:hover, &:focus, &:active': {
                    bgcolor: 'secondary.main',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1.2rem', md: '1.2rem' },
                    fontWeight: 500,
                    textTransform: 'none',
                    color: 'grey.900',
                  }}
                >
                  Start My Trial
                </Typography>
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Card
            variant="outlined"
            sx={{ borderColor: 'grey.300', boxShadow: 1, width: '90%' }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Monthly Plan
              </Typography>
              <Typography variant="h4" sx={{ mb: 2 }}>
                ₹499
              </Typography>
              <Typography sx={{ mb: 2, color: 'grey.700' }}>
                Per Month
              </Typography>
              <Typography sx={{ color: 'grey.600', mb: 3 }}>
                Billed monthly. Cancel anytime.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Build My Store
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Card
            variant="outlined"
            sx={{
              borderColor: 'primary.main',
              borderWidth: 2,
              boxShadow: 3,
              position: 'relative',
              backgroundColor: 'primary.light',
              color: 'primary.contrastText',
              width: '90%',
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
                Annual Plan
              </Typography>
              <Typography
                variant="h4"
                sx={{ mb: 2, color: 'primary.contrastText' }}
              >
                ₹4999
              </Typography>
              <Typography sx={{ mb: 2, color: 'primary.contrastText' }}>
                Per Year
              </Typography>
              <Typography sx={{ color: 'primary.contrastText', mb: 3 }}>
                Billed annually — save compared to the monthly plan.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Build My Store
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePricing;
