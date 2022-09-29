import React from 'react'
import { Text, Flex, Box, useColorModeValue, Link} from '@chakra-ui/react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Block } from '../components/Block';
import { CheckTheme } from '../components/CheckTheme';
import contents from '../../contents.json'
import GregLogo from '../images/gregLogo.svg'
import background from '../images/background.png'

export default function Home () {

  const shapeBGColor = useColorModeValue('gray.100', 'gray.80')
  return (

    <Flex 
      w='100%' 
      flexDir='column' 
      align='center' 
      bg={shapeBGColor} 
      // bgImage="url('/background.png')"        
      // bgPosition="center"
      // bgRepeat="repeat-y"        
    >
      <Box 
        position='absolute' 
        right={['20px','40px']} 
        top='20px' 
        overflow='hidden' 
        zIndex='10'
      >
        <CheckTheme />
      </Box>

      <Flex 
        maxW='800px' 
        flexDir='column' 
        align='center' 
        mb='80px' 
        marginX={['15px', '20px', '40px']} 
        bg={shapeBGColor}
      >        
       
        { contents.map(content => (
          <>
            <Text fontSize='2xl' fontWeight='bold' mt={['40px', '60px','80px']}>
              {content.title}
            </Text>          
            { content.items.map( item => (
              <Box key={item.title} w='100%'>
                { item.link &&
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <Block  title={item.title} text={item.text} isGithub={item.isGithub}/>
                  </a>
                }
                { !item.link &&
                  <Block  title={item.title} text={item.text} />
                }
              </Box>
            ))}
          </>
        ))}


      </Flex>


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

    </Flex>         
  )
}

