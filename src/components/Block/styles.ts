import styled from "styled-components";


export const Component = styled.div`
  position: relative;
  margin-top: 40px;
  box-shadow: 10px 10px 20px rgba(0,0,0, 0.1);
  border-radius: 10px;
  background-color: ${props => props.theme.colors.shapeBG};
  color:${props => props.theme.colors.text};
  // bg:{shapeBGColor}
  
  transition:0.2s;


  &:hover{
    box-shadow: 20px 20px 30px -10px rgba(0,0,0, 0.4);
    /* cursor: link !== '' ? 'pointer' : 'default'; */
    background-color:${props => props.theme.colors.hoverBG};
    color: ${props => props.theme.colors.textHover};;
  }

  ${({ theme }) => theme.title === 'colorful' && `
    background-color: rgba(255,255,255,.1);
    backdrop-filter: blur(35px) ;  
  `}  

  ${({ theme }) => theme.title === 'cartoonish' && `
    box-sizing: border-box;
    border: 3px solid black;
    box-shadow: 10px 10px 0px rgba(0,0,0, .9);  
    &:hover{
      background-color: white;
      color: inherit;
      border: 3px solid black;
      box-shadow: 15px 15px 1px rgba(0,0,0, .9);  
      transform: translateX(-5px) translateY(-5px);
    }  
  `}    

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
  font-size: 1.4em;
  padding-bottom: 20px;
  padding: 35px 35px 12px 35px;
  position: relative;
  width: 100%;

  ${({ theme }) => theme.title === 'cartoonish' && `
    padding-top: 15px;
    margin-bottom: 15px;
    background: lightblue;
    color: black;
    border-radius: 7px 7px 0px 0px;
    :after{
      content: '';
      position: absolute;
      top: 60px;
      left: 0px;
      width: 100%;
      height: 2px;
      background-color: black;
    }
  `}   
`

export const Text = styled.p`
  padding: 0px 35px 35px 35px;
  font-size: 1.15em ;
  line-height: 180%
`