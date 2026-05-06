import { Box, Container, Typography } from '@mui/material';
import { GlobalStyles } from '@mui/material';

export default function CancellationRefundPolicy() {
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
          Cancellation & Refund Policy
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
        Refund
      </Typography>
      <Typography
        sx={{
          mb: 2,
          color: 'grey.700',
          fontSize: { xs: 14, md: 16 },
        }}
        paragraph
      >
        At Zottr, we strive to provide the best experience for our customers. As
        we are a SaaS-based platform offering digital services to help you build
        and manage your online store, we do not offer refunds once a
        subscription has been activated.
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
        Cancellation
      </Typography>
      <Typography
        sx={{
          mb: 2,
          color: 'grey.700',
          fontSize: { xs: 14, md: 16 },
        }}
        paragraph
      >
        You are free to cancel your subscription at any time. Upon cancellation,
        your subscription will remain active until the end of the current
        billing cycle, and you will not be charged further.
      </Typography>

      <Typography
        sx={{
          mb: 2,
          color: 'grey.700',
          fontSize: { xs: 14, md: 16 },
        }}
        paragraph
      >
        Please review your subscription plan and ensure it meets your needs
        before proceeding with the purchase. If you have any concerns, feel free
        to reach out to us at <strong>hello@zottr.com</strong>.
      </Typography>
    </Container>
  );
}
