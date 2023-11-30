import { Container } from "./styles";

import logo from "../../assets/todolist-high-resolution-logo-transparent.png"

import { FiLogOut } from "react-icons/fi"

export function Header() {
    //TODO select month
    return(
        <Container>
            <img src={logo} alt="Logo ToDoList..." />



            <div>
                <span>Welcome, Caio</span>
                <FiLogOut size={32}/>
            </div>
        </Container>
    )
}