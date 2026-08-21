import { Box, Container, GlobalStyles, Typography } from '@mui/material';

const founderCards = [
  {
    name: 'Shilpi',
    image: '/images/founders/shilpi-jain.jpg',
    alt: 'Shilpi Jain',
  },
  {
    name: 'Rohit',
    image: '/images/founders/rohit-saxena.jpg',
    alt: 'Rohit Saxena',
  },
];

export default function AboutUs() {
  return (
    <Container maxWidth="md" sx={{ my: 6, pt: 8 }}>
      <GlobalStyles
        styles={{
          strong: {
            color: '#111827',
            fontWeight: 600,
          },
        }}
      />

      <Box
        sx={{
          mb: 4,
          borderRadius: 4,
          backgroundColor: '#fff',
          border: '1px solid',
          borderColor: 'grey.400',
          px: { xs: 3, md: 5 },
          py: { xs: 4, md: 5 },
          textAlign: 'center',
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 28, md: 42 },
            lineHeight: 1.15,
            fontWeight: 600,
            color: 'grey.900',
            mb: 2,
          }}
        >
          About Zottr
        </Typography>

        <Typography
          sx={{
            mx: 'auto',
            maxWidth: 760,
            color: 'grey.700',
            fontSize: { xs: 15, md: 18 },
            lineHeight: 1.8,
          }}
        >
          Zottr helps modern sellers build a professional online store, manage
          orders with ease, and grow their business across channels like
          WhatsApp and Instagram without depending on complex tools.
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gap: 2.5, mb: 2 }}>
        <Typography
          sx={{
            color: 'grey.700',
            fontSize: { xs: 15, md: 17 },
            lineHeight: 1.9,
          }}
        >
          Founded by <strong>Rohit Saxena</strong> and{' '}
          <strong>Shilpi Jain</strong>, Zottr is shaped by more than a decade of
          hands-on software development experience across product-led technology
          companies.
        </Typography>

        <Typography
          sx={{
            color: 'grey.700',
            fontSize: { xs: 15, md: 17 },
            lineHeight: 1.9,
          }}
        >
          We started Zottr with a clear belief: powerful commerce tools should
          not be limited to large brands or teams with deep technical resources.
          Small businesses, independent sellers, and community-led ventures
          deserve technology that is simple to adopt, practical to run, and
          built around how they actually sell every day.
        </Typography>

        <Typography
          sx={{
            color: 'grey.700',
            fontSize: { xs: 15, md: 17 },
            lineHeight: 1.9,
          }}
        >
          Zottr is designed as an end-to-end solution for social commerce. From
          creating a polished storefront and managing products to running social
          media marketing, handling orders, sending customer notifications,
          managing shipping workflows, and supporting day-to-day operations,
          Zottr brings the essential pieces together in one place.
        </Typography>

        <Typography
          sx={{
            color: 'grey.700',
            fontSize: { xs: 15, md: 17 },
            lineHeight: 1.9,
          }}
        >
          Our mission is to make online selling more accessible for Indian
          entrepreneurs by offering an affordable, professional, and
          easy-to-manage platform that helps them launch faster, market better,
          and scale with confidence from day one.
        </Typography>
      </Box>

      <Box
        sx={{
          borderTop: '1px solid',
          borderColor: 'grey.200',
          pt: 3,
        }}
      >
        <Typography
          component="h2"
          sx={{
            textAlign: 'center',
            fontSize: { xs: 22, md: 30 },
            fontWeight: 600,
            color: 'grey.900',
            mb: 1,
          }}
        >
          Founders
        </Typography>

        <Typography
          sx={{
            textAlign: 'center',
            color: 'grey.700',
            fontSize: { xs: 16, md: 18 },
            mb: 4,
          }}
        >
          Building practical commerce tools for the next generation of digital
          sellers.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
            gap: 3,
          }}
        >
          {founderCards.map((founder) => (
            <Box
              key={founder.name}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'grey.200',
                backgroundColor: '#fff',
                boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  px: { xs: 2, md: 3 },
                  pt: 3,
                }}
              >
                <Box
                  component="img"
                  src={founder.image}
                  alt={founder.alt}
                  sx={{
                    display: 'block',
                    width: '100%',
                    maxWidth: { xs: 220, md: 260 },
                    height: 'auto',
                  }}
                />
              </Box>

              <Typography
                sx={{
                  py: 2,
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 600,
                  color: 'grey.900',
                }}
              >
                {founder.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
