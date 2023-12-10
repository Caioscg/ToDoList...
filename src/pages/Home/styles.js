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
        overflow-x: hidden;

        .days {
            max-width: 1000px;
            padding: 0 64px;

            display: flex;
            align-items: center;
            gap: 24px;

            overflow-x: hidden;

            scroll-behavior: smooth;
            scroll-snap-type: x mandatory;
        }
        .daysBar {
            display: flex;
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

export const Arrow = styled.button`
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.5rem;
    background: transparent;

    &:hover {
        filter: brightness(1);
    }

    ${({ direction }) => direction === 'prev' ? ` 
        left: 1rem;
        -webkit-mask-image: -webkit-gradient(linear, left top, right top,
        from(rgba(0,0,0,1)), to(rgba(0,0,0, .1)));
        text-align: left;
        `: ` 
        right: 2rem;
        -webkit-mask-image: -webkit-gradient(linear, right top, left top, 
        from(rgba(0,0,0,1)), to(rgba(0,0,0, .1)));
        text-align: right;
        `
    }
`