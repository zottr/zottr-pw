import { Box, Container, Typography } from '@mui/material';
import { GlobalStyles } from '@mui/material';

export default function ShippingExchange() {
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
          Shipping & Exchange
        </Typography>
      </Box>

      <Typography
        component="h2"
        variant="h4"
        sx={{
          mb: 1,
          fontSize: { xs: 16, md: 20 },
          color: 'grey.900',
          fontWeight: 500,
        }}
      >
        Shipping
      </Typography>
      <Typography
        sx={{
          mb: 2,
          color: 'grey.700',
          fontSize: { xs: 14, md: 16 },
        }}
        paragraph
      >
        Shipping timelines, charges, serviceability and order fulfilment are
        determined by the individual sellers using Zottr. Delivery estimates
        shown at checkout or shared after order confirmation may vary depending
        on product availability, location, courier timelines and other
        operational factors.
      </Typography>

      <Typography
        sx={{
          mb: 2,
          color: 'grey.700',
          fontSize: { xs: 14, md: 16 },
        }}
        paragraph
      >
        Customers are requested to review shipping details provided on the
        product page or during checkout before placing an order. In case of any
        delay, shipping issue or delivery query, customers should contact the
        concerned seller directly through the support details shared with the
        order.
      </Typography>

      <Typography
        component="h2"
        variant="h4"
        sx={{
          mb: 1,
          fontSize: { xs: 16, md: 20 },
          color: 'grey.900',
          fontWeight: 500,
        }}
      >
        Exchange
      </Typography>
      <Typography
        sx={{
          mb: 2,
          color: 'grey.700',
          fontSize: { xs: 14, md: 16 },
        }}
        paragraph
      >
        Exchange requests, if applicable, are governed by the policies of the
        seller from whom the order was placed. Eligibility for exchange may
        depend on the product category, condition of the product, time since
        delivery and proof of purchase.
      </Typography>

      <Typography
        sx={{
          mb: 2,
          color: 'grey.700',
          fontSize: { xs: 14, md: 16 },
        }}
        paragraph
      >
        Zottr acts as a platform provider for sellers and does not independently
        guarantee exchanges on behalf of every seller. For assistance regarding
        exchanges, damaged items or incorrect shipments, customers should reach
        out to the seller at the earliest or contact us at{' '}
        <strong>hello@zottr.com</strong> if they need additional support.
      </Typography>
    </Container>
  );
}
