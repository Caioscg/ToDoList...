import { Container } from "./styles";

export function ButtonText({ title, highlight, onClick, ...rest }) {
    return(
        <Container highlight={highlight} onClick={onClick}>
            {title}
        </Container>
    )
}