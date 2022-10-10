import React from "react";
import { Component, GithubText, Title, Text } from "./styles";
const Fade = require('react-reveal/Fade');

interface Props {
  title: string;
  text: string;
  link?: string;
  isGithub?: boolean;
  index: number;
}

export function Block({ text, title, link, isGithub = false, index }: Props) {



  return(
    <a href={link !== '' ? link : undefined} target="_blank" rel="noreferrer" >
        <Component >
        <Fade bottom cascade delay={index * 200}>
          <div>

          { link !== ''  && 
            <GithubText >
              { isGithub ? 'Github' : 'Site'}
            </GithubText>
          }
          <Title >
            {title}
          </Title>
          <Text>
            {text}
          </Text>
          </div>
    </Fade>          
        </Component>

      </a>  
  )
}