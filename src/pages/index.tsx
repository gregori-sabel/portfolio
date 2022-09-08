import React from 'react'
import { Text, Flex, Box, useColorModeValue, Link} from '@chakra-ui/react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Block } from '../components/Block';
import { CheckTheme } from '../components/CheckTheme';
import content from '../../content.json'
import GregLogo from '../images/gregLogo.svg'
import Image from 'next/image';

export function Home () {

  const shapeBGColor = useColorModeValue('gray.100', 'gray.80')
  return (
    <Flex w='100%' flexDir='column' align='center' bg={shapeBGColor}>
      <Flex 
        maxW='800px' 
        flexDir='column' 
        align='center' 
        mb='80px' 
        marginX={['15px', '20px', '40px']} 
        bg={shapeBGColor}
      >
        <Box position='absolute' right={['20px','40px']} top='20px' overflow='hidden'>
          <CheckTheme />
        </Box>

        <Text fontSize='2xl' fontWeight='bold' mt={['40px', '60px','80px']}>
          Projects
        </Text>
        { content.projects.map( project => (
          <Box key={project.title}>
            <a href={project.github} target="_blank" rel="noreferrer">
                <Block  title={project.title} text={project.text} hasGithub/>
            </a>
          </Box>
        ))}

        <Text fontSize='2xl' fontWeight='bold' mt='80px'>
          Experience
        </Text>
        { content.experience.map( experience => (
          <Block key={experience.title} title={experience.title} text={experience.text}/>
        ))}

        <Text fontSize='2xl' fontWeight='bold' mt='80px'>
          Other habilities
        </Text>
        <Flex gap={['0px', '0px', '40px']} flexDir={['column', 'column', 'row']}>
          { content.habilities.map( habilities => (
            <Block key={habilities.title} title={habilities.title} text={habilities.text}/>
          ))}
        </Flex>

      </Flex>


      <Flex 
        bg='gray.700' 
        w='100%' 
        h='150px' 
        justify='space-between'
        align='center'
        paddingX='80px'
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
        {/* <Image src={GregLogo} alt="Arte vetorial Grégori Sabel"/> */}
        <Flex w='30%' justify='flex-end'>
          <Box w='100px'>
            <GregLogo />
          </Box>
        </Flex>
      </Flex>

    </Flex>   
      
  )
}

export default Home
