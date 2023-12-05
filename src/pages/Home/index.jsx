import { Container, Schedule } from "./styles";

import { Header } from "../../components/Header";
import { Day } from "../../components/Day";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
    const data = new Date()

    const month = data.getMonth() + 1
    const dayOfTheMonth = data.getDate()
    const dayOfTheWeek = data.getDay()

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
            <Header />
            <main>
                <div className="days">
                    <Day number={28} day="Tue"/>
                    <Day number={29} day="Wed"/>
                    <Day number={30} day="Thu"/>
                </div>

                <div className="test">
                    <div className="months">
                        <ButtonText title="November"/>
                        <ButtonText title="November"/>
                        <ButtonText title="November"/>
                        <ButtonText title="November"/>
                        <ButtonText title="November"/>
                        <ButtonText title="November"/>
                    </div>

                    <Schedule>
                        
                    </Schedule>
                </div>
            </main>
        </Container>
    )
}