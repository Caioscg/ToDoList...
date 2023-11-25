import { Route, Routes } from "react-router-dom"

import { Enter } from "../pages/Enter"

export function AuthRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Enter />}/>
        </Routes>
    )
}