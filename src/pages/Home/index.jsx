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
    
    const [ day, setDay ] = useState(data.getDate())
    const [ month, setMonth ] = useState(data.getMonth() + 1)

    let dayOfTheWeek = data.getDay()

    function monthDays(month) {
        if (month == 4 || month == 6 || month == 9 || month == 11) {
            return 30
        }
        else if (month == 2) {
            return 29 //TODO calc ano bixesto
        }
        else {
            return 31
        }
    }

    const [ AmountOfDays, setAmountOfDays ] = useState(monthDays(month))

    function changeDay(newDay) {
        setDay(newDay)
    }

    function changeMonth(newMonth) {
        setMonth(newMonth)
        setAmountOfDays(monthDays(newMonth))

        let newDate = new Date(`${newMonth} 1, 2024`)
        dayOfTheWeek = newDate.getDay()  //todo fazer ser estado pra sempre que att o mes
        //console.log(dayOfTheWeek)
        setDay(1)
    }

    async function createNewTask() {
        if (!newTask) return alert("Type down a description to your task.")

        setTasks(prev => [...prev, {
            description: newTask
        }])  
        
        setNewTask("")

        try {
            await api.post(`/schedule/${day}/${month}`, {
                task: newTask
            })
        } catch(error) {
            if (error.response) {
                alert(error.response.data.message)
            }
            else {
                alert("Não foi possível cadastrar o prato.")
            }
        }
    }

    async function handleRemoveTask(taskToDelete) {
        setTasks(prev => prev.filter(task => task !== taskToDelete))
        await api.delete(`/task/${taskToDelete.id}`)
    }

    useEffect(() => {
        async function fetchTasks() {
            setTasks([])   // clear other day's tasks

            const response = await api.get(`/schedule/${day}/${month}`)
            const tasksData = response.data.tasks
            
            if (!tasksData) return  // a day with no tasks yet

            setTasks(tasksData.map((task) => task))
        }
        fetchTasks()
    }, [day])
    
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
                        <Day number={1} day={dayOfTheWeek++} onClick={() => changeDay(1)}/>
                        <Day number={2} day={dayOfTheWeek++} onClick={() => changeDay(2)}/>
                        <Day number={3} day={dayOfTheWeek++} onClick={() => changeDay(3)}/>
                        <Day number={4} day={dayOfTheWeek++} onClick={() => changeDay(4)}/>
                        <Day number={5} day={dayOfTheWeek++} onClick={() => changeDay(5)}/>
                        <Day number={6} day={dayOfTheWeek++} onClick={() => changeDay(6)}/>
                        <Day number={7} day={dayOfTheWeek++} onClick={() => changeDay(7)}/>
                        <Day number={8} day={dayOfTheWeek++} onClick={() => changeDay(8)}/>
                        <Day number={9} day={dayOfTheWeek++} onClick={() => changeDay(9)}/>
                        <Day number={10} day={dayOfTheWeek++} onClick={() => changeDay(10)}/>
                        <Day number={11} day={dayOfTheWeek++} onClick={() => changeDay(11)}/>
                        <Day number={12} day={dayOfTheWeek++} onClick={() => changeDay(12)}/>
                        <Day number={13} day={dayOfTheWeek++} onClick={() => changeDay(13)}/>
                        <Day number={14} day={dayOfTheWeek++} onClick={() => changeDay(14)}/>
                        <Day number={15} day={dayOfTheWeek++} onClick={() => changeDay(15)}/>
                        <Day number={16} day={dayOfTheWeek++} onClick={() => changeDay(16)}/>
                        <Day number={17} day={dayOfTheWeek++} onClick={() => changeDay(17)}/>
                        <Day number={18} day={dayOfTheWeek++} onClick={() => changeDay(18)}/>
                        <Day number={19} day={dayOfTheWeek++} onClick={() => changeDay(19)}/>
                        <Day number={20} day={dayOfTheWeek++} onClick={() => changeDay(20)}/>
                        <Day number={21} day={dayOfTheWeek++} onClick={() => changeDay(21)}/>
                        <Day number={22} day={dayOfTheWeek++} onClick={() => changeDay(22)}/>
                        <Day number={23} day={dayOfTheWeek++} onClick={() => changeDay(23)}/>
                        <Day number={24} day={dayOfTheWeek++} onClick={() => changeDay(24)}/>
                        <Day number={25} day={dayOfTheWeek++} onClick={() => changeDay(25)}/>
                        <Day number={26} day={dayOfTheWeek++} onClick={() => changeDay(26)}/>
                        <Day number={27} day={dayOfTheWeek++} onClick={() => changeDay(27)}/>
                        <Day number={28} day={dayOfTheWeek++} onClick={() => changeDay(28)}/>
                        <Day number={29} day={dayOfTheWeek++} onClick={() => changeDay(29)}/>
                        { AmountOfDays>=30 ? <Day number={30} day={dayOfTheWeek++} onClick={() => changeDay(30)}/> : "" }
                        { AmountOfDays==31 ? <Day number={31} day={dayOfTheWeek++} onClick={() => changeDay(31)}/> : "" }

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
                        <ButtonText title="January" onClick={() => changeMonth(1)}/>
                        <ButtonText title="February" onClick={() => changeMonth(2)}/>
                        <ButtonText title="March" onClick={() => changeMonth(3)}/>
                        <ButtonText title="April" onClick={() => changeMonth(4)}/>
                        <ButtonText title="May" onClick={() => changeMonth(5)}/>
                        <ButtonText title="June" onClick={() => changeMonth(6)}/>
                        <ButtonText title="July" onClick={() => changeMonth(7)}/>
                        <ButtonText title="August" onClick={() => changeMonth(8)}/>
                        <ButtonText title="September" onClick={() => changeMonth(9)}/>
                        <ButtonText title="October" onClick={() => changeMonth(10)}/>
                        <ButtonText title="November" highlight onClick={() => changeMonth(11)}/>
                        <ButtonText title="December" onClick={() => changeMonth(12)}/>
                    </div>

                    <Schedule>
                        <h1>{day < 10 ? "0"+day : day}/{month < 10 ? "0"+month : month}</h1>
                        {
                            tasks.map((task, index) => (
                                <AddTask 
                                    key={String(index)}
                                    value={task.description}
                                    onClick={() => handleRemoveTask(task)}
                                />
                            ))
                        }
                        <AddTask 
                            isNew
                            placeholder="Type down your plans"
                            onChange={e => setNewTask(e.target.value)}
                            onClick={createNewTask}
                            value={newTask}
                        />
                    </Schedule>
                </div>
            </main>
        </Container>
    )
}