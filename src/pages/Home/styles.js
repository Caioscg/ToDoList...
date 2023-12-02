import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: "content";
        padding: 32px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 76px;

        .days {
            width: 100%;
            padding: 0 64px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24px;
            
        }
    }
`

export const Schedule = styled.div`
    height: 80%;
    padding: 48px;
    width: 600px;
    border-radius: 12px;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};
`