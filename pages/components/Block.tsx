import { Flex, Text, Box } from "@chakra-ui/react";
import { LoremIpsum } from "lorem-ipsum";
import React from "react";

interface Props {
  title: string;
  text: string
}

export function Block({ text, title }: Props) {
  


  return(
    <Box
      position='relative'
      mt='40px'
      p='8'
      boxShadow='xl'
      borderRadius='10'
      bg='white'


      transition='0.2s'
      _hover={{
        boxShadow:'2xl',
        cursor:
        'pointer',
        backgroundColor:
        'gray.800',
        color:
        'white'
      }}>
      <Text
        position='absolute'
        top='10px'
        right='20px'
        color='white'
        fontWeight='bold'>Github</Text>
        
      <Text fontWeight='bold' fontSize='xl' pb='20px'>
        {title}
      </Text>
      <Text lineHeight='180%'>
        {text}
      </Text>
    </Box>
  )
}