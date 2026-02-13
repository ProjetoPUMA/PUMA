import HomeWork from "../components/HomeWork"
import Timeline from "../components/Timeline"
import { homeworks_array } from "../data/data"
import { getWeek, getYear } from "date-fns";

function HomePage() {
    const weeklyActivities = homeworks_array.filter((item)=> {
        const dueDate = item.due_date;
        const today = new Date();

        return (
            getWeek(dueDate) == getWeek(today) && getYear(dueDate) == getYear(today)
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
                        <button>Ver tudo</button>
                    </div>
                    {weeklyActivities.length === 0 ? 'Nenhuma tarefa com prazo de entrega para essa semana' : <ul>
                        {weeklyActivities.map((item)=><HomeWork key={item.id} news={item.news} desc={item.desc} subject={item.subject} date={item.due_date} />)}
                    </ul>}
                </div>
                <div>
                    <div className="flex justify-content-between mb-5">
                        <h3>Provas da Semana</h3>
                        <button>Ver tudo</button>
                    </div>
                    {weeklyActivities.length === 0 ? 'Nnenhuma prova programada para essa semana' : <ul>
                        {weeklyActivities.map((item)=><HomeWork key={item.id} news={item.news} desc={item.desc} subject={item.subject} date={item.due_date} />)}
                    </ul>}
                </div>

                
            </section>
        </>
    )
}

export default HomePage
