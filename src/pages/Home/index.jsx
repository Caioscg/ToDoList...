import { Container } from "./styles";

export function Home() {
    const data = new Date()

    const month = data.getMonth() + 1
    const day = data.getDate()
    let amountOfDays

    function monthDays() {
        if (month == 4 || month == 6 || month == 9 || month == 11) {
            amountOfDays = 30
        }
        else if (month == 2) {
            amountOfDays = 29 // calc ano bixesto
        }
        else {
            amountOfDays = 31
        }
    }
    

    monthDays()

    return(
        <Container>
            
        </Container>
    )
}