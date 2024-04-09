import { Container, Schedule, Arrow } from "./styles";

import { Header } from "../../components/Header";
import { Day } from "../../components/Day";
import { ButtonText } from "../../components/ButtonText";
import { AddTask } from "../../components/AddTask";

import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { TbSquareRoundedArrowRightFilled, TbSquareRoundedArrowLeftFilled } from "react-icons/tb"

import { useRef, useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
    const [ tasks, setTasks ] = useState([])
    const [ newTask, setNewTask ] = useState("")

    const scrollDaysList = useRef(null)
    
    const handlePrevDaysList = () => {
        scrollDaysList.current.scrollBy({
            left: -450,
            behavior: 'smooth',
        });
    }
    
    const handleNextDaysList = () => {
        scrollDaysList.current.scrollBy({
            left: 450,
            behavior: 'smooth'
        });
    }

    const handleScrollBack = () => {
        scrollDaysList.current.scrollBy({
            left: -3000,
            behavior: 'smooth'
        })
    }

    const data = new Date()
    
    const [ day, setDay ] = useState(data.getDate())
    const [ month, setMonth ] = useState(data.getMonth() + 1)

    let baseDayOfTheWeek = new Date(`${month} 1, 2024`)
    const [ dayOfTheWeek, setDayOfTheWeek ] = useState(baseDayOfTheWeek.getDay())

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
        setDayOfTheWeek(newDate.getDay())

        setDay(1)
        handleScrollBack()
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

        fetchTasks()
    }

    async function handleRemoveTask(taskToDelete) {
        setTasks(prev => prev.filter(task => task !== taskToDelete))
        await api.delete(`/task/${taskToDelete.id}`)
    }

    async function toggleCheckTask(task) {
        await api.patch(`/task/${task.id}`)
        fetchTasks()
    }

    async function fetchTasks() {
        setTasks([])   // clear other day's tasks

        const response = await api.get(`/schedule/${day}/${month}`)
        const tasksData = response.data.tasks
        
        if (!tasksData) return  // a day with no tasks yet

        setTasks(tasksData.map((task) => task))
    }

    function openMenu() {
        //add id na div dos months q vai ter animação pra aparecer
    }

    function closeMenu() {
        //add id na div dos months q vai ter animação pra sumir
    }

    useEffect(() => {
        fetchTasks()
    }, [day, month])

    useEffect(() => {
        const beginnerScroll = () => {
            scrollDaysList.current.scrollBy({
                left: day<8? 0 : day<13? 60*day : 87*day,
                behavior: 'smooth'
            })
        }
        beginnerScroll()
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
                        <Day number={1} day={dayOfTheWeek} onClick={() => changeDay(1)}/>
                        <Day number={2} day={dayOfTheWeek + 1} onClick={() => changeDay(2)}/>
                        <Day number={3} day={dayOfTheWeek + 2} onClick={() => changeDay(3)}/>
                        <Day number={4} day={dayOfTheWeek + 3} onClick={() => changeDay(4)}/>
                        <Day number={5} day={dayOfTheWeek + 4} onClick={() => changeDay(5)}/>
                        <Day number={6} day={dayOfTheWeek + 5} onClick={() => changeDay(6)}/>
                        <Day number={7} day={dayOfTheWeek + 6} onClick={() => changeDay(7)}/>
                        <Day number={8} day={dayOfTheWeek + 7} onClick={() => changeDay(8)}/>
                        <Day number={9} day={dayOfTheWeek + 8} onClick={() => changeDay(9)}/>
                        <Day number={10} day={dayOfTheWeek + 9} onClick={() => changeDay(10)}/>
                        <Day number={11} day={dayOfTheWeek + 10} onClick={() => changeDay(11)}/>
                        <Day number={12} day={dayOfTheWeek + 11} onClick={() => changeDay(12)}/>
                        <Day number={13} day={dayOfTheWeek + 12} onClick={() => changeDay(13)}/>
                        <Day number={14} day={dayOfTheWeek + 13} onClick={() => changeDay(14)}/>
                        <Day number={15} day={dayOfTheWeek + 14} onClick={() => changeDay(15)}/>
                        <Day number={16} day={dayOfTheWeek + 15} onClick={() => changeDay(16)}/>
                        <Day number={17} day={dayOfTheWeek + 16} onClick={() => changeDay(17)}/>
                        <Day number={18} day={dayOfTheWeek + 17} onClick={() => changeDay(18)}/>
                        <Day number={19} day={dayOfTheWeek + 18} onClick={() => changeDay(19)}/>
                        <Day number={20} day={dayOfTheWeek + 19} onClick={() => changeDay(20)}/>
                        <Day number={21} day={dayOfTheWeek + 20} onClick={() => changeDay(21)}/>
                        <Day number={22} day={dayOfTheWeek + 21} onClick={() => changeDay(22)}/>
                        <Day number={23} day={dayOfTheWeek + 22} onClick={() => changeDay(23)}/>
                        <Day number={24} day={dayOfTheWeek + 23} onClick={() => changeDay(24)}/>
                        <Day number={25} day={dayOfTheWeek + 24} onClick={() => changeDay(25)}/>
                        <Day number={26} day={dayOfTheWeek + 25} onClick={() => changeDay(26)}/>
                        <Day number={27} day={dayOfTheWeek + 26} onClick={() => changeDay(27)}/>
                        <Day number={28} day={dayOfTheWeek + 27} onClick={() => changeDay(28)}/>
                        <Day number={29} day={dayOfTheWeek + 28} onClick={() => changeDay(29)}/>
                        { AmountOfDays>=30 ? <Day number={30} day={dayOfTheWeek + 39} onClick={() => changeDay(30)}/> : "" }
                        { AmountOfDays==31 ? <Day number={31} day={dayOfTheWeek + 30} onClick={() => changeDay(31)}/> : "" }

                    </div>
                    <Arrow
                        direction="next"
                        onClick={handleNextDaysList}
                    >
                        <MdOutlineKeyboardArrowRight />
                    </Arrow>
                </div>

                <div className="content">
                    <TbSquareRoundedArrowRightFilled id="open-menu" onClick={openMenu} size={32}/>
                    <TbSquareRoundedArrowLeftFilled id="close-menu" onClick={closeMenu} size={32}/>
                    <div className="months">
                        <ButtonText title="January" highlight={month == 1} onClick={() => changeMonth(1)}/>
                        <ButtonText title="February" highlight={month == 2} onClick={() => changeMonth(2)}/>
                        <ButtonText title="March" highlight={month == 3} onClick={() => changeMonth(3)}/>
                        <ButtonText title="April" highlight={month == 4} onClick={() => changeMonth(4)}/>
                        <ButtonText title="May" highlight={month == 5} onClick={() => changeMonth(5)}/>
                        <ButtonText title="June" highlight={month == 6} onClick={() => changeMonth(6)}/>
                        <ButtonText title="July" highlight={month == 7} onClick={() => changeMonth(7)}/>
                        <ButtonText title="August" highlight={month == 8} onClick={() => changeMonth(8)}/>
                        <ButtonText title="September" highlight={month == 9} onClick={() => changeMonth(9)}/>
                        <ButtonText title="October" highlight={month == 10} onClick={() => changeMonth(10)}/>
                        <ButtonText title="November" highlight={month == 11} onClick={() => changeMonth(11)}/>
                        <ButtonText title="December" highlight={month == 12} onClick={() => changeMonth(12)}/>
                    </div>

                    <Schedule>
                        <h1>{day < 10 ? "0"+day : day}/{month < 10 ? "0"+month : month}</h1>
                        {
                            tasks.map((task, index) => (
                                <AddTask 
                                    key={String(index)}
                                    value={task.description}
                                    onClick={() => handleRemoveTask(task)}
                                    onCheck={() => toggleCheckTask(task)}
                                    status={task.status}
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