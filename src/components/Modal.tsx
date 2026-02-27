import { format, isBefore, isToday } from "date-fns";
import { ptBR } from "date-fns/locale";
import DownloadButton from "./DownloadButton";
import { useState, type Dispatch } from "react";
import classNames from "classnames";
import type { Homework, Tests, Works } from "../types/data-types";

type ModalProps =
  | {
      works: true;
      tests: false;
      data: Works[];
      setState: Dispatch<React.SetStateAction<boolean>>;
    }
  | {
      tests: true;
      works: false;
      data: Tests[];
      setState: Dispatch<React.SetStateAction<boolean>>;
    }
  | {
      tests: false;
      works: false;
      data: Homework[];
      setState: Dispatch<React.SetStateAction<boolean>>;
    };

function Modal({ data, tests, setState, works }: ModalProps) {
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

  return (
    <div className="modal__background" onClick={() => setState(false)}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__title mb-5">
          <h1>
            Todas {tests ? "as Provas" : works ? "os Trabalhos" : "as Tarefas"}
            <span onClick={() => setState(false)} className="modal__close">
              X
            </span>
          </h1>
          <p>
            {data.filter((item) => item.news).length !== 0
              ? "Um novo item foi adicionado a lista. Fique atento!"
              : "Não hove nenhuma atualização desde a última checagem."}
          </p>
        </div>
        <div className="modal__filter flex gap-5 justify-content-center">
          <span
            onClick={() => {
              setShowAll(true);
              setIsExpiredClicked(false);
            }}
            className={classNames("", { active: showAll && !isExpiredClicked })}
          >
            Todas
          </span>
          <span
            onClick={() => {
              setIsExpiredClicked(false);
              setShowAll(false);
            }}
            className={classNames("", {
              active: !isExpiredClicked && !showAll,
            })}
          >
            Em breve
          </span>
          <span
            onClick={() => {
              setIsExpiredClicked(true);
              setShowAll(false);
            }}
            className={classNames("", { active: isExpiredClicked })}
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
                    className={classNames("modal__item", {
                      "homework--news": item.news,
                      "homework--expired":
                        isBefore(item.due_date, new Date()) &&
                        !isToday(item.due_date),
                      "homework--attention": isToday(item.due_date),
                    })}
                    key={item.id}
                  >
                    {isToday(item.due_date) ? (
                      <div className="homework__attention homework__attention--modal">
                        <img
                          src="attention_sign.svg"
                          alt="alerta de conteúdo novo"
                        />
                      </div>
                    ) : item.news ? (
                      <div className="homework__news homework__news--modal">
                        <img src="new_sign.svg" alt="alerta de conteúdo novo" />
                      </div>
                    ) : null}

                    <h4>
                      {"hasDate" in item && item.hasDate
                        ? format(item.due_date, "dd/MM", { locale: ptBR })
                        : "Sem data definida"}
                    </h4>
                    {!works ? (
                      <h2>{item.subject}</h2>
                    ) : (
                      <>
                        <h3>{item.subject}</h3>
                        <h2>{"title" in item && item.title}</h2>
                      </>
                    )}

                    {tests ? (
                      <ul className="mb-4">
                        {"content" in item &&
                          item.content?.map(
                            (subject: string, index: number) => (
                              <li key={index}>* {subject}</li>
                            ),
                          )}
                      </ul>
                    ) : (
                      <p
                        className={`${isBefore(item.due_date, new Date()) ? "mb-0" : "mb-4"}`}
                      >
                        {"desc" in item && item.desc}
                      </p>
                    )}
                    <div className="flex justify-content-end">
                      {item.hasInstructions &&
                        isBefore(new Date(), item.due_date) && (
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
                        Essa atividade já passou de sua data de vencimento.
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
              {isExpiredClicked && expired_array.length === 0
                ? `Não temos nenhuma ${tests ? "prova" : "atividade"} expirada!`
                : `Não temos nenhuma ${tests ? "prova" : "atividade"} marcada ainda!`}
            </p>
          )}
        </div>
        <div className="modal__footer"></div>
      </div>
    </div>
  );
}

export default Modal;
