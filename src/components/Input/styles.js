import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_200};

    > input { 
        height: 48px;
        width: 100%;

        font-size: 14px;

        padding: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_200};
        }

    }
    > svg {
            margin-left: 16px; 
        }

    @media (max-width: 400px) {
        input {
            padding: 12px;
            font-size: 13px;
        }
    }
`