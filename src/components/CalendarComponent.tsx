import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewMonthGrid } from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/calendar.css";
import "temporal-polyfill/global";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { calendar_array } from "../data/calendar";
import { useMediaQuery } from "react-responsive";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import classNames from "classnames";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Events {
  id: string;
  title: string;
  start: Temporal.PlainDate;
  end: Temporal.PlainDate;
  description?: string;
}

function CalendarComponent() {
  const today = new Date().toISOString().split("T")[0];
  const isPhone = useMediaQuery({ query: "(max-width:  42.8125em)" });
  const [selectedDay, setSelectedDay] = useState<Events[] | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | string>("");

  const eDuraUmDia = (inicio: string, fim: string) => inicio === fim;

  const calendar = useCalendarApp({
    views: [createViewMonthGrid()],
    locale: "pt-BR",
    events: calendar_array,
    selectedDate: Temporal.PlainDate.from(today),
    plugins: [createEventModalPlugin()],
  });

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== "month") return null;
    const dateStr = date.toISOString().split("T")[0];

    const events = calendar_array.filter((e) => {
      const startStr = e.start.toString();
      const endStr = e.end.toString();
      return dateStr === startStr && eDuraUmDia(startStr, endStr);
    });

    if (events.length === 0) return null;
    return (
      <div className="event-container">
        {events.map((e, index) => (
          <div
            key={e.id}
            className={classNames(
              "linha-evento-verde",
              `linha-evento-verde--${index + 1}`,
            )}
          />
        ))}
      </div>
    );
  };

  const getTileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view !== "month") return null;
    const dateStr = date.toISOString().split("T")[0];

    const event = calendar_array.find((e) => {
      const startStr = e.start.toString();
      const endStr = e.end.toString();
      return (
        dateStr >= startStr &&
        dateStr <= endStr &&
        !eDuraUmDia(startStr, endStr)
      );
    });
    if (!event) return null;

    const isStart = dateStr === event.start.toString();
    const isEnd = dateStr === event.end.toString();
    const isMiddle = !isStart && !isEnd;

    return [
      "event-day",
      isStart ? "event-start" : "",
      isMiddle ? "event-middle" : "",
      isEnd ? "event-end" : "",
    ].join(" ");
  };

  const handleClickedDay = (value: Date) => {
    const dateStr = value.toISOString().split("T")[0];
    const selectedDayEvents = calendar_array.filter((date) => {
      const startStr = date.start.toString();
      const endStr = date.end.toString();
      return dateStr >= startStr && dateStr <= endStr;
    });
    setSelectedDay(selectedDayEvents);
    setSelectedDate(value);
  };

  return (
    <>
      {!isPhone ? (
        <div>
          <ScheduleXCalendar calendarApp={calendar} />
        </div>
      ) : (
        <div className="calendar">
          <Calendar
            tileContent={tileContent}
            tileClassName={getTileClassName}
            onClickDay={(value) => handleClickedDay(value)}
            navigationLabel={({ date }) => {
              return format(date, "MMM.", { locale: ptBR }).toUpperCase();
            }}
            formatShortWeekday={(locale, date) => {
              const dayName = date.toLocaleDateString(locale, {
                weekday: "narrow",
              });
              return dayName.toUpperCase();
            }}
          />
          {selectedDay !== null && (
            <div className="calendar__events">
              <h2>{format(selectedDate, "d 'de' MMMM ", { locale: ptBR })}</h2>
              {selectedDay.length !== 0 ? (
                <ul>
                  {selectedDay.map((event) => (
                    <li>
                      <h4>{event.title}</h4>
                      <div>
                        <span>
                          {format(event.start.toString(), "d 'de' MMMM", {
                            locale: ptBR,
                          })}{" "}
                          -{" "}
                          {format(event.end.toString(), "d 'de' MMMM", {
                            locale: ptBR,
                          })}
                        </span>
                        {event.description !== "" && (
                          <p>{event?.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                "Nenhum evento programado para este dia"
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default CalendarComponent;
