// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  /* If the screen size is 601px wide or more, set the font-size  to 16px */
  @media screen and (min-width: 601px) {
    font-size: 16px;
  }

  /* If the screen size is 600px wide or less, set the font-size of <div> to 12px */
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }

  scroll-behavior: smooth;


`;
 
export default GlobalStyle;