import styled, { css, keyframes } from "styled-components";

const cardAnimation = keyframes`
0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`

export const CardItem = styled.div`
padding: 5px;   
animation-name: ${cardAnimation};
animation-duration: 500ms;
animation-timing-function: linear;
`

 const Cards = css`
.cards {
    width: 100%;
    display: block;
    position: relative;
  }
`

export const Card = styled.div`
width: 220px;
height: 130px;
background-color: #FFFFFF;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: stretch;
padding: 15px 13px 19px;

${Cards}
`
export const CardGroup = styled.div`
width: 100%;
height: 20px;
margin-bottom: 12px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const CardTheme = styled.div`
width: auto;
height: 20px;
padding: 5px 14px;
border-radius: 18px;

p {
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
}
`