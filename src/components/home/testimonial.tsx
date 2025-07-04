import React, { FC, useRef } from 'react';
// import Image from 'next/image'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider, { Settings } from 'react-slick';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';

import { TestimonialItem } from '@/components/testimonial';
import { data } from './testimonial.data';
import { Stack, useMediaQuery, useTheme } from '@mui/material';

interface SliderArrowArrow {
  onClick?: () => void;
  type: 'next' | 'prev';
  className?: 'string';
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
        },
        bottom: { xs: '-28px !important', md: '64px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '90px !important' : '30px !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? (
        <IconArrowForward sx={{ fontSize: 22 }} />
      ) : (
        <IconArrowBack sx={{ fontSize: 22 }} />
      )}
    </IconButton>
  );
};

const StyledSlickContainer = styled('div')(() => ({
  position: 'relative',

  '& .slick-list': { marginLeft: '-30px', marginBottom: '24px' },
}));

const HomeTestimonial: FC = () => {
  const sliderRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const imageWidth = isMobile ? 400 : 750;
  const imageHeight = isMobile ? 400 : 750;

  const StyledDots = styled('ul')(({ theme }) => ({
    '&.slick-dots': {
      position: 'absolute',
      left: 0,
      bottom: -30,
      paddingLeft: theme.spacing(1),
      textAlign: 'left',
      '& li': {
        marginRight: theme.spacing(2),
        '& > div': {
          backgroundColor: theme.palette.primary.light, // <-- color for inactive dots
        },
        '&.slick-active>div': {
          backgroundColor: theme.palette.common.white,
        },
      },
    },
  }));

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 3000, // how long each slide stays visible
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    arrows: false,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box
        sx={{
          height: 8,
          width: 30,
          backgroundColor: 'divider',
          display: 'inline-block',
          borderRadius: 4,
        }}
      />
    ),
  };

  return (
    <Box
      id="Stories"
      sx={{
        pb: { xs: 6, md: 10 },
        px: { xs: 2, md: 10 },
        pt: { xs: 12, md: 10 },
        mt: { xs: 0, md: 6 },
        backgroundColor: 'background.paper',
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box sx={{ width: '100%', height: '100%', mt: -12, ml: -4 }}>
            <img
              src="/images/home-testimonial.svg"
              width={imageWidth}
              height={imageHeight}
              alt="Testimonial img"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack sx={{ width: '100%' }}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 32, md: 52 },
                mt: { xs: -7, md: 0 },
                mb: { xs: -1, md: 4 },
                lineHeight: 1.2,
                fontWeight: 500,
                color: 'grey.900',
              }}
            >
              What our early users love about Zottr
            </Typography>
            <Box
              sx={{
                width: { xs: '100%', md: '120%' },
                height: 600,
                bgcolor: 'hsl(270, 60%, 96%)',
                p: 5,
                borderRadius: 5,
                ml: { xs: 0, md: -6 },
                mt: 5,
                zIndex: 1000,
              }}
            >
              <StyledSlickContainer>
                <Slider ref={sliderRef} {...sliderConfig}>
                  {data.map((item, index) => (
                    <TestimonialItem key={String(index)} item={item} />
                  ))}
                </Slider>
              </StyledSlickContainer>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ width: '120%', height: '120%', mt: -22 }}>
            <img
              src="/images/home-testimonial.svg"
              width={imageWidth}
              height={imageHeight}
              alt="Testimonial img"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeTestimonial;
