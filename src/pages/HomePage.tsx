import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomeWork from "../components/HomeWork";
import Modal from "../components/Modal";
import Timeline from "../components/Timeline";
import { homeworks_array, tests_array, works_array } from "../data/data";
import {
  addDays,
  endOfDay,
  getWeek,
  getYear,
  isAfter,
  isBefore,
  isToday,
  subDays,
} from "date-fns";
import Work from "../components/Work";
import classNames from "classnames";
import { Link } from "react-router-dom";

function HomePage() {
  const [isWModalOpen, setIsWModalOpen] = useState<boolean>(false);
  const [isTModalOpen, setIsTModalOpen] = useState<boolean>(false);
  const [isWKModalOpen, setIsWKModalOpen] = useState<boolean>(false);

  const hasHWnews = homeworks_array.filter((item) => item.news).length !== 0;
  const hasTnews = tests_array.filter((item) => item.news).length !== 0;
  const hasWnews = works_array.filter((item) => item.news).length !== 0;

  const usedHomeworks = homeworks_array.filter(
    (item) => isAfter(item.due_date, new Date()) || isToday(item.due_date),
  );
  const weeklyHomeworks = usedHomeworks.filter((item) => {
    const dueDate = item.due_date;
    const today = new Date();

    return (
      getWeek(dueDate) == getWeek(today) && getYear(dueDate) == getYear(today)
    );
  });

  const weeklyTests = tests_array.filter((item) => {
    const dueDate = item.due_date;
    const today = new Date();

    return (
      getWeek(dueDate) == getWeek(today) && getYear(dueDate) == getYear(today)
    );
  });

  const fiveDaysWork = works_array.filter((item) => {
    const dueDate = item.due_date;
    const today = subDays(new Date(), 1);
    const fiveDaysFromNow = endOfDay(addDays(today, 5));

    return (
      (isAfter(dueDate, today) || dueDate.getTime() === today.getTime()) &&
      isBefore(dueDate, fiveDaysFromNow)
    );
  });

  console.log(fiveDaysWork);

  return (
    <>
      <h1 className="timeline_title">Atualizações Importantes</h1>
      <section>
        <Timeline />
      </section>
      <section className="mt-4 flex justify-content-between section__weekly">
        <div className="weekly__container">
          <div className="flex justify-content-between mb-5">
            <h2>Tarefas da Semana</h2>
            <h3
              className={classNames("btn-all", { "btn-news": hasHWnews })}
              onClick={() => setIsWModalOpen(true)}
            >
              Ver tudo&gt;&gt;
            </h3>
          </div>
          {weeklyHomeworks.length === 0 ? (
            <p>Nenhuma tarefa programada para esta semana</p>
          ) : (
            <ul className="flex gap-3 home__lists swiper__container">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{
                  clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={0}
                breakpoints={{
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {weeklyHomeworks
                  .slice()
                  .sort((a, b) => {
                    const expiresTodayA = isToday(a.due_date);
                    const expiresTodayB = isToday(b.due_date);

                    if (expiresTodayA !== expiresTodayB) {
                      return expiresTodayA ? -1 : 1;
                    }

                    if (a.news !== b.news) {
                      return Number(b.news) - Number(a.news);
                    }

                    return a.due_date.getTime() - b.due_date.getTime();
                  })
                  .map((item) => (
                    <SwiperSlide key={item.id}>
                      <HomeWork
                        fileID={item.fileID}
                        hasInstructions={item.hasInstructions}
                        key={item.id}
                        news={item.news}
                        desc={item.desc}
                        subject={item.subject}
                        date={item.due_date}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
              {/* {weeklyHomeworks
                .slice()
                .sort((a, b) => {
                  const expiresTodayA = isToday(a.due_date);
                  const expiresTodayB = isToday(b.due_date);

                  if (expiresTodayA !== expiresTodayB) {
                    return expiresTodayA ? -1 : 1;
                  }

                  if (a.news !== b.news) {
                    return Number(b.news) - Number(a.news);
                  }

                  return a.due_date.getTime() - b.due_date.getTime();
                })
                .map((item) => (
                  <HomeWork
                    fileID={item.fileID}
                    hasInstructions={item.hasInstructions}
                    key={item.id}
                    news={item.news}
                    desc={item.desc}
                    subject={item.subject}
                    date={item.due_date}
                  />
                ))} */}
            </ul>
          )}
        </div>
        <div className="weekly__container weekly__container--work">
          <div className="flex justify-content-between mb-5">
            <h2 className="weekly_HT">Provas da Semana</h2>
            <h3
              className={hasTnews ? "btn-all btn-news" : "btn-all"}
              onClick={() => setIsTModalOpen(true)}
            >
              Ver tudo&gt;&gt;
            </h3>
          </div>
          {weeklyTests.length === 0 ? (
            <p>Nenhuma prova programada para esta semana</p>
          ) : (
            <ul className="flex gap-3 home__lists swiper__container">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{
                  clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={0}
                breakpoints={{
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {weeklyTests
                  .slice()
                  .sort((a, b) => {
                    if (a.news !== b.news) {
                      return Number(b.news) - Number(a.news);
                    }

                    return a.due_date.getTime() - b.due_date.getTime();
                  })
                  .map((item) => (
                    <SwiperSlide key={item.id}>
                      <HomeWork
                        fileID={item.fileID}
                        hasInstructions={item.hasInstructions}
                        works
                        content={item.content}
                        key={item.id}
                        news={item.news}
                        subject={item.subject}
                        date={item.due_date}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </ul>
          )}
        </div>
      </section>
      <section className="mt-5 mb-5">
        <div className="Trabalhos flex justify-content-between mb-5">
          <h2>Trabalhos perto do prazo:</h2>
          <h2
            className={hasWnews ? "btn-all btn-news" : "btn-all"}
            onClick={() => setIsWKModalOpen(true)}
          >
            Ver tudo&gt;&gt;
          </h2>
        </div>
        {fiveDaysWork.length === 0 ? (
          <p className="Trabalhos">
            Nenhum trabalho com prazo de entrega entre hoje e os próximos 5
            dias.
          </p>
        ) : (
          <ul className="works__list flex flex-column gap-3">
            {fiveDaysWork.map((work) => (
              <Work
                key={work.id}
                date={work.due_date}
                subject={work.subject}
                title={work.title}
                news={work.news}
                desc={work.desc}
                hasInstructions={work.hasInstructions}
                fileID={work.fileID}
              />
            ))}
          </ul>
        )}
      </section>
      <section className="mt-8">
        <div className="contact">
          <div className="contact__header">
            <h4>Dúvidas? Sugestões? Quer ajudar de alguma forma?</h4>
            <h3>
              <Link to="http://wa.me/5524988176141" target="_blank">
                Clique aqui
              </Link>
              e entre em contato agora!
            </h3>
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
      </section>
      {isWModalOpen && (
        <Modal data={homeworks_array} setState={setIsWModalOpen} />
      )}
      {isTModalOpen && (
        <Modal data={tests_array} tests setState={setIsTModalOpen} />
      )}
      {isWKModalOpen && (
        <Modal data={works_array} works setState={setIsWKModalOpen} />
      )}
    </>
  );
}

export default HomePage;
