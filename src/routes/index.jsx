import { BrowserRouter } from "react-router-dom"

import { AuthRoutes } from "./auth.routes"
import { AppRoutes } from "./app.routesroutes"

export function Routes() {
    return(
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    )
}