import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  display: flex ;
  flex-direction: row;
  justify-content: center;

  background-color: black;
`;

export const Component = styled.div`
  display: flex ;
  flex-direction: row;
  justify-content: center;
  max-width: 700px;

  background-color: black;
`

export const SideBar = styled.div`
  display: flex ;
  flex-direction: column;
  align-items: center;

  gap: 35px;
  color: white;
  font-size: 30px;

  margin-right: 20px;
  margin-top: 20px;
`;

export const FeatherWrapper = styled.div`
  display: flex ;
  justify-content: center;
  align-items: center;

  padding: 15px;
  border-radius: 360px;
  background-color: rgb(29, 155, 240);
`;


export const MainContent = styled.div`
  border-left:  solid 1px rgba(255,255,255,.2);
  border-right: solid 1px rgba(255,255,255,.2);

  h1{
    color:white;
    font-size: 22px;
    font-weight: bold;
    padding-left: 16px;
    margin-top: 5px;
  }


`;

export const WhatsHappening = styled.div`
  color: white;
  display: flex;
  flex-direction: row;

  margin-top: 20px;
  margin-left: 16px;

  img{
    height: 48px;
    border-radius: 360px;
    margin-right: 12px;
  }  

`;

export const WhatsHappeningContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;

  width: 100%;

  p{
    margin-top: 5px;
    font-size: 22px;
    color: gray;
  }
`;

export const WhatsHappeningFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  div{
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 90px;
  height: 36px;
  background-color: rgb(29, 155, 240);
  font-weight: bold;

  margin-right: 40px;
`;

export const Posts = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;


export const Footer = styled.div`
  position: fixed;
  bottom: 0px;
  background-color: black;
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  color: gray;
  border-top: solid 1px rgba(255,255,255,0.3);
`;