import { format, isBefore, isToday } from "date-fns";
import { ptBR } from "date-fns/locale";
import DownloadButton from "./DownloadButton";
import { useState } from "react";
import classNames from "classnames";

function Modal({
  data,
  tests,
  setState,
  works,
}: {
  data: {
    id: number;
    due_date: Date;
    subject: string;
    news: boolean;
    desc?: string;
    content?: string[];
    hasInstructions?: boolean;
    fileID?: string;
    title?: string;
  }[];
  tests?: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  works?: boolean;
}) {
  const [isExpiredClicked, setIsExpiredClicked] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(true);
  const expired_array = data.filter(
    (item) => isBefore(item.due_date, new Date()) && !isToday(item.due_date),
  );
  const notExpired_array = data.filter(
    (item) => isBefore(new Date(), item.due_date) || isToday(item.due_date),
  );
  const used_array = isExpiredClicked
    ? expired_array
    : showAll
      ? data
      : notExpired_array;

  console.log("ta expirado", isExpiredClicked);
  console.log("mostrando todos", showAll);

  return (
    <div className="modal__background">
      <div className="modal__container">
        <button onClick={() => setState(false)} className="modal__close">
          X
        </button>
        <div className="modal__title mb-5">
          <h1>
            Todas {tests ? "as Provas" : works ? "os Trabalhos" : "as Tarefas"}
          </h1>
          <p>
            {data.filter((item) => item.news).length !== 0
              ? "Um novo item foi adicionado a lista. Fique atento!"
              : "Não hove nenhuma atualização desde a última checagem."}
          </p>
        </div>
        <div className="flex gap-5 justify-content-center pb-5">
          <span
            onClick={() => {
              setShowAll(true);
              setIsExpiredClicked(false);
            }}
          >
            Todas
          </span>
          <span
            onClick={() => {
              setIsExpiredClicked(false);
              setShowAll(false);
            }}
          >
            Em breve
          </span>
          <span
            onClick={() => {
              setIsExpiredClicked(true);
              setShowAll(false);
            }}
          >
            Expiradas
          </span>
        </div>
        <div className="modal__body">
          {used_array.length !== 0 ? (
            <ul className="flex flex-column gap-3">
              {used_array
                .slice()
                .sort((a, b) => {
                  const today = new Date();

                  const isExpiredA = isBefore(a.due_date, today);
                  const isExpiredB = isBefore(b.due_date, today);
                  const expiresTodayA = isToday(a.due_date);
                  const expiresTodayB = isToday(b.due_date);

                  if (expiresTodayA !== expiresTodayB) {
                    return expiresTodayA ? -1 : 1;
                  }

                  if (a.news !== b.news) {
                    return Number(b.news) - Number(a.news);
                  }

                  if (isExpiredA !== isExpiredB) {
                    return isExpiredA ? 1 : -1;
                  }

                  return a.due_date.getTime() - b.due_date.getTime();
                })
                .map((item) => (
                  <li
                    className={classNames("modal--item", {
                      "homework--news": item.news,
                      "homework--expired":
                        isBefore(item.due_date, new Date()) &&
                        !isToday(item.due_date),
                      "homework--attention": isToday(item.due_date),
                    })}
                    key={item.id}
                  >
                    <h4>
                      {format(item.due_date, "dd/MM/yyyy", { locale: ptBR })}
                    </h4>
                    {!works ? (
                      <h2>{item.subject}</h2>
                    ) : (
                      <>
                        <h3>{item.subject}</h3>
                        <h2>{item.title}</h2>
                      </>
                    )}

                    {tests ? (
                      <ul className="mb-4">
                        {item.content?.map((subject: string, index: number) => (
                          <li key={index}>{subject}</li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        className={`${isBefore(item.due_date, new Date()) ? "mb-0" : "mb-4"}`}
                      >
                        {item.desc}
                      </p>
                    )}
                    <div className="flex justify-content-end">
                      {item.hasInstructions && (
                        <DownloadButton fileID={item.fileID ?? undefined}>
                          Baixar{" "}
                          {tests
                            ? "conteúdo"
                            : works
                              ? "instruções"
                              : "enunciado"}
                        </DownloadButton>
                      )}
                    </div>
                    {isBefore(item.due_date, new Date()) &&
                    !isToday(item.due_date) ? (
                      <small>
                        Essa atividade já passou de sua de vencimento.
                      </small>
                    ) : (
                      isToday(item.due_date) && (
                        <small>
                          Hoje é o último dia de prazo desta atividade!
                        </small>
                      )
                    )}
                  </li>
                ))}
            </ul>
          ) : (
            <p className="modal__message">
              Não temos nenhuma {tests ? "prova" : "atividade"} marcada ainda!
            </p>
          )}
        </div>
        <div className="modal__footer">
          <button onClick={() => setState(false)}>voltar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
