import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const collageImages = [
  {
    src: '/product-images/product_image_2.png',
    alt: 'Zottr mobile storefront preview 2',
    sx: {
      width: { xs: 104, md: 130 },
      height: { xs: 142, md: 178 },
      top: { xs: -4, md: 2 },
      left: { xs: 108, md: 154 },
      transform: 'rotate(-4deg)',
    },
  },
  {
    src: '/product-images/product_image_3.png',
    alt: 'Zottr mobile storefront preview 3',
    sx: {
      width: { xs: 104, md: 130 },
      height: { xs: 142, md: 178 },
      top: { xs: 40, md: 68 },
      right: { xs: 4, md: 14 },
      transform: 'rotate(8deg)',
    },
  },
  {
    src: '/product-images/product_image_4.png',
    alt: 'Zottr mobile storefront preview 4',
    sx: {
      width: { xs: 104, md: 130 },
      height: { xs: 142, md: 178 },
      bottom: { xs: 38, md: 64 },
      right: { xs: 2, md: 12 },
      transform: 'rotate(-7deg)',
    },
  },
  {
    src: '/product-images/product_image_5.png',
    alt: 'Zottr mobile storefront preview 5',
    sx: {
      width: { xs: 104, md: 130 },
      height: { xs: 142, md: 178 },
      bottom: { xs: -4, md: 2 },
      left: { xs: 108, md: 154 },
      transform: 'rotate(4deg)',
    },
  },
  {
    src: '/product-images/product_image_6.png',
    alt: 'Zottr mobile storefront preview 6',
    sx: {
      width: { xs: 104, md: 130 },
      height: { xs: 142, md: 178 },
      bottom: { xs: 38, md: 64 },
      left: { xs: 2, md: 12 },
      transform: 'rotate(7deg)',
    },
  },
  {
    src: '/product-images/product_image_7.png',
    alt: 'Zottr mobile storefront preview 7',
    sx: {
      width: { xs: 104, md: 130 },
      height: { xs: 142, md: 178 },
      top: { xs: 40, md: 68 },
      left: { xs: 4, md: 14 },
      transform: 'rotate(-8deg)',
    },
  },
];

const HomeMobileFirst: FC = () => {
  return (
    <Box
      id="mobile-first"
      sx={{
        px: { xs: 2, md: 10 },
        pt: { xs: 6, md: 8 },
        pb: { xs: 6, md: 10 },
        backgroundColor: 'background.paper',
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 6 }}
        alignItems="center"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              width: { xs: 320, md: 430 },
              height: { xs: 320, md: 430 },
              overflow: 'visible',
              mx: 'auto',
              borderRadius: '50%',
              background:
                'radial-gradient(circle at center, rgba(244, 222, 151, 0.45) 0%, rgba(255, 245, 224, 0.85) 42%, rgba(255, 255, 255, 0) 72%)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: { xs: 44, md: 58 },
                borderRadius: '50%',
                border: '1px dashed',
                borderColor: 'rgba(34, 34, 34, 0.14)',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: { xs: 84, md: 108 },
                left: { xs: 96, md: 126 },
                width: { xs: 128, md: 172 },
                height: { xs: 174, md: 234 },
                overflow: 'hidden',
                borderRadius: 4,
                border: '6px solid',
                borderColor: 'common.white',
                boxShadow: '0 24px 56px rgba(45, 45, 45, 0.2)',
                bgcolor: 'grey.100',
                zIndex: 5,
              }}
            >
              <Box
                component="img"
                src="/product-images/product_image_1.png"
                alt="Zottr mobile storefront preview main"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>

            {collageImages.map((image) => (
              <Box
                key={image.src}
                sx={{
                  position: 'absolute',
                  overflow: 'hidden',
                  borderRadius: 3,
                  border: '2px solid',
                  borderColor: 'common.white',
                  boxShadow: '0 18px 36px rgba(45, 45, 45, 0.18)',
                  bgcolor: 'common.white',
                  zIndex: 3,
                  ...image.sx,
                }}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 32, md: 52 },
              lineHeight: 1.2,
              fontWeight: 500,
              color: 'grey.900',
              mb: { xs: 2, md: 4 },
              textAlign: { xs: 'left', md: 'left' },
            }}
          >
            Mobile First Design
            <br />
            for the{' '}
            <Typography
              component="mark"
              sx={{
                position: 'relative',
                color: 'primary.main',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                backgroundColor: 'unset',
                lineHeight: 'inherit',
              }}
            >
              Modern Social Seller
            </Typography>
          </Typography>

          <Typography
            sx={{
              color: 'grey.700',
              fontSize: { xs: 16, md: 20 },
              lineHeight: 1.4,
              maxWidth: { xs: '100%', md: '92%' },
            }}
          >
            Zottr is designed around how today&apos;s social sellers actually
            work: from WhatsApp, Instagram, and a phone that&apos;s always
            within reach. Manage products, respond faster, update your store,
            and keep orders moving without needing to sit at a desk or learn
            complicated software.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeMobileFirst;
