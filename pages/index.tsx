import React from 'react'
import { Text, Flex, Box } from '@chakra-ui/react'
import { LoremIpsum } from "lorem-ipsum";
import { Block } from './components/Block';

export function Home () {

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    }
  })

  const loremTitle = lorem.generateWords(3)
  const loremText = lorem.generateParagraphs(1)

  return (
    <>
      <Box position='relative'>
        <Box 
          bg='yellow.400'
          h='50px'
          w='50px'
          m='10px'
          borderRadius='50px'
          position='absolute'
          />
        <Box 
          bg='gray.100'
          h='50px'
          w='50px'
          m='10px'
          borderRadius='50px'
          position='absolute'
          left='20px'
          transition='0.2s'
          _checked={{
            left: '30px'
          }}
        />
        
      </Box>


      <Flex w='100%' align='center' flexDir='column'>
        <Flex w='800px' flexDir='column'>
          <Flex flexDir='column' align='center'>
            <Text fontSize='2xl' fontWeight='bold' mt='80px'>
              Projetos
            </Text>
            <Block title={lorem.generateWords(3)} text={lorem.generateParagraphs(1)}/>
            <Block title={lorem.generateWords(3)} text={lorem.generateParagraphs(1)}/>
            <Block title={lorem.generateWords(3)} text={lorem.generateParagraphs(1)}/>
          </Flex>
          <Flex flexDir='column' align='center'>
            <Text fontSize='2xl' fontWeight='bold' mt='80px'>
              {lorem.generateWords(1)}
            </Text>
            <Block title={lorem.generateWords(3)} text={lorem.generateParagraphs(1)}/>
            <Block title={lorem.generateWords(3)} text={lorem.generateParagraphs(1)}/>
            <Block title={lorem.generateWords(3)} text={lorem.generateParagraphs(1)}/>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Home
