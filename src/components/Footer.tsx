import { Box, Flex, Link, Text } from '@chakra-ui/layout'
import React from 'react' 
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import GregLogo from '../images/gregLogo.svg'

export default function Footer() {
  return (
    <Flex 
    bg='gray.700' 
    w='100%' 
    h='150px' 
    justify='space-between'
    align='center'
    paddingX={['10px','20px','40px','60px','80px']}
    color='white'
  >
    <Flex w='30%' justify='flex-start'></Flex>
    <Flex w='30%' align='center' flexDir='column' gap='10px'>
      <Text fontWeight='light'>Redes</Text>
      <Flex gap='10px'>
        <Link href='https://www.linkedin.com/in/gregori-sabel/' target="_blank">
          <FaLinkedin size='30px'/>
        </Link>
        <Link href='https://github.com/gregori-sabel' target="_blank">
          <FaGithubSquare size='30px'/>
        </Link>
      </Flex>
    </Flex>
    <Flex w='30%' justify='flex-end'>
      <Box w='100px'>
        <GregLogo alt="Arte vetorial Grégori Sabel"/>
      </Box>
    </Flex>
  </Flex>    
  )
}