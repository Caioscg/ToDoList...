import { Container, Main, SignIn, SignUp } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { useRef } from "react";

import logo from "../../assets/todolist-high-resolution-logo-transparent.png"

export function Enter() {
    const signin = useRef(null)
    const signup = useRef(null)
    const main = useRef(null)

    const signInMessage = useRef(null)
    const signUpMessage = useRef(null)

    function showSignUp() {
        signup.current.id = "signup-op"
        signin.current.id = "signin-end"
        main.current.id = "main-right"
        setTimeout(() => {
            signInMessage.current.id="hide"
            signUpMessage.current.id=""
        }, 500)
    }

    function showSignIn() {
        signup.current.id = "signup-end"
        signin.current.id = "signin-op"
        main.current.id = "main-left"
        setTimeout(() => {
            signInMessage.current.id=""
            signUpMessage.current.id="hide"
        }, 500)
    }

    return(
        <Container>
            <SignUp id="hide" ref={signup}>
                <h1>Sign Up</h1>
                <Input icon={FiUser} placeholder="Name"/>
                <Input icon={FiMail} placeholder="E-mail"/>
                <Input icon={FiLock} type="password" placeholder="Password"/>
                <Button title="Create your account"/>
                <a onClick={showSignIn}>I already have an account</a>
            </SignUp>

            <Main ref={main}>
                <img src={logo} alt="" />
                <div className="signInMessage" ref={signInMessage}>
                    <h1>Welcome back!</h1>
                    <p>Sign in to see your schedule.
                        <br /> <br />
                        We hope you have a great week!
                    </p>
                </div>
                <div className="signUpMessage" id="hide" ref={signUpMessage}>
                    <h1>Hello friend!</h1>
                    <p>Sign up organize your schedule.
                        <br /> <br />
                        We hope you have a great week!
                    </p>
                </div>
            </Main>

            <SignIn ref={signin}>
                <h1>Sign In</h1>
                <Input icon={FiMail} placeholder="E-mail"/>
                <Input icon={FiLock} type="password" placeholder="Password"/>
                <Button title="Sing In"/>
                <a onClick={showSignUp}>I don't have an account yet</a>
            </SignIn>

        </Container>
    )
}