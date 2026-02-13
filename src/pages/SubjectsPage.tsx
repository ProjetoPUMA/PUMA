import Subjects from "../components/Subjects"
import { subjects_array } from "../data/data"

function SubjectsPage() {



    return (
        <>
            <h1 className="mb-5">Matérias</h1>
            <section>
                <ul className="subjects__list">
                    {subjects_array.slice().sort((a,b) => Number(b.news) - Number(a.news)).map((item) => <Subjects teacher={item.teacher} subject={item.subject} desc={item.desc} news={item.news} key={item.id} days={item.days} link={item.link} />)}
                </ul>
            </section>
        </>

    )
}

export default SubjectsPage
