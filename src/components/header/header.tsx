import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Navigation, AuthNavigation } from '@/components/navigation';
import { Menu, Close } from '@mui/icons-material';
import Link from 'next/link';
// import logo from '@/components/logo/zottr_logo_large.svg'
// import Image from 'next/image'

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

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
          px: { xs: 2, md: 0 },
        }}
      >
        <Link href="/" passHref>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              cursor: 'pointer',
            }}
          >
            <Box
              component="img"
              src="/images/icons/zottr_logo_large.svg"
              alt="Logo"
              sx={{
                width: { xs: 122, md: 140 },
                height: 'auto',
                ml: { xs: 0, md: 2.5 },
              }}
            />
          </Box>
        </Link>
        <Box
          sx={{
            ml: 'auto',
            display: { xs: 'inline-flex', md: 'none' },
            position: 'fixed',
            left: 0,
          }}
        >
          <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
            <Menu color="primary" sx={{ fontSize: 32 }} />
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
            py: { xs: 6, md: 0 },
            backgroundColor: 'background.paper',
            zIndex: 'appBar',
            position: { xs: 'fixed', md: 'static' },
            height: { xs: '100vh', md: 'auto' },
            top: { xs: visibleMenu ? 0 : '-120vh', md: 'auto' },
            left: { xs: 0, md: 'auto' },
          }}
        >
          {visibleMenu && (
            <IconButton
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                position: 'fixed',
                top: 10,
                right: 14,
              }}
              onClick={() => setVisibleMenu(!visibleMenu)}
            >
              {/* <Close fontSize="large" color="error" /> */}
              <Close color="primary" sx={{ fontSize: 32 }} />
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
