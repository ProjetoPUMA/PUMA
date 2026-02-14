import { useState } from "react";
import HomeWork from "../components/HomeWork"
import Modal from "../components/Modal";
import Timeline from "../components/Timeline"
import { homeworks_array, tests_array } from "../data/data"
import { getWeek, getYear } from "date-fns";

function HomePage() {
    const weeklyActivities = homeworks_array.filter((item)=> {
        const dueDate = item.due_date;
        const today = new Date();

        return (
            getWeek(dueDate) == getWeek(today) && getYear(dueDate) == getYear(today)
        )
    })

    const [isWModalOpen, setIsWModalOpen] = useState<boolean>(false);
    const [isTModalOpen, setIsTModalOpen] = useState<boolean>(false);
    



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
                        <button onClick={()=> setIsWModalOpen(true)}>Ver tudo</button>
                    </div>
                    {weeklyActivities.length === 0 ? 'Nenhuma tarefa com prazo de entrega para essa semana' : <ul>
                        {weeklyActivities.map((item)=><HomeWork key={item.id} news={item.news} desc={item.desc} subject={item.subject} date={item.due_date} />)}
                    </ul>}
                </div>
                <div>
                    <div className="flex justify-content-between mb-5">
                        <h3>Provas da Semana</h3>
                        <button onClick={()=> setIsTModalOpen(true)}>Ver tudo</button>
                    </div>
                    {weeklyActivities.length === 0 ? 'Nnenhuma prova programada para essa semana' : <ul>
                        {weeklyActivities.map((item)=><HomeWork key={item.id} news={item.news} desc={item.desc} subject={item.subject} date={item.due_date} />)}
                    </ul>}
                </div>
                
            </section>
            <section className="mt-8">
                <h3 className="mb-5">Trabalhos perto do prazo:</h3>
            </section>
            {isWModalOpen && <Modal data={homeworks_array}  setState={setIsWModalOpen} />}
            {isTModalOpen && <Modal data={tests_array} tests setState={setIsTModalOpen} />}
        </>
    )
}

export default HomePage
