import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export function CheckTheme() {
  const [ checkDarkMode, setCheckDarkMode ] = useState(false);
  const { toggleColorMode, colorMode } = useColorMode()


  // useEffect(() => {
  //   if(checkDarkMode && colorMode === 'light'){

  //   } else {
  //     toggleColorMode();

  //   }

  // }, [checkDarkMode])
  

  useEffect(() => {
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
        // onChange={() => setCheckDarkMode(true)}
        transitionTimingFunction='ease-out'
        transition='0.5s'
        bg={checkDarkMode ? 'gray.400' : 'yellow.400'}
        h='50px'
        w='50px'
        left='0px'
        borderRadius='50px'
        position='absolute'
      />
      <Box 
        bg={shapeBGColor}
        h='50px'
        w='50px'
        borderRadius='50px'
        position='absolute'
        left={checkDarkMode ?  '15px' : '50px' }
        transition='0.5s'
        transitionTimingFunction='ease-out'
      />
      
    </Button>

  )
}