import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { FooterSocialLinks } from '@/components/footer'

// default
const FooterDescription: FC = () => {
  return (
    <Box sx={{ width: { xs: '100%', md: 1000 }, mb: { xs: 2, md: 0 }, px: { xs: 2 }, mt: { xs: -5, md: 0 } }}>
      <Typography component="h2" variant="h2" sx={{ mb: { xs: 2, md: 3 }, fontSize: { xs: 22, md: 28 } }}>
        Zottr
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          letterSpacing: 1,
          mb: 3,
          fontSize: { xs: 16, md: 16 },
          lineHeight: '1.5rem',
          fontWeight: 300,
          color: 'grey.100',
        }}
      >
        Zottr is a set of helpful tools designed for modern social sellers running their E-commerce businesses on
        platforms like Whatsapp & Instagram.
      </Typography>
      <FooterSocialLinks />
    </Box>
  )
}

export default FooterDescription
