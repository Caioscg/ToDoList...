import { Container } from "./styles";

export function Day({ number, day, ...rest }) {
    return(
        <Container {...rest}>
            <div className="day-number">
                {number}
            </div>
            <div className="day-week">
                {day}
            </div>
        </Container>
    )
}