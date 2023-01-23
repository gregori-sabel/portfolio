import React, { useContext, useEffect, useRef, useState } from 'react'
import { Block } from '../components/Block';
import { CheckTheme } from '../components/CheckTheme';
import contents from '../../contents.json'
import Footer from '../components/Footer';
import { CheckThemeWrapper, Suggestion, Component, Section, SectionTitle } from '../styles/homeStyle';
import $ from 'jquery'
import { ThemeContext } from '../contexts/ThemeContext';
import TwitterMode from '../components/TwitterMode';
const Fade = require('react-reveal/Fade');

export default function Home () {
  const [ amountScrolled, setAmountScrolled ] = useState(-1)
  const [ spaceFromTheBottom, setSpaceFromTheBottom ] = useState(-1)
  const { theme } = useContext(ThemeContext)

  const checkThemeRef = useRef(null) 

  function onScroll () {
    setAmountScrolled(window.pageYOffset)

    setSpaceFromTheBottom( -1*( ($(window).scrollTop() as number) + ($(window).height() as number) - ($(document).height() as number)) )
  }
  
  useEffect(() => {
    const interval = setInterval(onScroll, 500)
  },[])

  return (
    <>
        <CheckThemeWrapper id='check-theme' ref={checkThemeRef} amountScrolled={amountScrolled} spaceFromTheBottom={spaceFromTheBottom}>
          <Suggestion>
            <CheckTheme />
          </Suggestion>
        </CheckThemeWrapper>
    
      { theme.title === 'twitter' &&
        <TwitterMode />
      }
      { theme.title !== 'twitter' &&
        <Component className='Components'> 
          <div>               
            { contents.map(content => (
              <Section key={content.title}>
                <SectionTitle>
                  <Fade bottom>
                    {content.title}
                  </Fade>                      
                </SectionTitle>  
                { content.items.map( (item, i) => (
                  // eslint-disable-next-line react/no-unknown-property
                    // <Fade bottom >
                    <Block key={item.title} index={i} title={item.title} text={item.text} link={item.link} isGithub={item.isGithub}/>
                    // </Fade>
                ))}
              </Section>
            ))}
          </div>
                      
          <Footer />
        </Component> 
      }    
      
     
    </>
  )
}

