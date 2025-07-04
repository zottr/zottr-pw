import React, { FC } from 'react';
// import Image from 'next/image'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Feature } from '@/interfaces/feature';
import { useMediaQuery, useTheme } from '@mui/material';

interface Props {
  item: Feature;
}

const FeatureCardItem2: FC<Props> = ({ item }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const imageWidth = isMobile ? 280 : 280;
  const imageHeight = isMobile ? 280 : 280;
  return (
    <Box
      sx={{
        mx: 1,
        my: 0.5,
        px: { xs: 0, md: 1 },
        py: 1,
      }}
    >
      <Box
        sx={{
          p: 3,
          backgroundColor: 'hsl(42, 80%, 95%)',
          borderRadius: 5,
          height: { xs: 450, md: 520 },
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 1,
            backgroundColor: 'hsl(42, 80%, 92%)',
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            height: { xs: 280, md: 300 },
            mb: 2,
          }}
        >
          <img
            src={item.photo as string}
            width={imageWidth}
            height={imageHeight}
            alt={'Feature ' + item.id}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography
            component="h2"
            variant="h4"
            sx={{
              fontSize: { xs: 22, md: 26 },
              color: 'grey.900',
              fontWeight: 600,
            }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.3,
              color: 'grey.700',
              mt: 1,
              fontWeight: 400,
            }}
            variant="subtitle1"
          >
            {item.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default FeatureCardItem2;
