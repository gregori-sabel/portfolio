import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({ 
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  styles: {
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
