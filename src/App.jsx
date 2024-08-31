import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { PopBrowse } from "./components/PopBrowse/PopBrowse.jsx";
import { PopUser } from "./components/PopUser/PopUser.jsx";
import { PopNewCard } from "./components/PopNewCard/PopNewCard.jsx";
import { useEffect, useState } from "react";
import { cardList } from "./data.js";
import { GlobalStyle, Wrapper } from "./globalStyle.styled.js";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme.js";
import { AppRoutes } from "./router/AppRoutes.jsx";

function App() {
 

  {/* Создаем состояние, которое будет отвечать за смену темы */}
  const [changeTheme, setChangeTheme] = useState("light")

  return (
    <ThemeProvider theme={changeTheme === "light" ? light : dark}>
      <GlobalStyle />

      {/* Вставляем компонент с страницами */}
      <AppRoutes changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
     
    </ThemeProvider>
  );
}

export default App;
