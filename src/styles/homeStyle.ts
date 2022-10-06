import styled from "styled-components";

interface CheckThemeWrapperProps{
  amountScrolled: number;
  spaceFromTheBottom: number;
}

export const Component = styled.div`
  display: flex;
  width: 100%; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  background-color: ${props => props.theme.colors.background}; 

  ${({ theme }) => theme.title === 'colorful' && `
    background-image: url('/balls.svg');    
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover; 
  `}

  

  @media screen and (min-width: 601px) {
    font-size: 16px;
  }

  /* If the screen size is 600px wide or less, set the font-size of <div> to 12px */
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }

      
`

export const CheckThemeWrapper = styled.div<CheckThemeWrapperProps>`
  /* display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px ; */
  
    position: fixed ;
    border-radius: 23px;
    right: 5vw ;
    top: 20px ; 
    overflow: hidden ;
    z-index: 10;
    /* box-shadow: 4px 4px 20px black; */

    transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1);

  /* ${({ amountScrolled }) => amountScrolled > 50 && `
    transform: translateY(85vh);
  `}  

  ${({ spaceFromTheBottom }) => spaceFromTheBottom < 100 && `
    position: absolute ;
    bottom: 100px;
  `}   */


  /* ${({ amountScrolled, spaceFromTheBottom }) => {
    if(amountScrolled > 50 && spaceFromTheBottom > 100){
      return `
        transform: translateY(85vh);
      `
    } else if (spaceFromTheBottom <= 100){
      return `
        transform: translateY(0vh);
        position: absolute ;
        top: auto;
        bottom: 200px;
      `
    } else if (spaceFromTheBottom > 100 && spaceFromTheBottom < 500){
      return ' transition: 0s'
    } else {
      return ''
    }
  }}  */

  ${({ amountScrolled, spaceFromTheBottom }) => {
    if(amountScrolled > 50 && spaceFromTheBottom > 100){
      return `
        transform: translateY(85vh);
      `
    } else if (spaceFromTheBottom <= 100){
      return `
        transform: translateY(70vh) ;
      `
    } else if (spaceFromTheBottom > 100 && spaceFromTheBottom < 500){
      return ' transition: 0s'
    } else {
      return ''
    }
  }} 


`

export const Section = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  margin: 0px 5%;


  div {
    width: 100%;
  }



`
export const SectionTitle = styled.h1`
  font-size: 1.75em;
  font-weight: bold;
  /* mt: ['40px', '60px','80px'; */
  margin-top: 80px;
  color: ${props => props.theme.colors.text}; 

  ${({ theme }) => theme.title === 'colorful' && `
    margin-top: 67px;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 5px 15px ;
    background-color: rgba(255,255,255,.1);
    backdrop-filter: blur(35px) ;  
  `}

`
