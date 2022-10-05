import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  background-color: #2D3748;
  width: 100%;
  height: 150px ;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  margin-top: 80px;
  /* padding: ['10px','20px','40px','60px','80px']}; */
  color: white;
`

export const LeftSection = styled.div`
  display: flex;
  width:30%;
  justify-content: flex-start;
`
export const MiddleSection = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap:10px;

  p{
    font-weight: light;
  }

  div{
    display: flex;
    gap:10px
  }

`
export const RightSection = styled.div`
  display: flex;
  width:30%;
  justify-content:flex-end;

  div{
    width:100px;
  }
`
