import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'
import { color } from 'framer-motion'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: (props: any) => ({
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          _dark: {
            color: 'white',
            bg: 'gray.900',
          },
        },
      }),
    },
    colors: {
        primary: {
          50: '#e0f0ff',    // Teinte la plus claire
          100: '#b3d9ff',
          200: '#80c1ff',
          300: '#4da8ff',
          400: '#1a90ff',
          500: '#0077ff',   // Teinte de base (utilisé pour les boutons, liens, etc.)
          600: '#0067cc',
          700: '#005799',
          800: '#004766',
          900: '#003336',    // Teinte la plus foncée
        },
        secondary: {
          50: '#e6f9e6',
          100: '#c1f2c1',
          200: '#9df09d',
          300: '#79f079',
          400: '#55e755',
          500: '#4caf50',   // Teinte de base
          600: '#429a42',
          700: '#357a35',
          800: '#296229',
          900: '#1d4a1d',
        },
        accent: {
          50: '#fff3e0',
          100: '#ffdab3',
          200: '#ffbf80',
          300: '#ff9e4d',
          400: '#ff7b1a',
          500: '#ff9800',   // Teinte de base pour les alertes
          600: '#e68900',
          700: '#cc7a00',
          800: '#b36c00',
          900: '#995e00',
        }
    },
    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    fontSizes,
    components,
  },
  baseTheme,
)
