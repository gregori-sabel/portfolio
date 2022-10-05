import styled from "styled-components";


export const Component = styled.div`
  position: relative;
  margin-top: 40px;
  padding: 30px;
  box-shadow: 10px 10px 20px rgba(0,0,0, 0.1);
  border-radius: 10px;
  background-color: ${props => props.theme.colors.shapeBG};
  color:${props => props.theme.colors.text};
  // bg:{shapeBGColor}
  
  /* background-color: rgba(255,255,255,.1);
  backdrop-filter: blur(10px) ; */

  transition:0.2s;
  &:hover{
    box-shadow: 20px 20px 30px -10px rgba(0,0,0, 0.4);
    /* cursor: link !== '' ? 'pointer' : 'default'; */
    background-color:${props => props.theme.colors.hoverBG};
    color: ${props => props.theme.colors.textHover};;
  }
`


export const GithubText = styled.p`
  position: absolute;
  top: 10px;
  right: 20px;
  color: ${props => props.theme.colors.shapeBG};
  font-weight: bold;

`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 20px;
`

export const Text = styled.p`
  line-height: 180%
`