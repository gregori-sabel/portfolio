import React, { useContext } from 'react' 
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { ThemeContext } from '../../contexts/ThemeContext'
import GregLogo from '../../images/gregLogo.svg'
import GregLogoDark from '../../images/gregLogoDark.svg'
import { Component, LeftSection, MiddleSection, RightSection } from './styles'

export default function Footer() {
  const { theme } = useContext(ThemeContext)


  return (
    <Component >

      <LeftSection >
        
      </LeftSection>

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

      <RightSection>
        <div>
          { theme.title !== 'light' && 
            <GregLogo alt="Arte vetorial Grégori Sabel"/>
          }
          { theme.title === 'light' && 
            <GregLogoDark alt="Arte vetorial Grégori Sabel"/>
          }
        </div>
      </RightSection>

    </Component>    
  )
}