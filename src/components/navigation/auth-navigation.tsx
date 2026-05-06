import React, { FC } from 'react';
import { Button, Stack, Typography } from '@mui/material';

interface AuthNavigationProps {
  onItemClick?: () => void;
}

const SELLER_SIGNUP_URL = 'https://seller.zottr.com/signup';
const SELLER_LOGIN_URL = 'https://seller.zottr.com/login';

const AuthNavigation: FC<AuthNavigationProps> = ({ onItemClick }) => {
  return (
    <Stack
      direction="row"
      gap={2}
      sx={{ '& button:first-child': { mr: 0 }, mr: { xs: 0, md: 3 } }}
    >
      <Button
        component="a"
        href={SELLER_SIGNUP_URL}
        onClick={onItemClick}
        variant="contained"
        sx={{
          // height: { xs: '4rem', md: '4.6rem' },
          // width: { xs: '100%', md: '40%' },
          borderRadius: '50px',
          bgcolor: 'primary.main',
          '&:hover, &:focus, &:active': {
            bgcolor: 'primary.dark',
          },
          px: { xs: 5, md: 4 },
          py: { xs: 1.4, md: 1.5 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.2rem', md: 18 },
            // fontWeight: 500,
            textTransform: 'none',
            color: 'white',
          }}
        >
          Try Zottr
        </Typography>
      </Button>
      <Button
        component="a"
        href={SELLER_LOGIN_URL}
        onClick={onItemClick}
        variant="outlined"
        sx={{
          // height: { xs: '4rem', md: '4.6rem' },
          // width: { xs: '100%', md: '40%' },
          borderRadius: '50px',
          borderColor: 'primary.main',
          '&:hover, &:focus, &:active': {
            borderColor: 'primary.dark',
          },
          px: { xs: 5, md: 4 },
          py: { xs: 1.4, md: 1.5 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.2rem', md: 18 },
            // fontWeight: 500,
            textTransform: 'none',
            color: 'primary.main',
          }}
        >
          Sign In
        </Typography>
      </Button>
      {/* <StyledButton disableHoverEffect={true} variant="outlined">
        Sign In
      </StyledButton>
      <StyledButton disableHoverEffect={true}>Sign Up</StyledButton> */}
    </Stack>
  );
};

export default AuthNavigation;
