import { Container, Schedule, Arrow } from "./styles";

import { Header } from "../../components/Header";
import { Day } from "../../components/Day";
import { ButtonText } from "../../components/ButtonText";
import { AddTask } from "../../components/AddTask";

import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"

import { useRef } from "react";

export function Home() {
    const scrollDaysList = useRef(null)

    const handlePrevDaysList = () => {
        scrollDaysList.current.scrollBy({
        left: -450,
        behavior: 'smooth'
        });
    }

    const handleNextDaysList = () => {
        scrollDaysList.current.scrollBy({
            left: 450,
            behavior: 'smooth'
        });
    }

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
            amountOfDays = 29 //TODO calc ano bixesto
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
                <div className="daysBar">
                    <Arrow
                        direction="prev"
                        onClick={handlePrevDaysList}
                    >
                        <MdOutlineKeyboardArrowLeft />
                    </Arrow>
                    <div className="days" ref={scrollDaysList}>
                        <Day number={1} day="Wed"/>
                        <Day number={2} day="Thu"/>
                        <Day number={3} day="Fri"/>
                        <Day number={4} day="Sat"/>
                        <Day number={5} day="Sun"/>
                        <Day number={6} day="Mon"/>
                        <Day number={7} day="Tue"/>
                        <Day number={8} day="Wed"/>
                        <Day number={9} day="Thu"/>
                        <Day number={10} day="Fri"/>
                        <Day number={11} day="Sat"/>
                        <Day number={12} day="Sun"/>
                        <Day number={13} day="Mon"/>
                        <Day number={14} day="Tue"/>
                        <Day number={15} day="Wed"/>
                        <Day number={16} day="Thu"/>
                        <Day number={17} day="Fri"/>
                        <Day number={18} day="Sat"/>
                        <Day number={19} day="Sun"/>
                        <Day number={20} day="Mon"/>
                        <Day number={21} day="Tue"/>
                        <Day number={22} day="Wed"/>
                        <Day number={23} day="Thu"/>
                        <Day number={24} day="Fri"/>
                        <Day number={25} day="Sat"/>
                        <Day number={26} day="Sun"/>
                        <Day number={27} day="Mon"/>
                        <Day number={28} day="Tue"/>
                        <Day number={29} day="Wed"/>
                        <Day number={30} day="Thu"/>

                    </div>
                    <Arrow
                        direction="next"
                        onClick={handleNextDaysList}
                    >
                        <MdOutlineKeyboardArrowRight />
                    </Arrow>
                </div>

                <div className="test">
                    <div className="months">
                        <ButtonText title="January"/>
                        <ButtonText title="February"/>
                        <ButtonText title="March"/>
                        <ButtonText title="April"/>
                        <ButtonText title="May"/>
                        <ButtonText title="June"/>
                        <ButtonText title="July"/>
                        <ButtonText title="August"/>
                        <ButtonText title="September"/>
                        <ButtonText title="October"/>
                        <ButtonText title="November" highlight/>
                        <ButtonText title="December"/>
                    </div>

                    <Schedule>
                        <AddTask placeholder="" value="College"/>
                        <AddTask placeholder="" value="Workout"/>
                        <AddTask placeholder="Type down your plans" isNew/>
                    </Schedule>
                </div>
            </main>
        </Container>
    )
}