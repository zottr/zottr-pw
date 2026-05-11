import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const HomeMetaGrowth: FC = () => {
  return (
    <Box
      id="meta-growth"
      sx={{
        px: { xs: 2, md: 10 },
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
        background:
          'linear-gradient(180deg, rgba(255, 248, 235, 0.8) 0%, rgba(255, 255, 255, 1) 100%)',
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 30, md: 50 },
              lineHeight: 1.15,
              fontWeight: 500,
              color: 'grey.900',
              mb: { xs: 2, md: 3 },
              maxWidth: { xs: '100%', md: '95%' },
            }}
          >
            Create scroll-stopping content,
            <br />
            run smarter campaigns, and turn{' '}
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
              attention into sales
            </Typography>
          </Typography>

          <Typography
            sx={{
              color: 'grey.700',
              fontSize: { xs: 16, md: 20 },
              lineHeight: 1.5,
              maxWidth: { xs: '100%', md: '94%' },
              mb: { xs: 2.5, md: 3.5 },
            }}
          >
            With Zottr AI Tools for Business, sellers can create optimized
            Instagram marketing content right inside Zottr, move from product
            catalog to campaign launch faster, and manage Facebook and
            Instagram promotion without juggling disconnected tools. It&apos;s
            a cleaner path from content creation to campaign execution to
            business insight.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              mx: 'auto',
              width: '100%',
              maxWidth: 560,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: { xs: -14, md: -18 },
                borderRadius: { xs: 6, md: 8 },
                background:
                  'linear-gradient(135deg, rgba(224, 122, 46, 0.18) 0%, rgba(242, 190, 98, 0.08) 100%)',
                transform: 'rotate(-2deg)',
              }}
            />

            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: { xs: 5, md: 7 },
                backgroundColor: 'common.white',
                boxShadow: '0 28px 70px rgba(45, 45, 45, 0.16)',
                border: '1px solid rgba(34, 34, 34, 0.08)',
              }}
            >
              <Box
                component="img"
                src="/images/home/meta-marketing-ai.jpg"
                alt="Marketing strategy illustration for Zottr AI content and campaign tools"
                sx={{
                  width: '100%',
                  display: 'block',
                  aspectRatio: { xs: '4 / 3', md: '16 / 11' },
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeMetaGrowth;
