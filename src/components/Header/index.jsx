import { Container } from "./styles";

import logo from "../../assets/todolist-high-resolution-logo-transparent.png"

import { FiLogOut } from "react-icons/fi"

import { useAuth } from "../../hooks/auth";

export function Header() {
    const { signOut, user } = useAuth()

    function handleSignOut() {
        signOut()
    }

    return(
        <Container>
            <img src={logo} alt="Logo ToDoList..." />

            <div>
                <span>Welcome, {user.name}</span>
                <FiLogOut size={32} onClick={handleSignOut}/>
            </div>
        </Container>
    )
}