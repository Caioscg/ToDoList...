import styled from "styled-components"

export const Container = styled.div`
    width: fit-content;
    padding: 16px 24px;;
    border-radius: 12px;

    background-color: ${({ theme }) => theme.COLORS.DARK_100};
    cursor: pointer;

    .day-number {
        font-size: 32px;
        font-weight: 500;
    }

    .day-week {
        font-weight: 500;
        text-align: center;
    }
`