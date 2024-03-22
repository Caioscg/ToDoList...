import { Container } from "./styles";

export function Day({ number, day, onClick, ...rest }) {
    console.log(day)
    return(
        <Container {...rest} onClick={onClick}>
            <div className="day-number">
                {number}
            </div>
            <div className="day-week">
                { day%7== 0 ? "Sun" : day%7==1 ? "Mon" : day%7==2 ? "Tue" : day%7==3 ? "Wed" : day%7==4 ? "Thu" : day%7==5 ? "Fri" : "Sat"}
            </div>
        </Container>
    )
}