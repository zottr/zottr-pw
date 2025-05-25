import React, { FC } from 'react'
// import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Testimonial } from '@/interfaces/testimonial'

interface Props {
  item: Testimonial
}

const TestimonialItem: FC<Props> = ({ item }) => {
  return (
    <Box sx={{ padding: { xs: '10px', md: '30px' } }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          component="h2"
          variant="h4"
          sx={{ mb: 4, fontSize: { xs: 24, md: 42 }, color: 'grey.900', fontWeight: 500 }}
        >
          {item.title}
        </Typography>
        <Typography sx={{ mb: 4, color: 'grey.700', fontSize: { xs: 16, md: 22 }, fontStyle: 'italic' }}>
          {item.content}
        </Typography>
      </Box>
      <Box
        sx={{
          boxShadow: 1,
          borderRadius: 5,
          px: 2,
          py: 2,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          width: { xs: 240, md: 270 },
          backgroundColor: 'background.paper',
        }}
      >
        <Box
          sx={{
            borderRadius: '50%',
            height: 76,
            width: 76,
            overflow: 'hidden',
            mr: 2,

            '& img': {
              width: '100%',
            },
          }}
        >
          <img src={`/images/avatars/${item.user.photo}`} width={80} height={80} alt={item.user.name} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontSize: { xs: 12, md: 18 }, color: 'grey.900' }}>
            {item.user.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: { xs: 12, md: 15 }, color: 'text.secondary' }}>
            {item.user.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default TestimonialItem
