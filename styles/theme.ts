import { extendTheme, ThemeConfig, useColorModeValue } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'


export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  styles:{
    global:{
      'body': {
        backgroundColor: 'gray.100',
        color: 'black'
      },
      'html, body': {
        margin: 0,
        padding: 0
      }
    }
  }
})

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
// export const theme = extendTheme({ config, styles })
