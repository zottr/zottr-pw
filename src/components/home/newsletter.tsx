import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import { Stack } from '@mui/material'

const HomeNewsLetter: FC = () => {
  return (
    <Box id="Connect" sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 }, mt: { xs: -13, md: -15 } }}>
      <Stack
        gap={2}
        sx={{
          borderRadius: 10,
          pt: { xs: 4, md: 5 },
          px: { xs: 4, md: 10 },
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          component="h2"
          sx={{
            textAlign: { xs: 'left', md: 'left' },
            position: 'relative',
            fontSize: { xs: 24, md: 48 },
            letterSpacing: 1.5,
            fontWeight: 500,
            lineHeight: 1.2,
          }}
        >
          Want to Know More About Zottr?
        </Typography>
        <Typography
          sx={{
            color: 'grey.700',
            lineHeight: 1.4,
            fontWeight: 400,
            fontSize: { xs: 18, md: 24 },
            // fontStyle: 'italic',
            textAlign: { xs: 'left', md: 'left' },
          }}
        >
          Drop a message to{' '}
          <Typography
            component="span"
            sx={{
              color: 'primary.main',
              lineHeight: 1.4,
              fontWeight: 700,
              fontSize: { xs: 18, md: 24 },
              // fontStyle: 'italic',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            hello@zottr.com.{' '}
          </Typography>
          We would love to chat!
        </Typography>
      </Stack>
    </Box>
  )
}

export default HomeNewsLetter
