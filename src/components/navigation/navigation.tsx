import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { navigations } from './navigation.data';

interface NavigationProps {
  onItemClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ onItemClick }) => {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onItemClick?.(); // Close mobile nav if needed

    const isHome = router.pathname === '/';

    if (isHome) {
      // Already on home, just scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home with hash
      await router.push(`/#${id}`);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: id, label }) => (
        <Box
          key={id}
          component="a"
          href={`/#${id}`}
          onClick={(e) => handleClick(e, id)}
          sx={{
            position: 'relative',
            color: 'primary.main',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 18 },
            textDecoration: 'none',
            fontFamily: 'inherit',

            '& > .curve': { display: 'none' },
            '&:hover > .curve': {
              display: 'block',
            },
          }}
        >
          <Box
            className="curve"
            sx={{
              position: 'absolute',
              top: 12,
              transform: 'rotate(3deg)',
              '& img': { width: 44, height: 'auto' },
            }}
          >
            <img src="/images/headline-curve.svg" alt="Headline curve" />
          </Box>
          {label}
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
