import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    grid-area: "header";

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 56px;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    > img {
        width: 250px;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 32px;

         span {
            font-size: 22px;
         }
         svg {
            cursor: pointer;
         }
    }
`