import { Column } from "../Column/Column";
import { useState } from "react";
import { statusList, cardList } from "../../data";
import * as S from "./main.styled.js"
import { Container } from "../../globalStyle.styled";


export const Main = ({cards}) => {
 
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
           {statusList.map((status, i) => (
              <Column
              key = {i}
              title={status}
              cards={cards.filter((card) => card.status === status)}
            />
           ))}
            
           
           
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}
