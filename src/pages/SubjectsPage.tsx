import { Outlet } from "react-router-dom";
import Subjects from "../components/Subjects";
import { subjects_array } from "../data/data";

function SubjectsPage() {
  return (
    <section>
      <ul className="subjects__list">
        {subjects_array
          .slice()
          .sort((a, b) => Number(b.news) - Number(a.news))
          .map((item) => (
            <Subjects
              teacher={item.teacher}
              subject={item.subject}
              desc={item.desc}
              news={item.news}
              key={item.id}
              days={item.days}
              link={item.link}
              id={item.id}
              url={item.url}
            />
          ))}
      </ul>
      <Outlet />
    </section>
  );
}

export default SubjectsPage;
