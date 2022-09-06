import { Box, Button, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export function CheckTheme() {
  const [ check, setCheck ] = useState(false);
  const { toggleColorMode, colorMode } = useColorMode()


  useEffect(() => {
    if(check && colorMode === 'light'){

    } else {
      toggleColorMode();

    }

  }, [check])
  
  // const shapeBGColor = useColorModeValue('gray.100', 'gray.800')
  
  return(
    <Button
      bg='transparent'
      w='50px'
      h='50px'
      borderRadius='360px'
      position='relative'
      onClick={() => setCheck(!check)}
    >
      <Box 
        // onChange={() => setCheck(true)}
        transitionTimingFunction='ease-out'
        transition='0.5s'
        bg={check ? 'yellow.400': 'gray.400'}
        h='50px'
        w='50px'
        left='0px'
        borderRadius='50px'
        position='absolute'
      />
      <Box 
        bg="gray.800"
        h='50px'
        w='50px'
        borderRadius='50px'
        position='absolute'
        left={check ? '50px' : '15px'}
        transition='0.5s'
        transitionTimingFunction='ease-out'
      />
      
    </Button>

  )
}