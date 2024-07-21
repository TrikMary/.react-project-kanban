import { useState } from "react";

export const Header = () => {
  {/* Создаем состояние isOpen, которое отвечает открыто или нет окошко и */}
  {/* которое меняется с помощью функции */}
  {/* setIsOpen с первоначальным значение false */}
  const [isOpen, setIsOpen] = useState (false)
  {/*Создаем функцию в которой меняется состояние на противоположное */}
  const toggleOpenUser = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            {/* ---тут код для выскакивающего элемента пользователя, добавляем onClick, который вызывает функцию--- */}
            <a className="header__user _hover02" onClick={toggleOpenUser} >
              Ivan Ivanov
            </a>
           {/*Пишем логику для отрисовки модального окошка, если первое условие выполнено, то сработает второе*/}
           {isOpen && (
            <div
            className="header__pop-user-set pop-user-set"
            id="user-set-target"
          >
             {/* <a href="">x</a> */} 
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
            
          </nav>
        </div>
      </div>
    </header>
  );
};
