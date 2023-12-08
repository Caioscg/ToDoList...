import { Container, Schedule } from "./styles";

import { Header } from "../../components/Header";
import { Day } from "../../components/Day";
import { ButtonText } from "../../components/ButtonText";
import { AddTask } from "../../components/AddTask";

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
                        <ButtonText title="January" highlight={false}/>
                        <ButtonText title="February" highlight={false}/>
                        <ButtonText title="March" highlight={false}/>
                        <ButtonText title="April" highlight={false}/>
                        <ButtonText title="May" highlight={false}/>
                        <ButtonText title="June" highlight={false}/>
                        <ButtonText title="July" highlight={false}/>
                        <ButtonText title="August" highlight={false}/>
                        <ButtonText title="September" highlight={false}/>
                        <ButtonText title="October" highlight={false}/>
                        <ButtonText title="November" highlight={true}/>
                        <ButtonText title="December" highlight={false}/>
                    </div>

                    <Schedule>
                        <AddTask placeholder="Type down your plans" isNew/>
                        <AddTask placeholder=""/>
                    </Schedule>
                </div>
            </main>
        </Container>
    )
}