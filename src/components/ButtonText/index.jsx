import { Container } from "./styles";

export function ButtonText({ title, highlight, ...rest }) {
    return(
        <Container highlight={highlight}>
            {title}
        </Container>
    )
}