import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container, Main, SignIn, SignUp } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { useRef } from "react";

import logo from "../../assets/todolist-high-resolution-logo-transparent.png"

import FadeLoader from "react-spinners/FadeLoader";

export function Enter() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [ loading, setLoading] = useState(false)

    const { signIn, user } = useAuth()

    async function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        setLoading(true)

        await api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário criado com sucesso!")  //TODO trocar para alert mais estilizado
                setEmail("")    // reset email and password bc its the same state to sing in and sign up
                setPassword("")
                showSignIn()
            })
            .catch(error => {
                if (error.message) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível cadastrar!")
                }
            })

        setLoading(false)
    }

    function handleSignIn() {
        setLoading(true)

        signIn({ email, password })

        setLoading(false)
    }

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
        setLoading(false)
        
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
            {
                loading ? 
                <FadeLoader 
                    color={"#120F0F"}
                    loading={loading}
                    size={26}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className="spinner"
                />
                : 
                <main>
                    <SignUp id="hide" ref={signup}>
                    <h1>Sign Up</h1>

                    <Input 
                        icon={FiUser} 
                        placeholder="Name" 
                        onChange={e => setName(e.target.value)}
                    />

                    <Input 
                        icon={FiMail} 
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input 
                        icon={FiLock} 
                        type="password" 
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button 
                        title="Create your account" 
                        onClick={handleSignUp}
                    />

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
                        
                        <Input 
                            icon={FiMail} 
                            placeholder="E-mail"
                            onChange={e => setEmail(e.target.value)}
                        />
                        
                        <Input 
                            icon={FiLock} 
                            type="password" 
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        
                        <Button 
                            title="Sing In"
                            onClick={handleSignIn}
                        />

                        <a onClick={showSignUp}>I don't have an account yet</a>
                    </SignIn>
                </main>
            }
        
        </Container>
    )
}