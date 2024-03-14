import { Container } from "./styles";

export function Day({ number, day, onClick, ...rest }) {
    return(
        <Container {...rest} onClick={onClick}>
            <div className="day-number">
                {number}
            </div>
            <div className="day-week">
                {day}
            </div>
        </Container>
    )
}