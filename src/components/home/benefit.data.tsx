import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import LinkIcon from '@mui/icons-material/Link'
import EventNoteIcon from '@mui/icons-material/EventNote'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import StorefrontIcon from '@mui/icons-material/Storefront'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Your own store link',
    description: 'Get a customized URL like yourstore.zottr.com — ready to share with the world.',
    icon: <LinkIcon />,
  },
  {
    title: 'Simply pay via UPI',
    description: 'Use UPI or Cash. Forget those payment gateway charges.',
    icon: <CurrencyRupeeIcon />,
  },

  {
    title: 'Cuztomize your store',
    description: 'Cloth shop? bakery? Choose a "look & feel" that best suits your business.',
    icon: <StorefrontIcon />,
  },
  {
    title: 'Track Orders & Stock Easily',
    description: 'Better than tracking chat messages from multiple customers.',
    icon: <EventNoteIcon />,
  },
  {
    title: '100% Managed on WhatsApp',
    description: 'Track orders & communicate with your customers simply using Whatsapp.',
    icon: <WhatsAppIcon />,
  },
]
