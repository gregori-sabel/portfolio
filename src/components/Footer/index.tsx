import React from 'react' 
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import GregLogo from '../../images/gregLogo.svg'
import { Component, LeftSection, MiddleSection, RightSection } from './styles'

export default function Footer() {
  return (
    <Component >

      <LeftSection ></LeftSection>

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
          <GregLogo alt="Arte vetorial Grégori Sabel"/>
        </div>
      </RightSection>

    </Component>    
  )
}