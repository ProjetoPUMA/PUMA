import { useState } from "react";
import { subjects_array } from "../data/data";
import BusModal from "../components/BusModal";
import CalendarComponent from "../components/Calendar";

function CalendarsPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const roomInfo = {
    room: "107",
    lab1: "402",
    lab2: "409",
  };

  const daysWeek = [
    {
      day: "Segunda-Feira",
      day_week: "mon",
    },
    {
      day: "Terça-Feira",
      day_week: "tue",
    },
    {
      day: "Quarta-Feira",
      day_week: "wed",
    },
    {
      day: "Quinta-Feira",
      day_week: "thu",
    },
    {
      day: "Sexta-Feira",
      day_week: "fri",
    },
  ];

  const schedule = daysWeek.map((currentDay) => {
    const classesOfDay = subjects_array
      .filter((subject) =>
        subject.classes.some((cls) => cls.day === currentDay.day_week),
      )
      .map((subject) => {
        const classInfo = subject.classes.find(
          (cls) => cls.day === currentDay.day_week,
        );

        return {
          name: subject.subject,
          teacher: subject.teacher,
          start: classInfo?.start,
          end: classInfo?.end,
        };
      });
    classesOfDay.sort((a, b) => (a.start || "").localeCompare(b.start || ""));
    return {
      dayName: currentDay.day,
      classes: classesOfDay,
    };
  });

  return (
    <>
      <h1 className="schedule__title flex justify-content-between align-items-center">
        Horários
        <div className="flex gap-5 schedule__room">
          <span>Sala de Aula: {roomInfo.room}</span>
          <span>Laboratório Sistemas: {roomInfo.lab1}</span>
          <span>Laboratório Programação: {roomInfo.lab2}</span>
        </div>
      </h1>
      <section className="flex align-items-start justify-content-between gap-5 section__schedule">
        {schedule.map((day, index) => (
          <div className="flex flex-column order gap-3 mt-7">
            <div key={index}>
              <h2 className="schedule__day">{day.dayName}</h2>
            </div>
            <ul
              className={`schedule__list schedule__list--${index + 1} flex flex-column gap-5`}
            >
              {day.classes.map((cls, index) => {
                const clsStart = cls.start?.replace(/^0/, "").replace(":", "h");
                const clsEnd = cls.end?.replace(/^0/, "").replace(":", "h");

                return (
                  <li
                    className={`flex flex-column gap-4 justify-content-between schedule__coontainer--${index + 1}`}
                    key={index}
                  >
                    <div className="schedule__header">
                      <h4>Prof. {cls.teacher.split(" ")[0]}</h4>
                      <h2>{cls.name}</h2>
                    </div>
                    <div className="schedule__hours">
                      <span>{clsStart}</span> <span> - </span>{" "}
                      <span>{clsEnd}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
      <h1 className="schedule__title schedule__title--calendar">
        Calendário Letivo 2026
      </h1>
      <section>
        <CalendarComponent />
      </section>
      {isModalOpen && <BusModal setState={setIsModalOpen} />}
    </>
  );
}

export default CalendarsPage;
