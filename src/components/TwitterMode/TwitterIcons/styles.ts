import styled from 'styled-components';

export const Svg = styled.svg`
    fill: ${props => props.fill};
    width: ${props => props.width};
    height: ${props => props.height};
    vertical-align: bottom;
`;
