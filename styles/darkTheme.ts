import { extendTheme, ThemeConfig } from '@chakra-ui/react'

export const darkTheme: ThemeConfig = extendTheme({ 
  colors: {
    shape: '#000',
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
