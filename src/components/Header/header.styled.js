import styled from "styled-components";
import { Hover01, Hover02 } from "../../globalStyle.styled.js";

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`

export const HeaderBlock = styled.div`
height: 70px;
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: space-between;
position: relative;
top: 0;
left: 0;
padding: 0 10px;
`

export const HeaderBtnNew = styled.button`
width: 178px;
height: 30px;
border-radius: 4px;
background-color: #565EEF;
color: #FFFFFF;
border: none;
font-size: 14px;
line-height: 1;
font-weight: 500;
margin-right: 20px;

a {
    color: #FFFFFF;
  }

${Hover01}  
`

export const HeaderUser = styled.a`
height: 20px;
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: center;
font-size: 14px;
line-height: 20px;
color: #565EEF;

&::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565EEF;
    border-bottom: 1.9px solid #565EEF;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

${Hover02}
`

export const ButtonExit = styled.button`

`