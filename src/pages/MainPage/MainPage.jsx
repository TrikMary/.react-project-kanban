import { useState, useEffect } from "react";
// import { cardList } from "../../data";
import { Wrapper } from "../../globalStyle.styled.js";
// import { PopExit } from "../../components/PopExit/PopExit.jsx";
import { PopNewCard } from "../../components/PopNewCard/PopNewCard";
// import { PopBrowse } from "../../components/PopBrowse/PopBrowse.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api/tasks.js";

export const MainPage = ({ changeTheme, setChangeTheme }) => {
    {
        /* Создаем состояние, которое можем изменять */
      }
      const [cards, setCards] = useState([]);
      const [error, setError] = useState("");
      {
        /* Создаем функцию по добавлению новой задачи, вместо id берем длинну cards из состояния */
      }
      const addCard = () => {
        const newCard = {
          id: cards.length + 1,
          topic: "Web Design",
          title: "Название new задачи",
          date: "30.10.23",
          status: "Без статуса",
        };
        { /* С помощью spread оператора раскладываем массив 
        на обьекты и добавляем к нему еще один обьект и опять упаковываем в массив */ }
        setCards([...cards, newCard])
      };
      {/* Создаем имитацию загрузки и отрисовываем выбор ниже в return */}
      const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
        getTasks().then((res) => {
        console.log(res);
        setCards(res.tasks);
        
      })
      .catch ((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally (() => {
        setIsLoading(false);
      })
        // setIsLoading(true);
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 1000);
      }, []);
    return (
        
        <Wrapper>
        {/* <PopExit /> */}
        <Outlet />
        <PopNewCard />
        {/* <PopBrowse /> */}
        <Header addCard={addCard} setChangeTheme={setChangeTheme} changeTheme={changeTheme}/>
        {isLoading ? (
          <p className="loader">Данные загружаются</p>
        ) : error ? (
        <p>Error</p>
        ) : (
          <Main cards={cards} />
        )}
      </Wrapper>
    )
}