import { useState } from "react";
import HomeWork from "../components/HomeWork"
import Modal from "../components/Modal";
import Timeline from "../components/Timeline"
import { homeworks_array, tests_array, works_array } from "../data/data"
import { addDays, endOfDay, getWeek, getYear, isAfter, isBefore } from "date-fns";
import Work from "../components/Work";

function HomePage() {
    const [isWModalOpen, setIsWModalOpen] = useState<boolean>(false);
    const [isTModalOpen, setIsTModalOpen] = useState<boolean>(false);
    const [isWKModalOpen, setIsWKModalOpen] = useState<boolean>(false);

    const hasHWnews = homeworks_array.filter((item)=>item.news).length !== 0;
    const hasTnews = tests_array.filter((item)=>item.news).length !== 0;
    const hasWnews = works_array.filter((item)=>item.news).length !== 0;
    


    const weeklyHomeworks = homeworks_array.filter((item)=> {
        const dueDate = item.due_date;
        const today = new Date();

        return (
            getWeek(dueDate) == getWeek(today) && getYear(dueDate) == getYear(today)
        )
    });

    const weeklyTests = tests_array.filter((item)=> {
        const dueDate = item.due_date;
        const today = new Date();

        return (
            getWeek(dueDate) == getWeek(today) && getYear(dueDate) == getYear(today)
        )
    });

    const fiveDaysWork = works_array.filter((item)=> {
        const dueDate = item.due_date;
        const today = new Date();
        const fiveDaysFromNow = endOfDay(addDays(today, 5));
      

        return (
            (isAfter(dueDate, today) || dueDate.getTime() === today.getTime()) && isBefore(dueDate, fiveDaysFromNow) 
        )
    })

    

    
    



    return (
        <>
            <h1 className="mb-5">Atualizações Importantes</h1>
            <section>
                <Timeline />
            </section>
            <section className="mt-8 flex justify-content-between section__weekly">
                <div>
                    <div className="flex justify-content-between mb-5">
                        <h3>Tarefas da Semana</h3>
                        <button className={hasHWnews ? 'btn-all btn-news' : 'btn-all'} onClick={()=> setIsWModalOpen(true)}>Ver tudo</button>
                    </div>
                    {weeklyHomeworks.length === 0 ? <p>Nenhuma tarefa com o prazo de entrega para esta semana</p> : <ul>
                        {weeklyHomeworks.map((item)=><HomeWork key={item.id} news={item.news} desc={item.desc} subject={item.subject} date={item.due_date} />)}
                    </ul>}
                </div>
                <div>
                    <div className="flex justify-content-between mb-5">
                        <h3>Provas da Semana</h3>
                        <button className={hasTnews ? 'btn-all btn-news' : 'btn-all'} onClick={()=> setIsTModalOpen(true)}>Ver tudo</button>
                    </div>
                    {weeklyTests.length === 0 ? <p>Nenhuma prova programada para esta semana</p> : <ul>
                        {weeklyTests.map((item)=><HomeWork key={item.id} news={item.news} subject={item.subject} date={item.due_date} />)}
                    </ul>}
                </div>
                
            </section>
            <section className="mt-8">
                <div className="flex justify-content-between mb-5">
                        <h3>Trabalhos perto do prazo:</h3>
                        <button className={hasWnews ? 'btn-all btn-news' : 'btn-all'} onClick={()=> setIsWKModalOpen(true)}>Ver tudo</button>
                </div>
                {fiveDaysWork.length === 0 ? <p>Nenhum trabalho com prazo de entrega entre hoje e os próximos 5 dias.</p>  : <ul className="works__list flex flex-column">
                    {works_array.map((work)=> (
                        <Work key={work.id} date={work.due_date} subject={work.subject} title={work.title} news={work.news} desc={work.desc} />
                    ))}
                </ul>}
            </section>
            {isWModalOpen && <Modal data={homeworks_array}  setState={setIsWModalOpen} />}
            {isTModalOpen && <Modal data={tests_array} tests setState={setIsTModalOpen} />}
            {isWKModalOpen && <Modal data={works_array} works setState={setIsWKModalOpen} />}
        </>
    )
}

export default HomePage
