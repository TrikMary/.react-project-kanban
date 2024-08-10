import { useState } from "react";
import * as S from "./header.styled.js"
import { Container } from "../../globalStyle.styled.js";



export const Header = ({ addCard, changeTheme, setChangeTheme }) => {
  {
    /* Создаем состояние isOpen, которое отвечает открыто или нет окошко и */
  }
  {
    /* которое меняется с помощью функции */
  }
  {
    /* setIsOpen с первоначальным значение false */
  }
  const [isOpen, setIsOpen] = useState(false);
  {
    /*Создаем функцию в которой меняется состояние на противоположное */
  }
  const toggleOpenUser = () => {
    setIsOpen(!isOpen);
  };

  const onChangeTheme = () => {
    setChangeTheme(changeTheme === "light" ? "dark" : "light")
  }

  

  
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>

          <S.HeaderLogoLight >
            <a href="" target="">
              <img src="images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogoLight>

          <S.HeaderLogoDark >
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogoDark >

          <S.HeaderNav>
            <S.HeaderBtnNew
              onClick={addCard}
              // id="btnMainNew"
            >
              <a>Создать новую задачу</a>
            </S.HeaderBtnNew>
            {/* ---тут код для выскакивающего элемента пользователя, добавляем onClick, который вызывает функцию--- */}
            <S.HeaderUser onClick={toggleOpenUser}>
              Ivan Ivanov
            </S.HeaderUser>
            {/*Пишем логику для отрисовки модального окошка, если первое условие выполнено, то сработает второе*/}
            {isOpen && (
              <S.HeaderPopUserSet
                id="user-set-target"
              >
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <S.ThemeCheckboxImput defaultChecked={changeTheme === "dark"} 
                  onClick={onChangeTheme} type="checkbox" 
                   name="checkbox" />
                </S.PopUserSetTheme>
                <S.PopUserButtonExit type="button">
                  <a href="#popExit">Выйти</a>
                </S.PopUserButtonExit>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
