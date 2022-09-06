import React from 'react'
import { Text, Flex, Box, useColorModeValue, Link} from '@chakra-ui/react'
import { LoremIpsum } from "lorem-ipsum";
import { Block } from '../components/Block';
import { CheckTheme } from '../components/CheckTheme';
import content from '../../content.json'

export function Home () {

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    }
  })

  const loremTitle = lorem.generateWords(3)
  const loremText = lorem.generateParagraphs(1)

  const shapeBGColor = useColorModeValue('gray.100', 'gray.80')
  return (
    <Box bg={shapeBGColor}>
    <Box position='absolute' right='40px' top='20px' overflow='hidden'>
      <CheckTheme />
    </Box>


      <Flex w='100%' align='center' flexDir='column'>
        <Flex 
          maxW='800px' 
          flexDir='column' 
          mb='80px' 
          marginX={['10px', '20px', '40px']} 
          align='center'
        >

            <Text fontSize='2xl' fontWeight='bold' mt='80px'>
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
            <Flex gap='40px'>
              { content.habilities.map( habilities => (
                <Block key={habilities.title} title={habilities.title} text={habilities.text}/>
              ))}
            </Flex>

        </Flex>
      </Flex>      
    </Box>
  )
}

export default Home
