import styled from "styled-components"

export const Container = styled.div`
    width: fit-content;
    padding: 32px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_100};
`