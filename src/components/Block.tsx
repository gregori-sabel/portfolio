import { Flex, Text, Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  text: string;
  hasGithub?: boolean;
}

export function Block({ text, title, hasGithub = false }: Props) {

  const shapeBGColor = useColorModeValue('white', 'gray.700')
  const shapeHoverBGColor = useColorModeValue('gray.700', 'gray.400')
  const shapeHoverColor = useColorModeValue('white', 'black')

  return(
    <Box
      w='100%'
      position='relative'
      mt='40px'
      p='8'
      boxShadow='xl'
      borderRadius='10'
      bg={shapeBGColor}

      transition='0.2s'
      _hover={{
        boxShadow:'2xl',
        cursor:'pointer',
        backgroundColor:shapeHoverBGColor,
        color:shapeHoverColor
      }}>
      
      { hasGithub && 
        <Text
          position='absolute'
          top='10px'
          right='20px'
          color={shapeBGColor}
          fontWeight='bold'
        >
            Github
        </Text>
      }
      <Text fontWeight='bold' fontSize='xl' pb='20px'>
        {title}
      </Text>
      <Text lineHeight='180%'>
        {text}
      </Text>
    </Box>
  )
}