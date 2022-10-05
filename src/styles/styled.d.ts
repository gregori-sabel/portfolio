import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      shapeBG: string;
      hoverBG: string;
      text: string;
      textHover: string;
    }    
  }
}