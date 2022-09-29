import { Flex, Text, Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  text: string;
  link?: string;
  isGithub?: boolean;
}

export function Block({ text, title, link, isGithub = false }: Props) {

  const shapeBGColor = useColorModeValue('white', 'gray.700')
  const shapeHoverBGColor = useColorModeValue('gray.700', 'gray.400')
  const shapeHoverColor = useColorModeValue('white', 'black')

  return(
    <a href={link !== '' ? link : undefined} target="_blank" rel="noreferrer" >
      <Box
        // color='white'
        w='100%'
        position='relative'
        mt='40px'
        p='8'
        boxShadow='xl'
        borderRadius='10'
        bg={shapeBGColor}
        
        // bg={'rgba(255,255,255,.1)'}
        // backdropFilter='auto' 
        // backdropBlur='20px'

        transition='0.2s'
        _hover={{
          boxShadow:'2xl',
          cursor: link !== '' ? 'pointer' : 'default',
          backgroundColor:shapeHoverBGColor,
          color:shapeHoverColor
        }}>
        
        { link !== ''  && 
          <Text
            position='absolute'
            top='10px'
            right='20px'
            color={shapeBGColor}
            fontWeight='bold'
          >
            { isGithub ? 'Github' : 'Site'}
          </Text>
        }
        <Text fontWeight='bold' fontSize='xl' pb='20px'>
          {title}
        </Text>
        <Text lineHeight='180%'>
          {text}
        </Text>
      </Box>
    </a>
  )
}