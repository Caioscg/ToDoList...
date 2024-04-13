import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    border-radius: 10px;
    border: none;

    height: 48px;
    font-size: 14px;
    font-weight: 500;

    margin-top: 8px;

    background-color: ${({ theme }) => theme.COLORS.RED_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    @media (max-width: 400px) {
        font-size: 13px;
        height: 42px;
    }
`