import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import { StyledButton } from '@/components/styled-button';
import { Button, Typography } from '@mui/material';
import TrialDialog from '../home/trial-dialog';

interface AuthNavigationProps {
  onItemClick?: () => void;
}

const AuthNavigation: FC<AuthNavigationProps> = ({ onItemClick }) => {
  const [openDialog, setOpenDialog] = useState(false);
  // const handleDialogOpen = () => setOpenDialog(true)

  const handleDialogOpen = () => {
    setOpenDialog(true);
    if (onItemClick) onItemClick(); // close drawer on mobile
  };

  const handleDialogClose = () => setOpenDialog(false);

  return (
    <>
      <Box sx={{ '& button:first-child': { mr: 2 }, mr: 2 }}>
        <Button
          onClick={handleDialogOpen}
          variant="contained"
          sx={{
            // height: { xs: '4rem', md: '4.6rem' },
            // width: { xs: '100%', md: '40%' },
            borderRadius: '50px',
            bgcolor: 'primary.main',
            '&:hover, &:focus, &:active': {
              bgcolor: 'primary.dark',
            },
            px: { xs: 4, md: 3 },
            py: { xs: 1, md: 1 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1.2rem', md: 16 },
              fontWeight: 500,
              textTransform: 'none',
              color: 'white',
            }}
          >
            Sign Up
          </Typography>
        </Button>
        <Button
          onClick={handleDialogOpen}
          variant="outlined"
          sx={{
            // height: { xs: '4rem', md: '4.6rem' },
            // width: { xs: '100%', md: '40%' },
            borderRadius: '50px',
            borderColor: 'primary.main',
            '&:hover, &:focus, &:active': {
              borderColor: 'primary.dark',
            },
            px: { xs: 4, md: 3 },
            py: { xs: 1, md: 1 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1.2rem', md: 16 },
              fontWeight: 500,
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
      </Box>
      <TrialDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
      />
    </>
  );
};

export default AuthNavigation;
