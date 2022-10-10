import { useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Component, GithubText, Title, Text } from "./styles";

interface Props {
  title: string;
  text: string;
  link?: string;
  isGithub?: boolean;
}

export function Block({ text, title, link, isGithub = false }: Props) {



  return(
    <a href={link !== '' ? link : undefined} target="_blank" rel="noreferrer" >
      <Component >
        
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
      </Component>

    </a>
  )
}