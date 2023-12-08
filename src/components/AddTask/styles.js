import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.LIGHT_200}` : `1px solid ${theme.COLORS.LIGHT_100}`};

    border-radius: 8px;

    font-size: 16px;
    line-height: 100%;

    padding: 6px 16px;
    margin-top: 16px;

    > button {
        border: none;
        background: none;
        margin-top: 2px;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED_100};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > input {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        border: none;
        border-radius: 0%;
        min-width: fit-content;

        padding-left: 2px;
        width: 100%;
    }

    .input-new {
            background-color: transparent;
        }

    .input-old {
        background-color: transparent;
    }
`