import { Route, Routes } from "react-router-dom"

import { Enter } from "../pages/Enter"

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Enter />}/>
        </Routes>
    )
}