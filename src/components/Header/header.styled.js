import styled, { css } from "styled-components";
import { Hover01, Hover02, Hover03 } from "../../globalStyle.styled.js";

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({theme}) => theme.headerBG};
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
{/*Логотип, изначально есть оба, если light то ставим none на dark и наоборот*/}
export const HeaderLogo = styled.div`

img {
  width: 85px; 
}
`

export const HeaderLogoLight = styled.div`

img {
  width: 85px; 
}
`

export const HeaderLogoDark = styled.div`
img {
  width: 85px; 
}
` 
{/*-----*/}

export const HeaderNav = styled.div`
max-width: 290px;
padding: 0;
display: flex;
align-items: center;
justify-content: center;
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
color: ${({theme}) => theme.headerUserText};

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

{/*Стили для окошка с темами*/}
export const HeaderPopUserSet = styled.div`
display: block;
position: absolute;
top: 61px;
right: 0;
width: 213px;
height: 205px;
border-radius: 10px;
border: 0.7px solid rgba(148, 166, 190, 0.4);
background: ${({theme}) => theme.headerPopUserThemeBg};
box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
padding: 34px;
text-align: center;
z-index: 2;

&:target {
  display: block;
}
`

export const PopUserSetName = styled.p`
color: ${({theme}) => theme.headerPopUserThemeText};
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: -0.14px;
margin-bottom: 4px;
`
export const PopUserSetMail = styled.p`
color: #94A6BE;
font-size: 14px;
line-height: 21px;
letter-spacing: -0.14px;
margin-bottom: 10px;
`

export const PopUserSetTheme = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;

p {
  color: ${({theme}) => theme.headerPopUserThemeText};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
}



`
export const ThemeCheckboxImput = styled.input`
position: relative;
width: 24px;
height: 13px;
border-radius: 100px;
background: #EAEEF6;
outline: none;
-webkit-appearance: none;
   -moz-appearance: none;
        appearance: none;

&::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #94A6BE;
  transition: 0.5s;
} 
&:checked[type=checkbox]::before {
  left: 12px;
}

`

export const PopUserButtonExit = styled.button`
width: 72px;
height: 30px;
background: transparent;
color: #565EEF;
border-radius: 4px;
border: 1px solid ${({theme}) => theme.headerButtonThemeExitText};
${Hover03}

a {
  color: ${({theme}) => theme.headerButtonThemeExitText};
}
`