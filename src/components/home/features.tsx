import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import FeatureCardItem2 from '@/components/feature/feature-card-item2'
import { data } from './features.data'
import { Grid } from '@mui/material'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: '-28px !important',
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const HomeOurFeatures: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    // autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  return (
    <Box
      id="Features"
      sx={{
        pt: { xs: 10, md: 10 },
        mt: { xs: -10, md: -10 },
        px: { xs: 2, md: 10 },
        backgroundColor: 'background.paper',
      }}
    >
      <Typography
        variant="h1"
        component="h2"
        sx={{ fontSize: { xs: 32, md: 64 }, lineHeight: 1.2, fontWeight: 500, textAlign: { xs: 'left', md: 'center' } }}
      >
        Design It Your Way. Manage Easily.
        <br /> Sell Like{' '}
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
          A Pro. <br />
        </Typography>
      </Typography>
      <Grid container sx={{ mt: 3 }}>
        {data.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <FeatureCardItem2 key={String(item.id)} item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default HomeOurFeatures
