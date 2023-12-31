import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    width: fit-content;
    
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;

    margin-bottom: 20px;

    font-weight: ${({ highlight }) => highlight? 700 : 500 };
    color: ${({ theme }) => theme.COLORS.DARK_100};
`
