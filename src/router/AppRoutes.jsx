import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes.js"
import { NotFound } from "../pages/NotFound/NotFound.jsx"
import { MainPage } from "../pages/MainPage/MainPage.jsx"

export const AppRoutes = ({ changeTheme, setChangeTheme }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.main} element={<MainPage changeTheme={changeTheme} setChangeTheme={setChangeTheme} />} />
                <Route path={routes.notFound} element={<NotFound />} />
                
            </Routes>
        </BrowserRouter>
    )
}