import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes.js"
import { NotFound } from "../pages/NotFoundPage/NotFoundPage.jsx"
import { MainPage } from "../pages/MainPage/MainPage.jsx"

import { LoginPage } from "../pages/LoginPage/LoginPage.jsx"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage.jsx"

export const AppRoutes = ({ changeTheme, setChangeTheme }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.main} element={<MainPage changeTheme={changeTheme} setChangeTheme={setChangeTheme} />} />
                <Route path={routes.notFound} element={<NotFound />} />
                <Route path={routes.login} element={<LoginPage />} />
                <Route path={routes.register} element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    )
}