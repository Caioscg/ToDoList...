import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    width: fit-content;

    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 6px;
    
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;

    margin-bottom: 20px;

    font-weight: ${({ highlight }) => highlight? 700 : 400 };
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    background-color: ${({ theme }) => theme.COLORS.DARK_500};

    transition: all .3s;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 600px) {
        display: none;
    }
`
