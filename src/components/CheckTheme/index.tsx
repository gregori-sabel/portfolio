import { Box, ChakraProvider, Fade, SlideFade } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Component, Sun, SunHole } from "./styles";

export function CheckTheme() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  
  
  return(
    <ChakraProvider >
      <Component onClick={toggleTheme} >
        <Sun>
          <Box 
            // transition='background-color 500ms ease-out'
            bg='gray.400'
            h='50px'
            w='50px'
            borderRadius='50px'
            position='absolute'
            left='0px'
          />
          <Fade in={theme.title === 'light'} >
            <Box 
              // transition='background-color 500ms ease-out'
              bg='yellow.400'
              h='50px'
              w='50px'
              borderRadius='50px'
              position='absolute'
              left='0px'
              top='0px'
            />
          </Fade>
        </Sun>

        <SunHole>
          <SlideFade 
            in={theme.title === 'dark'} 
            offsetX='50px' 
            transition={{enter:{duration: 0.5,ease: "easeOut"}, exit:{duration: 0.5, ease: "easeInOut" }}}
          >
            <Box 
              bg={'gray.800'}
              h='50px'
              w='50px'
              borderRadius='50px'
              // transition='0.5s ease-out'
            />
          </SlideFade>
        </SunHole>
        
      </Component>
    </ChakraProvider>

  )
}