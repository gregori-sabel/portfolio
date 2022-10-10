import React, { useContext } from 'react' 
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { ThemeContext } from '../../contexts/ThemeContext'
import GregLogo from '../../images/gregLogo.svg'
import GregLogoDark from '../../images/gregLogoDark.svg'
import { Component, LeftSection, MiddleSection, RightSection } from './styles'

const Fade = require('react-reveal/Fade');
export default function Footer() {
  const { theme } = useContext(ThemeContext)


  return (
    <Component >
        

      <LeftSection >
        
      </LeftSection>

    <Fade bottom >
      <MiddleSection>
        <p>Redes</p>
        <div>
          <a href='https://www.linkedin.com/in/gregori-sabel/' target="_blank" rel="noreferrer">
            <FaLinkedin size='30px'/>
          </a>
          <a href='https://github.com/gregori-sabel' target="_blank" rel="noreferrer">
            <FaGithubSquare size='30px'/>
          </a>
        </div>
      </MiddleSection>
    </Fade>

      <RightSection>
        <div>
          { (theme.title === 'light' || theme.title === 'cartoonish')  
            ? <GregLogoDark alt="Arte vetorial Grégori Sabel"/>
            : <GregLogo alt="Arte vetorial Grégori Sabel"/>
          }
        </div>
      </RightSection>

    </Component>    
  )
}