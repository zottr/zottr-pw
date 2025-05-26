import React, { FC } from 'react';
import { FooterNavigation, FooterDescription } from '@/components/footer';
import { Stack } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

const Footer: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      gap={10}
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        py: { xs: 6, md: 10 },
        mt: { xs: -3 },
        px: { xs: 0, md: 40 },
        color: 'primary.contrastText',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {!isMobile && <FooterDescription />}
      <FooterNavigation />
      {isMobile && <FooterDescription />}
    </Stack>
  );
};

export default Footer;
