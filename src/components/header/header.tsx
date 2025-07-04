import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Navigation, AuthNavigation } from '@/components/navigation';
import { useTheme } from '@mui/material/styles';
import { Menu, Close } from '@mui/icons-material';
// import logo from '@/components/logo/zottr_logo_large.svg'
// import Image from 'next/image'

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        position: 'fixed',
        top: 0,
        pt: 1,
        left: 0,
        width: '100%',
        zIndex: (theme) => theme.zIndex.appBar, // keep above other content
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 2,
          px: matchMobileView ? 2 : 0, // no horizontal padding on desktop
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <img
            src="/images/icons/zottr_logo_large.svg"
            alt="Logo"
            height={matchMobileView ? 28 : 32}
            style={{ marginLeft: matchMobileView ? 0 : 20 }}
          />
        </Box>
        <Box
          sx={{
            ml: 'auto',
            display: { xs: 'inline-flex', md: 'none' },
            position: 'fixed',
            left: 0,
          }}
        >
          <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
            <Menu color="primary" sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },

            transition: (theme) => theme.transitions.create(['top']),
            ...(matchMobileView && {
              py: 6,
              backgroundColor: 'background.paper',
              zIndex: 'appBar',
              position: 'fixed',
              height: { xs: '100vh', md: 'auto' },
              top: visibleMenu ? 0 : '-120vh',
              left: 0,
            }),
          }}
        >
          {visibleMenu && matchMobileView && (
            <IconButton
              sx={{
                position: 'fixed',
                top: 10,
                left: 14,
              }}
              onClick={() => setVisibleMenu(!visibleMenu)}
            >
              {/* <Close fontSize="large" color="error" /> */}
              <Close color="primary" sx={{ fontSize: 28 }} />
            </IconButton>
          )}
          <Box />
          <Navigation onItemClick={() => setVisibleMenu(false)} />
          <Box sx={{ mb: { xs: 10, md: 0 } }}>
            <AuthNavigation onItemClick={() => setVisibleMenu(false)} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
