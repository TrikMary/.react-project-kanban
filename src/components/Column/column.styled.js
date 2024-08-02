import styled from "styled-components";
import { Cards } from "../../globalStyle.styled";

export const MainColumn = styled.div`
width: 20%;
margin: 0 auto;
display: block;
`

export const ColumnTitle = styled.div`
padding: 0 10px;
margin: 15px 0;

p {
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`

export const ColumnCards = styled.div`
${Cards}
`