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
import CheckIcon from '@mui/icons-material/Check';
import React, { FC, MouseEvent, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

// const features = [
//   'List products and categorize them easily',
//   'Run promotions and offer discounts for your customers',
//   'Receive and manage orders, send order updates in real time',
//   'Manage your store via WhatsApp — chats and notifications',
//   'Turn your store into an Android or iOS mobile app (via App plan)',
//   'Ship worldwide and track deliveries via Shiprocket',
// ];

// const features = [
//   'List and categorize products',
//   'Recieve orders and provide real time updates',
//   'Run promotions and discounts',
//   'Manage entire store via WhatsApp',
//   'Turn your store into an Android or iOS app',
//   'Ship worldwide with Shiprocket',
//   'Accept payments via Razorpay',
// ];

const plans = [
  {
    name: 'Free',
    price: '₹0',
    priceSuffix: '/ month',
    description: 'Full Zottr Experience for 1 month',
    button: 'Try Zottr',
    features: [
      'Get full access to all Zottr features for 1 month',
      'Set up your store and explore the platform',
      'Perfect for testing and trying out Zottr',
    ],
  },
  {
    name: 'Monthly',
    price: '₹1499',
    priceSuffix: '/ month',
    description: 'Flexible monthly billing. Cancel anytime.',
    button: 'Try Zottr',
    highlight: true,
    features: [
      'List and categorize products',
      'Receive orders and provide real-time updates',
      'Run promotions and discounts',
      'Manage entire store via WhatsApp',
      'Turn your store into an Android or iOS app',
      'Ship worldwide with Shiprocket',
      'Accept payments via Razorpay',
    ],
  },
  {
    name: 'Annual',
    price: '₹15999',
    priceSuffix: '/ year',
    description: 'Pay once and keep your store running for the entire year.',
    button: 'Try Zottr',
    badge: 'Discount Offer',
    features: [
      'Everything available in the Monthly plan',
      'Save 11% on annual store running costs',
    ],
  },
];

const SELLER_SIGNUP_URL = 'https://seller.zottr.com/signup';

const HomePricing: FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('Free');

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const handleTryZottrClick = (
    event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    event.stopPropagation();
  };

  return (
    <Box
      id="Pricing"
      sx={{
        pt: { xs: 2, md: 0 },
        pb: { xs: 8, md: 8 },
        mt: { xs: -10, md: -14 },
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

      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: 32, md: 52 },
            fontWeight: 500,
            color: 'grey.900',
            letterSpacing: 1.5,
            mb: 2,
          }}
        >
          Pricing Plans
        </Typography>

        {/* <Typography
          sx={{
            color: 'grey.700',
            fontSize: { xs: 16, md: 20 },
          }}
        >
          All plans include the same powerful features.
        </Typography> */}
      </Box>

      <Grid container spacing={{ xs: 3, md: 0 }} justifyContent="center">
        {plans.map((plan) => (
          <Grid
            item
            xs={12}
            md={4}
            key={plan.name}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              variant="outlined"
              onClick={() => setSelectedPlan(plan.name)}
              sx={{
                cursor: 'pointer',
                height: '100%',
                width: '90%',
                p: 0,
                borderRadius: 4,
                borderColor:
                  selectedPlan === plan.name ? 'primary.main' : 'grey.300',
                borderWidth: selectedPlan === plan.name ? 2 : 1,
                boxShadow: selectedPlan === plan.name ? 3 : 1,
                position: 'relative',
              }}
            >
              {plan.name === 'Monthly' && (
                <Chip
                  label="Most Popular"
                  color="secondary"
                  size={isDesktop ? 'medium' : 'small'}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    fontWeight: 500,
                  }}
                />
              )}

              {plan.badge && (
                <Chip
                  label={plan.badge}
                  color="secondary"
                  size={isDesktop ? 'medium' : 'small'}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    fontWeight: 500,
                  }}
                />
              )}

              <CardContent>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 22, md: 24 },
                    mt: { xs: 0, md: 0 },
                    mb: { xs: 1, md: 3 },
                    lineHeight: 1.2,
                    fontWeight: 500,
                    color: 'grey.900',
                  }}
                >
                  {plan.name}
                </Typography>
                <Typography
                  sx={{
                    color: 'grey.600',
                    mb: { xs: 2, md: 2 },
                    fontSize: { xs: 16, md: 16 },
                    // fontWeight: 500,
                  }}
                >
                  {plan.description}
                </Typography>
                <Stack
                  direction="row"
                  sx={{ display: 'flex', alignItems: 'baseline' }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      position: 'relative',
                      fontSize: { xs: 30, md: 34 },
                      mt: { xs: 0, md: 0 },
                      mb: { xs: 1, md: 2 },
                      lineHeight: 1.2,
                      fontWeight: 600,
                      color: 'grey.900',
                    }}
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    sx={{
                      position: 'relative',
                      fontSize: { xs: 20, md: 20 },
                      mt: { xs: 0, md: 0 },
                      mb: { xs: 2, md: 2 },
                      ml: 0.5,
                      lineHeight: 1.2,
                      fontWeight: 500,
                      color: 'grey.700',
                    }}
                  >
                    {plan.priceSuffix}
                  </Typography>
                </Stack>
                <Stack spacing={1.4} sx={{ mb: 4 }}>
                  {plan.features.map((feature) => (
                    <Stack
                      key={feature}
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                    >
                      <CheckIcon sx={{ fontSize: 24, color: 'success.dark' }} />
                      <Typography
                        sx={{
                          fontSize: { xs: 16, md: 16 },
                          color: 'grey.900',
                        }}
                      >
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Button
                  component="a"
                  href={SELLER_SIGNUP_URL}
                  variant={selectedPlan === plan.name ? 'contained' : 'outlined'}
                  fullWidth
                  onClick={handleTryZottrClick}
                  sx={{
                    borderRadius: 999,
                    py: 1.4,
                    textTransform: 'none',
                    fontWeight: 500,
                  }}
                >
                  <Typography sx={{ fontSize: 22 }}>{plan.button}</Typography>
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
