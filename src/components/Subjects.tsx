import { Link } from "react-router-dom";

function Subjects({
  teacher,
  days,
  subject,
  desc,
  news,
  link,
  id,
}: {
  teacher: string;
  days: string[];
  subject: string;
  desc: string;
  news: boolean;
  link?: string;
  id: number;
}) {
  const new_ID = String(id);

  return (
    <li className={`subjects__container subjects__container--${new_ID}`}>
      <div className="subjects__content">
        <div className="subjects__header flex flex-column gap-1">
          <div className="flex w-100 justify-content-between subjects__info">
            <h4>{teacher}</h4>
            <h4>
              {days[0]} {days.length > 1 ? `| ${days[1]}` : ""}
            </h4>
          </div>
          <h2>{subject}</h2>
        </div>
        <div className="subjects__desc">
          <div
            className={`flex flex-column  align-items-start ${news ? "mb-3" : ""}`}
          >
            <div className="flex justify-content-between align-items-end w-100">
              <p className="subjects__text ">{desc}</p>
              <Link className="subjects__link" target="_blank" to={link ?? ""}>
                Acessar conteúdo
              </Link>
            </div>
            {news && (
              <p className="flex align-items-center gap-1 mt-2 subjects__news">
                !!! Amigos, temos atualizações sobre essa matéria. Fiquem
                atentos ao mural !!!
              </p>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default Subjects;
