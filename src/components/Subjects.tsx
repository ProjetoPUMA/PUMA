import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

function Subjects({
  teacher,
  days,
  subject,
  desc,
  news,
  id,
  url,
}: {
  teacher: string;
  days: string[];
  subject: string;
  desc: string;
  news: boolean;
  link?: string;
  id: number;
  url: string;
}) {
  const new_ID = String(id);
  const isPhone = useMediaQuery({ query: "(max-width:  42.8125em)" });

  return (
    <li className={`subjects__container subjects__container--${new_ID}`}>
      <div className="subjects__content">
        <div className="subjects__header flex flex-column gap-1">
          <div className="flex w-100 justify-content-between subjects__info">
            <h4>{teacher}</h4>
            {!isPhone && (
              <h4>
                {days[0]} {days.length > 1 ? `| ${days[1]}` : ""}
              </h4>
            )}
          </div>
          {!isPhone ? (
            <h2>{subject}</h2>
          ) : (
            <div className="flex flex-column mb-6 subjects__header--phone">
              <h2>{subject}</h2>
              <h4>
                {days[0]} {days.length > 1 ? `| ${days[1]}` : ""}
              </h4>
            </div>
          )}
        </div>
        <div className="subjects__desc">
          <div
            className={`flex flex-column  align-items-start ${news ? "mb-3" : ""}`}
          >
            <div
              className={classNames("flex justify-content-between  w-100", {
                "align-items-center flex-column gap-5": isPhone,
                "align-items-end": !isPhone,
              })}
            >
              <p className="subjects__text ">{desc}</p>
              <Link
                className="subjects__link"
                to={`/PUMA/materias/mural/${url}`}
              >
                Acessar
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
