import type { AppProps } from 'next/app'
import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { theme } from '../../styles/theme'
import { lightTheme } from '../../styles/lightTheme'
import { darkTheme } from '../../styles/darkTheme'

function MyApp({ Component, pageProps }: AppProps) {
  // const { colorMode } = useColorMode()

  // const theme = colorMode === 'light' ? lightTheme :  darkTheme
  // console.log('color', colorMode)
  
  return (
    <ChakraProvider >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
