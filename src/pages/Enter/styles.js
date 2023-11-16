import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 128px;

    .hide {
        display: none;
    }
`

export const SignIn = styled.div`
    padding: 64px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    background-color: ${({ theme }) => theme.COLORS.DARK_100};

    border-radius: 12px;

    h1 {
        margin-bottom: 16px;
        font-size: 42px;
    }
`

export const SignUp = styled.div`

`

export const Main = styled.div`
    padding: 32px;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 64px;

    img {
        width: 600px;
    }

    .message {
        text-align: left;
        width: 100%;        p {
            font-weight: 400;
        }
    }

`