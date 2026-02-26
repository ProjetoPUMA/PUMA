import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomeWork from "./HomeWork";
import { isToday } from "date-fns";
import classNames from "classnames";
import type { Dispatch } from "react";
import type { Homework, Tests } from "../types/data-types";
import { useMediaQuery } from "react-responsive";

type ActivitiesProps =
  | {
      tests: true;
      data: Tests[];
      hasNews: boolean;
      setModalOpen: Dispatch<React.SetStateAction<boolean>>;
    }
  | {
      tests: false;
      data: Homework[];
      hasNews: boolean;
      setModalOpen: Dispatch<React.SetStateAction<boolean>>;
    };

function Activities({ tests, setModalOpen, hasNews, data }: ActivitiesProps) {
  const isPhone = useMediaQuery({ query: "(max-width:  42.8125em)" });

  return (
    <div
      className={classNames("weekly__container", {
        "gap-1 justify-content-start": data.length === 0,
        "weekly__container--work": tests,
        "weekly__container--lonely": data.length === 1,
        "weekly__container--phone": isPhone,
      })}
    >
      <div className="flex justify-content-between mb-5">
        <h2>{tests ? "Provas" : "Tarefas"} da Semana</h2>
        <h3
          className={classNames("btn-all", { "btn-news": hasNews })}
          onClick={() => setModalOpen(true)}
        >
          Ver tudo&gt;&gt;
        </h3>
      </div>
      {data.length === 0 ? (
        <p className="activities--null">
          Nenhuma {tests ? "prova" : "tarefa"} programada para esta semana
        </p>
      ) : (
        <ul className="flex gap-3 home__lists swiper__container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{
              clickable: true,
            }}
            observer={true}
            observeParents={true}
            parallax={true}
            slidesPerView={1}
            spaceBetween={10}
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
          >
            {data
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
                    works={tests}
                    key={item.id}
                    news={item.news}
                    desc={"desc" in item ? item.desc : undefined}
                    content={"content" in item ? item.content : undefined}
                    subject={item.subject}
                    date={item.due_date}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </ul>
      )}
    </div>
  );
}

export default Activities;
