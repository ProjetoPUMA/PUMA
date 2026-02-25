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
import { homeworks_array, tests_array, works_array } from "../data/data";

const isThisWeek = (date: Date) => {
  const today = new Date();
  return getWeek(date) == getWeek(today) && getYear(date) == getYear(today);
};

export const getWeeklyHomeworks = () => {
  const homeworks = homeworks_array.filter(
    (item) => isAfter(item.due_date, new Date()) || isToday(item.due_date),
  );
  const weeklyHomeworks = homeworks.filter((item) => isThisWeek(item.due_date));
  return weeklyHomeworks;
};

export const getWeeklyTests = () => {
  const weeklyTests = tests_array.filter((item) => isThisWeek(item.due_date));
  return weeklyTests;
};

export const getCloseWorks = () => {
  const CloseWorks = works_array.filter((item) => {
    const dueDate = item.due_date;
    const today = subDays(new Date(), 1);
    const fiveDaysFromNow = endOfDay(addDays(today, 5));
    return (
      (isAfter(dueDate, today) || dueDate.getTime() === today.getTime()) &&
      isBefore(dueDate, fiveDaysFromNow)
    );
  });
  return CloseWorks;
};
