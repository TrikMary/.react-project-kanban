import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { PopBrowse } from "./components/PopBrowse";
import { PopUser } from "./components/PopUser";
import { PopNewCard } from "./components/PopNewCard";
import { useEffect, useState } from "react";
import { cardList } from "./data";

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
    {
      /*С помощью spread оператора раскладываем массив 
    на обьекты и добавляем к нему еще один обьект и опять упаковываем в массив*/
    }
    setCards([...cards, newCard]);
  };
  {/*Создаем имитацию загрузки и отрисовываем выбор ниже в return*/}
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="wrapper">
        <PopUser />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} />
        {isLoading ? (
          <p className="loader">Данные загружаются</p>
        ) : (
          <Main cards={cards} />
        )}
      </div>
    </>
  );
}

export default App;
