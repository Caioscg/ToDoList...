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

    @media (max-width: 800px) {
        > img {
            width: 180px;
        }

        > div {
            gap: 16px;

            span {
                font-size: 18px;
            }

            svg {
                width: 24px;
            }
        }
    }

    @media (max-width: 600px) {
        padding: 0 24px;

        > img {
            width: 150px;
        }

        > div {
            gap: 12px;

            span {
                font-size: 16px;
            }

            svg {
                width: 20px;
            }
        }
    }

    @media (max-width: 450px) {
        span {
            display: none;
        }
    }
`