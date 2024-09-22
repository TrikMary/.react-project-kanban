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
    const [user, setIsUser] = useState(null);
    
    return (
        <BrowserRouter>
        
            <Routes>
                <Route element={<ProtectedRoute user={user} />}>
                    <Route path={routes.main} element={<MainPage changeTheme={changeTheme} setChangeTheme={setChangeTheme} user={user}/>} />
                    <Route path={routes.exit} element={<ExitPage setIsUser={setIsUser} />} />
                    <Route path={"card/:id"} element={<PopBrowse />} />
                </Route>
               
                <Route path={routes.notFound} element={<NotFoundPage />} />
                <Route path={routes.login} element={<LoginPage setIsUser={setIsUser} />} />
                <Route path={routes.register} element={<RegisterPage setIsUser={setIsUser}/>} />
                
            </Routes>
        </BrowserRouter>
    )
}