import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Timeline from "../components/Timeline";
import { homeworks_array, tests_array, works_array } from "../data/data";
import Work from "../components/Work";
import { Link } from "react-router-dom";
import {
  getCloseWorks,
  getWeeklyHomeworks,
  getWeeklyTests,
} from "../utils/filters";
import Activities from "../components/Activities";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

function HomePage() {
  const [isWorkModalOpen, setIsWorkModalOpen] = useState<boolean>(false);
  const [isHomeWorkModalOpen, setIsHomeWorkModalOpen] =
    useState<boolean>(false);
  const [isTestsModalOpen, setIsTestsModalOpen] = useState<boolean>(false);
  const isPhone = useMediaQuery({ query: "(max-width:  42.8125em)" });

  const weeklyHomeworks = getWeeklyHomeworks();
  const weeklyTests = getWeeklyTests();
  const fiveDaysWork = getCloseWorks();

  const hasHomeWorkNews =
    homeworks_array.filter((item) => item.news).length !== 0;
  const hasTestsNews = tests_array.filter((item) => item.news).length !== 0;
  const hasWorkNews = works_array.filter((item) => item.news).length !== 0;

  useEffect(() => {
    const anyModalOpen =
      isWorkModalOpen || isHomeWorkModalOpen || isTestsModalOpen;

    if (anyModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isWorkModalOpen, isHomeWorkModalOpen, isTestsModalOpen]);

  return (
    <>
      <h1 className="timeline_title">Atualizações Importantes</h1>
      <section>
        <Timeline />
      </section>
      <section
        className={classNames(
          "mt-4 flex justify-content-between section__weekly",
          { "section__weekly--phone": isPhone },
        )}
      >
        <Activities
          tests={false}
          data={weeklyHomeworks}
          setModalOpen={setIsHomeWorkModalOpen}
          hasNews={hasHomeWorkNews}
        />
        <Activities
          tests
          data={weeklyTests}
          hasNews={hasTestsNews}
          setModalOpen={setIsTestsModalOpen}
        />
      </section>
      <section className="mt-5 mb-5">
        <div className="Trabalhos flex justify-content-between mb-5">
          <h2>
            {!isPhone ? "Trabalhos perto do prazo:" : "Trabalhos a vencer:"}
          </h2>
          <h2
            className={hasWorkNews ? "btn-all btn-news" : "btn-all"}
            onClick={() => setIsWorkModalOpen(true)}
          >
            Ver tudo&gt;&gt;
          </h2>
        </div>
        {fiveDaysWork.length === 0 ? (
          <p className="activities--null">
            Nenhum trabalho com prazo de entrega entre hoje e os próximos 5
            dias.
          </p>
        ) : (
          <ul className="works__list flex flex-column gap-3">
            {fiveDaysWork.map((work) => (
              <Work
                key={work.id}
                date={work?.due_date}
                subject={work.subject}
                title={work.title}
                news={work.news}
                desc={work.desc}
                hasInstructions={work.hasInstructions}
                fileID={work.fileID}
                hasDate={work.hasDate}
              />
            ))}
          </ul>
        )}
      </section>
      <section className="mt-8">
        <Link
          className="contact__container"
          to="https://forms.gle/feKmFNbXEWpZNcAq9"
          target="_blank"
        >
          <div className="contact">
            <div className="contact__header">
              <h4>Dúvidas? Sugestões? Quer ajudar de alguma forma?</h4>
              <h3>Clique aqui e entre em contato agora!</h3>
            </div>
            <div className="contact__content">
              <div className="flex flex-column justify-content-between">
                <p>
                  Este projeto foi feito com intuito de ajudar a acompanhar e
                  organizar-se coletivamente quanto as matérias da faculdade. O
                  seu uso, feedback e monitoração nos motiva a continuar
                  trabalhando nesta aplicação web. Caso a recepção seja forte,
                  teremos muitos mais updates pela frente!
                </p>
                <p>De Adler e Taís para todos os alunos da Fatec.</p>
              </div>
              <div className="contact__puma">
                <img src="puma_resting.svg" alt="puma descansando" />
              </div>
            </div>
          </div>
        </Link>
      </section>
      {isHomeWorkModalOpen && (
        <Modal
          data={homeworks_array}
          tests={false}
          works={false}
          setState={setIsHomeWorkModalOpen}
        />
      )}
      {isTestsModalOpen && (
        <Modal
          data={tests_array}
          tests={true}
          works={false}
          setState={setIsTestsModalOpen}
        />
      )}
      {isWorkModalOpen && (
        <Modal
          data={works_array}
          tests={false}
          works={true}
          setState={setIsWorkModalOpen}
        />
      )}
    </>
  );
}

export default HomePage;
