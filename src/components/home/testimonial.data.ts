import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Zero tech skills required',
    content:
      '" I’ve got 2 kids and a home business which I run on Whatsapp & Instagram. I thought I needed a web developer to create my online store. With Zottr, I was able to make a good-looking store myself and manage orders & customers using Whatsapp with ease. "',
    user: {
      id: 1,
      name: 'Madhu',
      description: 'Home Bakery',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Customers take me more seriously now',
    content:
      '" Before Zottr, I used to just send product pics on WhatsApp. Now, with my own link and clean store, I feel more confident and my customers trust me more. It has actually helped increase my sales. "',
    user: {
      id: 1,
      name: 'Ayush',
      description: 'Grocery Store',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Easy to set up, even easier to manage',
    content:
      '" I’m not very tech-savvy, but Zottr was so simple to use. It took me less than 15 minutes to set everything up. Managing orders directly from WhatsApp is a game changer. "',
    user: {
      id: 1,
      name: 'Shivam',
      description: 'Cloud Kitchen',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Perfect for WhatsApp and Instagram sellers',
    content:
      '" I run a small handmade jewelry business on Instagram. Zottr gave me a proper store link I can add to my bio and share on WhatsApp. My buyers find it so much easier to browse and place orders. "',
    user: {
      id: 1,
      name: 'Payas',
      description: 'Jewelry Store',
      photo: '4.jpg',
    },
  },
]
