import React, { FC } from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import type { Navigation } from '@/interfaces/navigation';
import { navigations as headerNavigations } from '@/components/navigation/navigation.data';
import { FooterSectionTitle } from '@/components/footer';
import { Stack } from '@mui/material';

const pageMenu = headerNavigations;

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: '#' },
  { label: 'Privacy Policy', path: '#' },
  { label: 'Terms & Conditions', path: '#' },
  { label: 'FAQ', path: '#' },
];

interface NavigationItemProps {
  label: string;
  path: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={'#'} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1.5,
          color: 'primary.contrastText',
          textAlign: 'center',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  );
};

const FooterNavigation: FC = () => {
  return (
    <Grid
      container
      spacing={{ xs: 0, md: 2 }}
      sx={{ width: { xs: '100%', md: 1000 } }}
    >
      <Grid item xs={6} md={6}>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FooterSectionTitle title="Menu" />
          {pageMenu.map(({ label, path }, index) => (
            <NavigationItem key={index + path} label={label} path={path} />
          ))}
        </Stack>
      </Grid>
      <Grid item xs={6} md={6}>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FooterSectionTitle title="About" />
          {companyMenu.map(({ label, path }, index) => (
            <NavigationItem key={index + path} label={label} path={path} />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default FooterNavigation;
