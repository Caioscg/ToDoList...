import styled from "styled-components"

export const Container = styled.div`
    min-width: 85px;
    padding: 16px 24px;;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

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

    @media (max-width: 600px) {
        min-width: 65px;
        .day-number{
            font-size: 20px;
        }

        .day-week {
            font-size: 12px;
        }
    }
`