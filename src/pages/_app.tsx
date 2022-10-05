import type { AppProps } from 'next/app'
import { useContext } from 'react';
import { DynamicThemeProvider } from '../contexts/ThemeContext'
import { ThemeContext } from '../contexts/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  const themeContext = useContext(ThemeContext)
  console.log('greg',themeContext.theme)
  
  return (
    <DynamicThemeProvider >
      <title>Grégori Sabel</title>
      <Component {...pageProps} />
    </DynamicThemeProvider>
  )
}

export default MyApp
