import React from 'react'
import { Text, Flex, Box, useColorModeValue, Link} from '@chakra-ui/react'
import { LoremIpsum } from "lorem-ipsum";
import { Block } from '../components/Block';
import { CheckTheme } from '../components/CheckTheme';
import content from '../../content.json'

export function Home () {

  const shapeBGColor = useColorModeValue('gray.100', 'gray.80')
  return (
    <Flex w='100%' justify='center'>
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
    </Flex>   
      
  )
}

export default Home
