import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 128px;

    #hide {
        display: none;
    }

    #main-right {
        animation: moveMainRight1 ease-in .5s forwards, moveMainRight2 ease-out .5s .5s forwards;
    }
    #main-left {
        animation: moveMainLeft1 ease-in .5s forwards, moveMainLeft2 ease-out .5s .5s forwards;
    }

    #signup-op {
        animation: moveMiddleLeft ease-out .5s .5s backwards;
    }
    #signup-end {
        animation: moveLeftMiddle ease-in .5s forwards;
    }

    #signin-end {
        animation: moveRightMiddle ease-in .5s forwards;
    }
    #signin-op {
        animation: moveMiddleRight ease-out .5s .5s backwards;
    }
`

export const SignIn = styled.div`
    padding: 52px 64px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.8);

    border-radius: 12px;

    h1 {
        margin-bottom: 16px;
        font-size: 42px;

        text-shadow: 2px 2px ${({ theme }) => theme.COLORS.DARK_100};
    }
    a {
        color: ${({ theme }) => theme.COLORS.DARK_200};
        font-weight: 700;
    }
    a:hover {
        color: ${({ theme }) => theme.COLORS.DARK_100};
    }
`

export const SignUp = styled.div`
    padding: 52px 64px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.8);

    border-radius: 12px;

    h1 {
        margin-bottom: 16px;
        font-size: 42px;

        text-shadow: 2px 2px ${({ theme }) => theme.COLORS.DARK_100};
    }
    a {
        color: ${({ theme }) => theme.COLORS.DARK_200};
        font-weight: 700;
    }
    a:hover {
        color: ${({ theme }) => theme.COLORS.DARK_100};
    }
`

export const Main = styled.div`
    padding: 32px;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 64px;

    margin-bottom: 64px;
    
    img {
        width: 600px;
    }

    .signInMessage {
        text-align: left;
        width: 100%;

        h1 {
            font-size: 40px;
            text-shadow: 2px 2px ${({ theme }) => theme.COLORS.DARK_100};
        }
        p {
            font-size: 20px;
        }
    }
    .signUpMessage {
        text-align: right;
        width: 100%;

        h1 {
            font-size: 40px;
            text-shadow: 2px 2px ${({ theme }) => theme.COLORS.DARK_100};
        }
        p {
            font-size: 20px;
        }
    }
`