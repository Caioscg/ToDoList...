import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BLUE_200};
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

    body, input, button, textarea {
        //font-family: 'Poppins', sans-serif;
        font-family: 'Montserrat', sans-serif;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: all .5s;
    }

    button:hover, a:hover {
        filter: brightness(0.87);
    }

    // react loading spinner: 

    .spinner {
        display: block;
        margin: auto;
    }

    //animations:

    @keyframes moveRightMiddle {
        0% {
            transform: translateX(0);
            opacity: 75%;
        }
        50% {
            opacity: 33%;
        }
        100% {
            transform: translateX(-100%);
            opacity: 0;
            display: none;
        }
    }
    @keyframes moveMiddleLeft {
        0% {
            transform: translateX(100%);
            display: none;
            opacity: 0;
        }
        1% {
            display: block;
        }
        50% {
            opacity: 50%;
        }
        100% {
            transform: translateX(0);
            opacity: 100%;
        }
    }
    @keyframes moveLeftMiddle {
        0% {
            transform: translateX(0);
            opacity: 75%;
        }
        50% {
            opacity: 33%;
        }
        100% {
            transform: translateX(100%);
            opacity: 0;
            display: none;
        }
    }
    @keyframes moveMiddleRight {
        0% {
            transform: translateX(-100%);
            display: none;
            opacity: 0;
        }
        1% {
            display: block;
        }
        50% {
            opacity: 50%;
        }
        100% {
            transform: translateX(0);
            opacity: 100%;
        }
    }
    @keyframes moveMainRight1 {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(30%);
        }
    }
    @keyframes moveMainRight2 {
        0% {
            transform: translateX(-250px);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes moveMainLeft1 {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-30%);
        }
    }
    @keyframes moveMainLeft2 {
        0% {
            transform: translateX(250px);
        }
        100% {
            transform: translateX(0);
        }
    }
`