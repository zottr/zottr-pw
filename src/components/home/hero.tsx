import React, { FC, useState } from 'react';
// import Image from 'next/image'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link as ScrollLink } from 'react-scroll';
import { StyledButton } from '@/components/styled-button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button, Stack } from '@mui/material';
import TrialDialog from '../home/trial-dialog';

interface Exp {
  label: string;
  value: string;
}
interface ExpItemProps {
  item: Exp;
}

const exps: Array<Exp> = [
  {
    label: 'Students',
    value: '10K+',
  },
  {
    label: 'Quality Course',
    value: '20+',
  },
  {
    label: 'Experience Features',
    value: '10+',
  },
];

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item;
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{
          color: 'secondary.main',
          mb: { xs: 1, md: 2 },
          fontSize: { xs: 34, md: 44 },
          fontWeight: 'bold',
        }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  );
};

const HomeHero: FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

  return (
    <>
      <Box
        id="Hero"
        sx={{
          backgroundColor: 'background.paper',
          position: 'relative',
          pt: { xs: 4, md: 12 },
          pb: { xs: 6, md: 10 },
          px: { xs: 2, md: 10 },
          width: '100%',
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{ flexDirection: { xs: 'column', md: 'unset' } }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: { xs: 4, md: 3 }, mt: 7 }}>
                <Typography
                  component="h2"
                  sx={{
                    textAlign: { xs: 'left', md: 'left' },
                    position: 'relative',
                    fontSize: { xs: 32, md: 64 },
                    letterSpacing: 1.5,
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  Taking orders on Whatsapp works fine. Zottr makes it
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
                    {' '}
                    Work Better
                  </Typography>
                </Typography>
              </Box>
              <Box
                sx={{
                  lineHeight: 0,
                  maxWidth: '100%',
                  overflow: 'hidden',
                  display: { xs: 'block', md: 'none' },
                  mt: { xs: -3, md: 0 },
                }}
              >
                <img
                  src="/images/home-hero.svg"
                  width={330}
                  height={330}
                  alt="Hero img"
                />
              </Box>
              <Box sx={{ mb: 3, mt: 2, width: { xs: '100%', md: '70%' } }}>
                <Typography
                  sx={{
                    color: 'grey.700',
                    lineHeight: 1.4,
                    fontSize: { xs: 16, md: 20 },
                    textAlign: { xs: 'left', md: 'left' },
                  }}
                >
                  {
                    'Zottr helps you go beyond chats — create a modern online store, manage orders and promote your brand across WhatsApp and more.'
                  }
                </Typography>
              </Box>
              {/* <Box
              sx={{
                '& button': { mr: 2 },
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                mt: { xs: 0, md: 2 },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  height: { xs: '4rem', md: '5rem' },
                  width: { xs: '100%', md: '40%' },
                  borderRadius: '15px',
                  bgcolor: 'secondary.light',
                  '&:hover, &:focus, &:active': {
                    bgcolor: 'secondary.dark',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    fontWeight: 500,
                    textTransform: 'none',
                    color: 'grey.900',
                  }}
                >
                  Launch Your Store
                </Typography>
              </Button>
            </Box> */}
              <Stack
                gap={3}
                sx={{
                  '& button': {},
                  display: 'flex',
                  justifyContent: { xs: 'flex-start', md: 'flex-start' },
                  alignItems: { xs: 'flex-start', md: 'flex-start' },
                  mt: { xs: 0, md: 4 },
                }}
              >
                <Typography
                  sx={{
                    color: 'grey.700',
                    lineHeight: 1.4,
                    fontWeight: 500,
                    fontSize: { xs: 18, md: 20 },
                    fontStyle: 'italic',
                    textAlign: { xs: 'left', md: 'left' },
                  }}
                >
                  {'Try Zottr Now – It’s Free!'}
                </Typography>
                <Button
                  onClick={handleDialogOpen}
                  variant="contained"
                  sx={{
                    height: { xs: '4rem', md: '3.6rem' },
                    width: { xs: '100%', md: '35%' },
                    borderRadius: '50px',
                    bgcolor: 'secondary.light',
                    '&:hover, &:focus, &:active': {
                      bgcolor: 'secondary.main',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '1.2rem', md: '1.2rem' },
                      fontWeight: 500,
                      textTransform: 'none',
                      color: 'grey.900',
                    }}
                  >
                    Start My Trial
                  </Typography>
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                lineHeight: 0,
                overflow: 'hidden',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <img
                src="/images/home-hero.svg"
                width={650}
                height={650}
                alt="Hero img"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <TrialDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
      />
    </>
  );
};

export default HomeHero;
