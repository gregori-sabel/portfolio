import React from 'react'
import { Text, Flex, Box, useColorModeValue} from '@chakra-ui/react'
import { Block } from '../components/Block';
import { CheckTheme } from '../components/CheckTheme';
import contents from '../../contents.json'
import Footer from '../components/Footer';

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
                <Block  title={item.title} text={item.text} link={item.link} isGithub={item.isGithub}/>
              </Box>
            ))}
          </>
        ))}
      </Flex>

      <Footer />

    </Flex>         
  )
}

