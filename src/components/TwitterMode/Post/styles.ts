import styled from "styled-components";

export const Component = styled.div`
  color: white;
  display: flex;
  flex-direction: row;


  border-top: solid 1px rgba(255,255,255,.2);
  /* border-bottom: solid 1px rgba(255,255,255,.2); */

  padding: 15px 16px;

  img{
    height: 48px;
    border-radius: 360px;
    margin-right: 12px;
  }  
`;

export const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;

  h2{
    color: white;
    font-weight: bold;
  }
  div{
    background-color: gray;
    width: 3px;
    height: 3px;
    border-radius: 360px;
    margin-top: 12px;
    margin-left: 5px;
  }
  p{
    color: gray;
    margin-left: 5px;
  }
`;


export const Text = styled.p`
  margin-top: 5px;

  a{
    color: rgb(29, 155, 240);;
  }
`;

export const Footer = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 100px;
  padding-top: 15px;
  font-size: 20px;
  color: gray;

`;
