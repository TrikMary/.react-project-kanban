import { useState } from "react";
import * as S from "./header.styled.js"
import { Container } from "../../globalStyle.styled.js";


export const Header = ({ addCard }) => {
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
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo className="_show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo >
          <S.HeaderLogo className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo >
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
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
