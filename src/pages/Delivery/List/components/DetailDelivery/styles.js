import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  height:425px;
  display:flex;
  
  flex-direction: column;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #666666;
  `
export const Header = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #444444;
`
export const Content = styled.textarea`
width: 390px;
height: 127px;
background: #FFFFFF;
border: 1px solid #DDDDDD;
box-sizing: border-box;
border-radius: 4px;
`

export const Responder = styled.button`
background: #EE4D64;
border-radius: 4px;
height: 45px;
width: 390px;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFFF;
`