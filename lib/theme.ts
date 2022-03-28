import { extendTheme, theme as base } from '@chakra-ui/react'
import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#16161a')(props),
    },
  }),
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme(
  {
    styles,
    config,
    fonts: {
      heading: 'Courier Prime, monospace',
      body: 'Courier Prime, monospace'
    },
    shadows: {
      green: '0 0 25px 10px rgba(67, 188, 123, 0.6)',
      outline: '0 0 0 3px var(--chakra-colors-green-400)'
    },
  })

export default theme