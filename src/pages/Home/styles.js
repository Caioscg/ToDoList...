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
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        margin-block: 12px;
        margin-bottom: 40px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_200};
        border-radius: 100vw;
        border: 3px solid ${ ({ theme }) => theme.COLORS.DARK_100};
    }

    .spinner {
        margin-top: 100px;
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
        .content {
            width: 100%;

            display: grid;
            grid-template-columns: .5fr 1fr;
            grid-template-areas:
            "months" "schedule";

            #open-menu {
                display: none;
                color: ${({ theme }) => theme.COLORS.DARK_100};
                position: absolute;
                cursor: pointer;
            }
            #close-menu {
                display: none;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                position: absolute;
                cursor: pointer;
                left: 90px;
            }
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
        grid-template-rows: 92px auto;
        main {
            .daysBar {
                flex-direction: column;
                max-width: 400px;
            }

            .days {
                overflow-x: auto;
            }
            .content {
                display: flex;
                justify-content: center;

                #open-menu {
                    display: block;
                    left: 0;
                }
                #close-menu {
                    display: block;
                }

                .months {
                    display: none;
                    background-color: ${({ theme }) => theme.COLORS.DARK_100};
                    border-top-right-radius: 100%;
                    border-bottom-right-radius: 100%;

                    padding-top: 12px;
                    padding-right: 100px;

                    position: absolute;
                    left: 0;
                }
                #show {
                    display: block;
                    -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	                animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                }
                #hide {
                    display: block;
                    -webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	                animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                }
            }
        }
        @-webkit-keyframes slide-right {
            0% {
                -webkit-transform: translateX(-100spx);
                transform: translateX(-100px);
            }
            100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }
        @keyframes slide-right {
            0% {
                -webkit-transform: translateX(-100px);
                transform: translateX(-100px);
            }
            100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }
        @-webkit-keyframes slide-left {
            0% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
            100% {
                -webkit-transform: translateX(-200px);
                transform: translateX(-200px);
                display: none;
            }
        }
        @keyframes slide-left {
            0% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
            100% {
                -webkit-transform: translateX(-200px);
                transform: translateX(-200px);
                display: none;
            }
        }

        @media (max-width: 450px) {
            main {
                .daysBar {
                    max-width: 300px;
                }
            }
        }
    }
`

export const Schedule = styled.div`
    grid-area: "schedule";

    max-height: 65vh;
    padding: 48px;
    padding-top: 32px;
    width: 600px;
    border-radius: 12px;
    overflow-x: auto;

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_200};
        border-radius: 100vw;
        border: 3px solid ${ ({ theme }) => theme.COLORS.DARK_100};
    }

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
        height: 500px;
    }

    @media (max-width: 450px) {
        padding: 28px 12px;
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