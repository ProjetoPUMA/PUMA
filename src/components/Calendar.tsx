import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewMonthGrid } from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/calendar.css";
import "temporal-polyfill/global";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { calendar_array } from "../data/calendar";

function Calendar() {
  const today = new Date().toISOString().split("T")[0];
  console.log(today);

  const calendar = useCalendarApp({
    views: [createViewMonthGrid()],
    locale: "pt-BR",
    events: calendar_array,
    selectedDate: Temporal.PlainDate.from(today),
    plugins: [createEventModalPlugin()],
  });

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

export default Calendar;
