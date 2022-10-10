import type { AppProps } from 'next/app'
import { DynamicThemeProvider } from '../contexts/ThemeContext'
import GlobalStyle from '../styles/globalStyle';


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <DynamicThemeProvider >
      <GlobalStyle />
      <title>Grégori Sabel</title>
      <Component {...pageProps} />
    </DynamicThemeProvider>
  )
}

export default MyApp
