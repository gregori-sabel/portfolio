import { extendTheme, ThemeConfig } from '@chakra-ui/react'

export const lightTheme: ThemeConfig = extendTheme({ 
  colors: {
    shape: '#fff',
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
