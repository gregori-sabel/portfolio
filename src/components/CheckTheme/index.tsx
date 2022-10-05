import { Box, ChakraProvider, Fade, SlideFade } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Component, Moon, CelestialBody, SunHole, Sun, HoleItself } from "./styles";

export function CheckTheme() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  
  
  return(
      <Component onClick={toggleTheme} >
        <CelestialBody>
          <Moon />
          
          <Fade in={theme.title === 'light'} >
            <Sun />
          </Fade>
        </CelestialBody>

        <SunHole>
          <ChakraProvider >
            <SlideFade 
              in={theme.title === 'dark'} 
              offsetX='50px' 
              transition={{enter:{duration: 0.5,ease: "easeOut"}, exit:{duration: 0.5, ease: "easeInOut" }}}
            >
              <HoleItself />
            </SlideFade>
          </ChakraProvider>
        </SunHole>
        
      </Component>

  )
}