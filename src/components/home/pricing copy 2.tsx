import React, { FC } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  GlobalStyles,
  Button,
  Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  'Create and manage your product catalogue',
  'Organize products into categories',
  'Run ads and promotions using banners',
  'Offer discounts across products or categories',
  'Customer order and order status management',
  'Customer communication via WhatsApp notifications',
  'Theme customization tailored to your store type',
  'Convert your store into an Android and iOS mobile app',
  'Ship worldwide and track deliveries using Shiprocket',
  'Use your own custom domain (e.g. yourstore.com)',
];

const plans = [
  {
    name: 'Free Trial',
    price: 'Free',
    description: 'Full access for 2 months.',
    button: 'Start Free Trial',
  },
  {
    name: 'Monthly',
    price: '₹499 / month',
    description: 'Flexible monthly billing. Cancel anytime.',
    button: 'Start Building',
    highlight: true,
  },
  {
    name: 'Annual',
    price: '₹4999 / year',
    description: 'Pay yearly and save 18% compared to monthly.',
    button: 'Start Building',
    badge: 'Save 18%',
  },
];

const HomePricing: FC = () => {
  return (
    <Box id="Pricing" sx={{ py: { xs: 8, md: 12 } }}>
      <GlobalStyles
        styles={{
          strong: {
            color: 'grey.800',
            fontWeight: 500,
          },
        }}
      />

      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: 26, md: 48 },
            fontWeight: 500,
            color: 'grey.900',
            letterSpacing: 1.5,
            mb: 2,
          }}
        >
          Pricing Plans
        </Typography>

        <Typography
          sx={{
            color: 'grey.700',
            fontSize: { xs: 16, md: 20 },
          }}
        >
          All plans include the same powerful features.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.name}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                p: 2,
                borderRadius: 4,
                borderColor: plan.highlight ? 'primary.main' : 'grey.300',
                borderWidth: plan.highlight ? 2 : 1,
                boxShadow: plan.highlight ? 4 : 1,
                position: 'relative',
              }}
            >
              {plan.highlight && (
                <Chip
                  label="Most Popular"
                  color="primary"
                  size="small"
                  sx={{ position: 'absolute', top: 16, right: 16 }}
                />
              )}

              {plan.badge && (
                <Chip
                  label={plan.badge}
                  color="secondary"
                  size="small"
                  sx={{ position: 'absolute', top: 16, right: 16 }}
                />
              )}

              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {plan.name}
                </Typography>

                <Typography variant="h4" sx={{ mb: 2 }}>
                  {plan.price}
                </Typography>

                <Typography sx={{ color: 'grey.600', mb: 3 }}>
                  {plan.description}
                </Typography>

                <Stack spacing={1.4} sx={{ mb: 4 }}>
                  {features.map((feature) => (
                    <Stack
                      key={feature}
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                    >
                      <CheckCircleIcon
                        sx={{ fontSize: 18, color: 'success.main' }}
                      />
                      <Typography
                        sx={{
                          fontSize: 15,
                          color: 'grey.700',
                        }}
                      >
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Button
                  variant={plan.highlight ? 'contained' : 'outlined'}
                  fullWidth
                  sx={{
                    borderRadius: 999,
                    py: 1.4,
                    textTransform: 'none',
                    fontWeight: 500,
                  }}
                >
                  {plan.button}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePricing;
