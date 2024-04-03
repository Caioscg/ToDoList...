import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content";

    ::-webkit-scrollbar {
        width: 20px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        margin-block: 12px;
        margin-bottom: 40px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        border-radius: 100vw;
        border: 5px solid ${ ({ theme }) => theme.COLORS.BLUE_200};
    }

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

    @media (max-width: 1150px) {
        main {
            .daysBar {
                max-width: 950px;
            }
        }
    }

    @media (max-width: 970px) {
        main {
            .daysBar {
                max-width: 800px;
            }
        }
    }

    @media (max-width: 800px) {
        main {
            .daysBar {
                max-width: 600px;
            }
            .days {
                padding: 0;
            }
        }
    }

    @media (max-width: 600px) {
        main {
            .daysBar {
                max-width: 400px;
            }

            .days {
                overflow-x: auto;
            }
        }
    }
`

export const Schedule = styled.div`
    grid-area: "schedule";

    min-height: 600px;
    max-height: fit-content;
    padding: 48px;
    padding-top: 32px;
    width: 600px;
    border-radius: 12px;

    h1 {
        text-align: center;
        margin-bottom: 32px;
    }

    background-image: linear-gradient(
        to top left,
        ${({ theme}) => theme.COLORS.DARK_100},
        ${({ theme}) => theme.COLORS.DARK_200}
    );

    @media (max-width: 970px) {
        width: 400px;
    }
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

    @media (max-width: 600px) {
        display: none;
    }
`