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
        gap: 56px;

        .days {
            width: 100%;
            padding: 0 64px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24px;
            
        }
        .test {
            width: 100%;

            display: grid;
            grid-template-columns: .5fr 1fr;
            grid-template-areas:
            "months" "schedule";
        }

        .months {
            grid-area: "months";
        }
    }
`

export const Schedule = styled.div`
    grid-area: "schedule";

    min-height: 600px;
    max-height: fit-content;
    padding: 48px;
    width: 600px;
    border-radius: 12px;

    background-image: linear-gradient(
        to top left,
        ${({ theme}) => theme.COLORS.DARK_100},
        ${({ theme}) => theme.COLORS.DARK_200}
    );
`