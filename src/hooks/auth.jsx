import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@todolist:user", JSON.stringify(user))
            localStorage.setItem("@todolist:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`  // apply token to all reqs of this user

            setData({ user, token })

        } catch(error) {
            if (error.response) {
                alert(error.response.data.message)
            }
            else {
                alert("Não foi possível entrar.")
            }
        }
    }

    async function signOut() {
        localStorage.removeItem("@todolist:user")
        localStorage.removeItem("@todolist:token")

        setData({}) // goes to auth routes
    }

    useEffect(() => {
        const token = localStorage.getItem("@todolist:token")
        const user = localStorage.getItem("@todolist:user")

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}` // apply token to all reqs of this user

            setData({
                token,
                user: JSON.parse(user)
            })
        }

    }, [])

    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }