import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes.js"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage.jsx"
import { MainPage } from "../pages/MainPage/MainPage.jsx"

import { LoginPage } from "../pages/LoginPage/LoginPage.jsx"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage.jsx"
import { ExitPage } from "../pages/ExitPage/ExitPage.jsx"
import { useState } from "react"
import { ProtectedRoute } from "./ProtectedRoute.jsx"
import { cardList } from "../data.js"
import { PopBrowse } from "../components/PopBrowse/PopBrowse.jsx"

// Здесь обозначаем существующие страницы и их маршруты

export const AppRoutes = ({ changeTheme, setChangeTheme }) => {
    const [isAuth, setIsAuth] = useState(false);
    
    return (
        <BrowserRouter>
        
            <Routes>
                <Route element={<ProtectedRoute isAuth={isAuth} />}>
                    <Route path={routes.main} element={<MainPage changeTheme={changeTheme} setChangeTheme={setChangeTheme} />} />
                    <Route path={routes.exit} element={<ExitPage setIsAuth={setIsAuth} />} />
                    <Route path={"card/:id"} element={<PopBrowse />} />
                </Route>
               
                <Route path={routes.notFound} element={<NotFoundPage />} />
                <Route path={routes.login} element={<LoginPage setIsAuth={setIsAuth} />} />
                <Route path={routes.register} element={<RegisterPage setIsAuth={setIsAuth}/>} />
                
            </Routes>
        </BrowserRouter>
    )
}