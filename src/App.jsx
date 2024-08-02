import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { PopBrowse } from "./components/PopBrowse/PopBrowse.jsx";
import { PopUser } from "./components/PopUser/PopUser.jsx";
import { PopNewCard } from "./components/PopNewCard/PopNewCard.jsx";
import { useEffect, useState } from "react";
import { cardList } from "./data";
import { GlobalStyle, Wrapper } from "./globalStyle.styled.js";

function App() {
  {
    /* Создаем состояние, которое можем изменять */
  }
  const [cards, setCards] = useState(cardList);
  {
    /* Создаем функцию по добавлению новой задачи */
  }
  const addCard = () => {
    const newCard = {
      id: cardList.length + 1,
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
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopUser />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} />
        {isLoading ? (
          <p className="loader">Данные загружаются</p>
        ) : (
          <Main cards={cards} />
        )}
      </Wrapper>
    </>
  );
}

export default App;
