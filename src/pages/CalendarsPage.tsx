import { useState } from "react";
import { subjects_array } from "../data/data"
import BusModal from "../components/BusModal";
import Calendar from "../components/Calendar";

function CalendarsPage() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)


    const roomInfo = {
        room: '107 | Primeiro andar',
        lab: '401 | Quarto andar'
    }

    const daysWeek = [
        {
            day: "Segunda-Feira",
            day_week: 'mon'
        },
        {
            day: "Terça-Feira",
            day_week: 'tue'
        },
        {
            day: "Quarta-Feira",
            day_week: 'wed'
        },
        {
            day: "Quinta-Feira",
            day_week: 'thu'
        },
        {
            day: "Sexta-Feira",
            day_week: 'fri'
        },
    ]

    const schedule = daysWeek.map((currentDay) => {
        const classesOfDay = subjects_array
            .filter((subject) => 
                subject.classes.some((cls) => cls.day === currentDay.day_week)
            )
            .map((subject) => {
                const classInfo = subject.classes.find((cls) => cls.day === currentDay.day_week);
                        
                return {
                    name: subject.subject, 
                    teacher: subject.teacher,
                    start: classInfo?.start,
                    end: classInfo?.end,
                };
        });
        classesOfDay.sort((a, b) => (a.start || '').localeCompare((b.start || '')));
        return {
            dayName: currentDay.day,
            classes: classesOfDay
        };
    });


    return (
        <>
            <h1 className="mb-5">Horários</h1>
            <div className="flex justify-content-between mb-8">
                <div>
                    <h2>Sala de Aula: {roomInfo.room}</h2>
                    <h2>Laboratório: {roomInfo.lab}</h2>
                </div>
                <button onClick={()=> setIsModalOpen(true)}>Clique aqui para ver os horários de ônibus!</button>
            </div>
            <section className="flex align-items-start justify-content-between gap-5 section__schedule">
                {schedule.map((day, index)=> (
                    <div className="flex flex-column gap-6">
                        <div key={index}>
                            <h3>{day.dayName}</h3>
                        </div>
                        <ul className="schedule__list flex flex-column gap-5">
                            {day.classes.map((cls, index)=> {
                                const clsStart = cls.start?.replace(/^0/, '').replace(':', 'h');
                                const clsEnd = cls.end?.replace(/^0/, '').replace(':', 'h');

                                return (
                                <li className="flex flex-column gap-4 justify-content-between" key={index}>
                                    <div>
                                        <h4>Prof. {cls.teacher.split(' ')[0]}</h4>
                                        <h2 >{cls.name}</h2>
                                    </div>
                                    <div>
                                        <span>{clsStart}</span>
                                        - <span>{clsEnd}</span>
                                    </div>
                                </li>
                            )})}
                        </ul>
                    </div>
                ))}
            </section>
            <h1 className="mb-5">Calendário Letivo 2026</h1>
            <section>
                <Calendar />
            </section>
            {isModalOpen && <BusModal setState={setIsModalOpen} />}
        </>
    )
}

export default CalendarsPage
