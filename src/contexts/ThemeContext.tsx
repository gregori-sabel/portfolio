import { createContext, ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import colorful from '../styles/themes/colorful'

interface ThemeContextProps{
  theme: {
    title: string;
    colors: {
        background: string;
        shapeBG: string;
        hoverBG: string;
        text: string;
        textHover: string;
    };    
  }
  toggleTheme(): void;
}

interface DynamicThemeProvider {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export function DynamicThemeProvider({children}: DynamicThemeProvider) {
  const [ theme, setTheme ] = useState(dark);

  const toggleTheme = () => {
    switch (theme.title) {
      case 'dark':
        setTheme(light)
        break;
      case 'light':
        setTheme(colorful)
        break;
      case 'colorful':
        setTheme(dark)
        break;
    }
  }

  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={theme}>
        {children}

      </ThemeProvider>
    </ThemeContext.Provider>
  )
}