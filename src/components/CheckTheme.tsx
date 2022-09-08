import { Box, Button, Fade, SlideFade, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export function CheckTheme() {
  const [ checkDarkMode, setCheckDarkMode ] = useState(false);
  const { toggleColorMode, colorMode } = useColorMode()


  useEffect(() => {
    console.log('colorMode', colorMode)
    if(colorMode === 'light'){
      setCheckDarkMode(false)
    } else {
      setCheckDarkMode(true)
    }

  }, [colorMode])
  
  const shapeBGColor = useColorModeValue('gray.100', 'gray.800')
  
  return(
    <Button
      bg='transparent'
      w='50px'
      h='50px'
      borderRadius='360px'
      position='relative'
      onClick={() => toggleColorMode()}
    >
      <Box
        left='0px'
        top="0px"
        position='absolute'
      >
        <Box 
          // transition='background-color 500ms ease-out'
          bg='gray.400'
          h='50px'
          w='50px'
          borderRadius='50px'
          position='absolute'
          left='0px'
        />
        <Fade in={!checkDarkMode} >
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
      </Box>
      <Box      
        position='absolute'
        left='20px'
      >
        <SlideFade 
          in={checkDarkMode} 
          offsetX='50px' 
          transition={{enter:{duration: 0.5,ease: "easeOut"}, exit:{duration: 0.5, ease: "easeInOut" }}}
        >
          <Box 
            bg={shapeBGColor}
            h='50px'
            w='50px'
            borderRadius='50px'
            // transition='0.5s ease-out'
          />
        </SlideFade>
      </Box>
      
    </Button>

  )
}