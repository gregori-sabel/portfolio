import styled from "styled-components";



export const Component = styled.div`
  display: flex;
  width: 100%; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  background-color: ${props => props.theme.colors.background}; 


  /* background-image: url('/balls.svg');    
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover; */
      
`

export const CheckThemeWrapper = styled.div`
  position: absolute ;
  right:40px ;
  top: 20px ;
  overflow: hidden ;
  z-index: 10;

`

export const Section = styled.div`
  display: flex;
  max-width: 900px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  margin: 0px 40px;


  div {
    width: 100%;
  }

`
export const SectionTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  /* mt: ['40px', '60px','80px'; */
  margin-top: 80px;
  color: ${props => props.theme.colors.text}; 

`
