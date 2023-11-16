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
        transition: filter 0.2s;
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
`