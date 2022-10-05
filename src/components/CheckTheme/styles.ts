import styled from "styled-components";


export const Component = styled.div`
  background-color: transparent;
  width: 50px;
  height: 50px;
  border-radius: 360px;
  position: relative;
  cursor: pointer;

`

export const CelestialBody = styled.div`
  left: 0px;
  top: 0px;
  position: absolute;
`

export const Moon = styled.div`
  background: #A0AEC0;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  position: absolute;
  left: 0px;
`

export const Sun = styled.div`
  // transition='background-color 500ms ease-out'
  background: #ECC94B;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  position: absolute;
  left: 0px;
  top: 0px;
`


export const SunHole = styled.div`      
  position: absolute;
  left: 20px;
`

export const HoleItself = styled.div`
  background: #1A202C;
  height: 50px;
  width: 50px;
  border-radius: 50px;

`