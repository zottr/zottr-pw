import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { SocialLink } from '@/interfaces/social-link'
import { Stack } from '@mui/material'

export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com',
    icon: '/images/icons/facebook.svg',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com',
    icon: '/images/icons/instagram.svg',
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com',
    icon: '/images/icons/youtube.svg',
  },
  {
    name: 'Twitter',
    link: 'https://www.x.com',
    icon: '/images/icons/twitter.svg',
  },
]

interface SocialLinkItemProps {
  item: SocialLink
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ item }) => (
  <Box
    component="li"
    sx={{
      display: 'inline-block',
      color: 'primary.contrastText',
      mr: 1,
    }}
  >
    <Link
      target="_blank"
      sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 42,
        height: 42,
        borderRadius: '50%',
        color: 'inherit',
        '&:hover': {},
        '& img': {
          fill: 'currentColor',
          // width: `${item.name === 'Facebook' ? 34 : 32}`,
          width: 32,
          height: 'auto',
        },
      }}
      href={item.link}
    >
      {/* eslint-disable-next-line */}
      <img src={item.icon} alt={item.name + 'icon'} />
    </Link>
  </Box>
)

// default
const SocialLinks: FC = () => {
  return (
    <Box sx={{ ml: -1 }}>
      <Stack
        direction="row"
        gap={1}
        component="ul"
        sx={{
          m: 0,
          p: 0,
          lineHeight: 0,
          borderRadius: 3,
          listStyle: 'none',
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        {socialLinks.map((item) => {
          return <SocialLinkItem key={item.name} item={item} />
        })}
      </Stack>
    </Box>
  )
}

export default SocialLinks
