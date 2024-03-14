import { Container, Schedule, Arrow } from "./styles";

import { Header } from "../../components/Header";
import { Day } from "../../components/Day";
import { ButtonText } from "../../components/ButtonText";
import { AddTask } from "../../components/AddTask";

import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"

import { useRef, useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
    const [ tasks, setTasks ] = useState([])
    const [ newTask, setNewTask ] = useState("")

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

    let month = data.getMonth() + 1 < 10 ? "0"+String(data.getMonth() + 1) : data.getMonth() + 1
    let day = data.getDate() < 10 ? "0"+data.getDate() : data.getDate()
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

    function changeDay(newDay) {
        day = newDay
    }

    function changeMonth(newMonth) {
        month = newMonth
    }

    function createNewTask() {
        if (!newTask) return alert("Type down a description to your task.")

        
    }

    useEffect(() => {
        async function fetchTasks() {
            const response = await api.get(`/schedule/${9}/${3}`)
            const tasksData = response.data.tasks

            setTasks(tasksData.map((task) => task.description))
        }
        monthDays()
        fetchTasks()
    }, [])
    
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
                        <Day number={1} day="Wed" onClick={() => changeDay(1)}/>
                        <Day number={2} day="Thu" onClick={() => changeDay(2)}/>
                        <Day number={3} day="Fri" onClick={() => changeDay(3)}/>
                        <Day number={4} day="Sat" onClick={() => changeDay(4)}/>
                        <Day number={5} day="Sun" onClick={() => changeDay(5)}/>
                        <Day number={6} day="Mon" onClick={() => changeDay(6)}/>
                        <Day number={7} day="Tue" onClick={() => changeDay(7)}/>
                        <Day number={8} day="Wed" onClick={() => changeDay(8)}/>
                        <Day number={9} day="Thu" onClick={() => changeDay(9)}/>
                        <Day number={10} day="Fri" onClick={() => changeDay(10)}/>
                        <Day number={11} day="Sat" onClick={() => changeDay(11)}/>
                        <Day number={12} day="Sun" onClick={() => changeDay(12)}/>
                        <Day number={13} day="Mon" onClick={() => changeDay(13)}/>
                        <Day number={14} day="Tue" onClick={() => changeDay(14)}/>
                        <Day number={15} day="Wed" onClick={() => changeDay(15)}/>
                        <Day number={16} day="Thu" onClick={() => changeDay(16)}/>
                        <Day number={17} day="Fri" onClick={() => changeDay(17)}/>
                        <Day number={18} day="Sat" onClick={() => changeDay(18)}/>
                        <Day number={19} day="Sun" onClick={() => changeDay(19)}/>
                        <Day number={20} day="Mon" onClick={() => changeDay(20)}/>
                        <Day number={21} day="Tue" onClick={() => changeDay(21)}/>
                        <Day number={22} day="Wed" onClick={() => changeDay(22)}/>
                        <Day number={23} day="Thu" onClick={() => changeDay(23)}/>
                        <Day number={24} day="Fri" onClick={() => changeDay(24)}/>
                        <Day number={25} day="Sat" onClick={() => changeDay(25)}/>
                        <Day number={26} day="Sun" onClick={() => changeDay(26)}/>
                        <Day number={27} day="Mon" onClick={() => changeDay(27)}/>
                        <Day number={28} day="Tue" onClick={() => changeDay(28)}/>
                        <Day number={29} day="Wed" onClick={() => changeDay(29)}/>
                        <Day number={30} day="Thu" onClick={() => changeDay(30)}/>

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
                        <h1>{day}/{month}</h1>
                        {
                            tasks.map((task, index) => (
                                <AddTask 
                                    key={String(index)}
                                    value={task}
                                />
                            ))
                        }
                        <AddTask 
                            isNew
                            placeholder="Type down your plans"
                            onChange={e => setNewTask(e.target.value)}
                            value={newTask}
                        />
                    </Schedule>
                </div>
            </main>
        </Container>
    )
}