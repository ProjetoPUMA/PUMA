import { format, isToday } from "date-fns";
import { ptBR } from "date-fns/locale";
import DownloadButton from "./DownloadButton";
import classNames from "classnames";

function HomeWork({
  date,
  subject,
  news,
  desc,
  works,
  content,
  hasInstructions,
  fileID,
}: {
  date: Date;
  subject: string;
  news: boolean;
  desc?: string;
  works?: boolean;
  content?: string[];
  hasInstructions: boolean;
  fileID?: string;
}) {
  const formatedDate = format(date, "dd/MM", { locale: ptBR });

  return (
    <li
      className={classNames("flex flex-column gap-4 pt-5 homework", {
        "homework--news": news,
        "homework--attention": isToday(date),
        weekly__test: works,
      })}
    >
      {news && (
        <div className="homework__news">
          <img src="new_sign.svg" alt="alerta de conteúdo novo" />
        </div>
      )}
      {isToday(date) && (
        <div className="homework__attention">
          <img src="attention_sign.svg" alt="alerta de conteúdo novo" />
        </div>
      )}
      <div>
        <h4>{formatedDate}</h4>
        <h3>{subject}</h3>
      </div>
      <div
        className={classNames("flex flex-column  h-100", {
          homework__desc: !hasInstructions,
          "justify-content-between": hasInstructions,
        })}
      >
        {!works ? (
          <p>{desc}</p>
        ) : (
          <ul>
            {content?.map((item, index) => (
              <li className="flex flex-column" key={index}>
                * {item}
              </li>
            ))}
          </ul>
        )}
        {isToday(date) && <small>!!! EXPIRA HOJE !!!</small>}
        {hasInstructions && (
          <DownloadButton fileID={fileID}>
            Baixar {works ? "conteúdo" : "enunciado"}
          </DownloadButton>
        )}
      </div>
    </li>
  );
}

export default HomeWork;
