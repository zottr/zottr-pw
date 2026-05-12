import { Box, Container, Typography } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import Head from 'next/head';

export default function DataDeletionPolicy() {
  const ListItem = ({ children }: { children: React.ReactNode }) => (
    <Typography
      component="li"
      sx={{
        color: 'grey.700',
        fontSize: { xs: 14, md: 16 },
      }}
    >
      {children}
    </Typography>
  );

  return (
    <>
      <Head>
        <title>Data Deletion Policy | Zottr</title>
        <meta
          name="description"
          content="Read how Zottr users can request deletion of their account and associated data."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Data Deletion Policy | Zottr" />
        <meta
          property="og:description"
          content="Read how Zottr users can request deletion of their account and associated data."
        />
        <meta
          property="og:url"
          content="https://zottr.com/data-deletion-policy"
        />
        <meta
          property="og:image"
          content="https://zottr.com/images/home-feature.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Data Deletion Policy | Zottr" />
        <meta
          name="twitter:description"
          content="Read how Zottr users can request deletion of their account and associated data."
        />
        <meta
          name="twitter:image"
          content="https://zottr.com/images/home-feature.svg"
        />
      </Head>

      <Container maxWidth="md" sx={{ my: 6, pt: 8 }}>
        <GlobalStyles
          styles={{
            strong: {
              color: 'grey.800',
              fontWeight: 600,
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
            Data Deletion Policy
          </Typography>
        </Box>

        <Typography
          sx={{
            mb: 2,
            color: 'grey.700',
            fontSize: { xs: 14, md: 16 },
          }}
          paragraph
        >
          Zottr provides users with a way to request deletion of their account
          and associated data in accordance with applicable laws and platform
          policies.
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
          How to Request Deletion
        </Typography>
        <Typography
          sx={{
            mb: 2,
            color: 'grey.700',
            fontSize: { xs: 14, md: 16 },
          }}
          paragraph
        >
          Users may request deletion of their Zottr account and associated data
          by emailing <strong>mail@zottr.com</strong> from their registered
          email address with the subject <strong>Data Deletion Request</strong>.
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
          What Happens Next
        </Typography>
        <Typography
          sx={{
            mb: 2,
            color: 'grey.700',
            fontSize: { xs: 14, md: 16 },
          }}
          paragraph
        >
          Once the request is received, Zottr may verify the identity of the
          requester before processing the deletion request. Upon verification,
          Zottr will delete or anonymize applicable account data in accordance
          with legal, security, and operational requirements.
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
          Data Covered by This Request
        </Typography>
        <Typography
          sx={{
            mb: 2,
            color: 'grey.700',
            fontSize: { xs: 14, md: 16 },
          }}
          paragraph
        >
          Depending on the services used, a deletion request may include:
        </Typography>
        <ul>
          <ListItem>Zottr account profile and account-related data</ListItem>
          <ListItem>Connected social media integration data</ListItem>
          <ListItem>Associated business information stored in Zottr</ListItem>
        </ul>

        <Typography
          component="h2"
          variant="h4"
          sx={{
            mt: 2,
            mb: 1,
            fontSize: { xs: 16, md: 20 },
            color: 'grey.900',
            fontWeight: 500,
          }}
        >
          Connected Meta Data
        </Typography>
        <Typography
          sx={{
            mb: 2,
            color: 'grey.700',
            fontSize: { xs: 14, md: 16 },
          }}
          paragraph
        >
          Users may also request removal of connected Meta platform data by
          disconnecting their linked accounts within the Zottr platform settings,
          where available, or by contacting us directly at{' '}
          <strong>mail@zottr.com</strong>.
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
          Contact Us
        </Typography>
        <Typography
          sx={{
            mb: 2,
            color: 'grey.700',
            fontSize: { xs: 14, md: 16 },
          }}
          paragraph
        >
          If you have any questions about data deletion requests, please contact
          us at <strong>mail@zottr.com</strong>.
        </Typography>
      </Container>
    </>
  );
}
