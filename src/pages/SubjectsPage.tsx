import Subjects from "../components/Subjects"
import { subjects_array } from "../data/data"

function SubjectsPage() {



    return (
        <>
            <h1>Matérias</h1>
            <section>
                {subjects_array.map((item) => <Subjects teacher={item.teacher} subject={item.subject} desc={item.desc} news={item.news} key={item.id} days={item.days} />)}
            </section>
        </>

    )
}

export default SubjectsPage
