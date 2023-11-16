import { Container, Main, SignIn, SignUp } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiUser, FiMail, FiLock } from "react-icons/fi"

import transparente from "../../assets/todolist-high-resolution-logo-transparent.png"

export function Enter() {
    return(
        <Container>
            <Main>
                <img src={transparente} alt="" />
                <div className="message">
                    <h1>Welcome back!</h1>
                    <p>Sign in to see your schedule.
                        <br /> <br />
                        We hope you have a great week!
                    </p>
                </div>
            </Main>

            <SignIn>
                <h1>Sign In</h1>
                <Input icon={FiMail} placeholder="E-mail"/>
                <Input icon={FiLock} type="password" placeholder="Password"/>
                <Button title="Sing In"/>
            </SignIn>
        </Container>
    )
}