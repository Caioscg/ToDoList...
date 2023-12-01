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

        .days {
            width: 100%;
            padding: 32px 64px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24px;
            
        }
    }
`

export const Schedule = styled.div`
    height: 100%;
    padding: 48px;
`