import React, { FC } from 'react'
// import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './benefit.data'
import { useMediaQuery } from '@mui/material'

interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))

const HomeBenefit: FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const imageWidth = isMobile ? 340 : 650
  const imageHeight = isMobile ? 340 : 650

  return (
    <Box
      id="benefit"
      sx={{
        pb: { xs: 0, md: 14 },
        pt: { xs: 5, md: 0 },
        mt: { xs: -8, md: -8 },
        px: { xs: 2, md: 10 },
        backgroundColor: 'background.paper',
      }}
    >
      {/* <Container> */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Box sx={{ position: 'relative', ml: { xs: 0, md: -10 }, width: '100%', height: '100%' }}>
            <img src="/images/home-feature.svg" width={imageWidth} height={imageHeight} alt="Feature img" />
          </Box>
        </Grid>
        <Grid item xs={12} md={7} sx={{}}>
          <Typography
            component="h2"
            sx={{
              position: 'relative',
              fontSize: { xs: 32, md: 64 },
              ml: { xs: 0, md: 4 },
              mt: { xs: -2, md: 13 },
              mb: { xs: 2, md: 5 },
              lineHeight: 1.2,
              fontWeight: 500,
              // textAlign: 'end',
            }}
          >
            Stay Organized.
            <br />
            Boost Sales.
            <br />
            Build{' '}
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
              Stunning Stores. <br />
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: 'grey.700',
              mb: 2,
              ml: { xs: 0, md: 4 },
              fontSize: { xs: 16, md: 22 },
              lineHeight: 1.4,
              // textAlign: 'end',
            }}
          >
            Why should big brands have all the fancy tools? Zottr brings the same power to your phone. Whether you sell
            sarees, pickles, or home-made candles, you get :
          </Typography>
        </Grid>
        <Grid item xs={12} container rowSpacing={3} columnSpacing={10} sx={{ mt: { xs: -4, md: -4 } }}>
          {data.map(({ title, description, icon }, index) => (
            <Grid key={String(index)} item xs={12} md={6}>
              <Box
                sx={{
                  px: { xs: -1, md: 3 },
                  py: 1,
                  borderRadius: 25,
                  display: 'flex',
                  alignItems: 'flex-start',
                  height: { xs: 'auto', md: 150 },
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    mr: { xs: 2, md: 3 },
                    backgroundColor: 'secondary.light',
                    borderRadius: '50%',
                    height: { xs: 64, md: 104 },
                    width: { xs: 64, md: 104 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.contrastText',
                    '& svg': {
                      fontSize: { xs: 42, md: 64 },
                      color: 'black',
                    },
                  }}
                >
                  {icon}
                </Box>
                <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: { xs: 18, md: 26 }, mb: 1, color: 'grey.900', fontWeight: 500 }}>
                    {title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: 16, md: 22 }, lineHeight: 1.3, color: 'grey.700' }}
                    variant="subtitle1"
                  >
                    {description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* </Container> */}
    </Box>
  )
}

export default HomeBenefit
