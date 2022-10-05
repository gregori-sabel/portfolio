import type { AppProps } from 'next/app'
import { useContext } from 'react';
import { DynamicThemeProvider } from '../contexts/ThemeContext'
import { ThemeContext } from '../contexts/ThemeContext'
import GlobalStyle from '../styles/globalStyle';


function MyApp({ Component, pageProps }: AppProps) {
  const themeContext = useContext(ThemeContext)
  
  return (
    <DynamicThemeProvider >
      <GlobalStyle />
      <title>Grégori Sabel</title>
      <Component {...pageProps} />
    </DynamicThemeProvider>
  )
}

export default MyApp
