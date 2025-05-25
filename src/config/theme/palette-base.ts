import { PaletteOptions } from '@mui/material'

const paletteBase: Partial<PaletteOptions> = {
  // primary: {
  //   light: '#9FF1D2',
  //   main: '#127C71',
  //   dark: '#0D6A69',
  //   contrastText: '#fbfbfb',
  // },
  // secondary: {
  //   light: '#FDE6A8',
  //   main: '#ffaf35',
  //   dark: '#D0821C',
  //   contrastText: '#fbfbfb',
  // },
  primary: {
    main: '#673AB7', // Regal purple
    light: '#9575CD', // Soft lavender
    dark: '#512DA8', // Deep violet
    // surface: 'hsl(270, 60%, 90%)', // Soft purple background
    // lightsurface: 'hsl(270, 60%, 99%)', // Soft purple background
    contrastText: '#fff',
  },
  secondary: {
    main: '#FFB300', // Warm Amber
    light: '#FFD54F', // Soft Gold
    dark: '#FF8F00', // Deep Golden
    // surface: 'hsl(42, 80%, 90%)', // Light golden cream
    // lightsurface: 'hsl(42, 80%, 99%)', // Light golden cream
    contrastText: '#000',
  },
}

export default paletteBase
