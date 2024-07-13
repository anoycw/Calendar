import React from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
  isSameDay,
  isToday,
} from 'date-fns';

const CalendarCells = ({ currentDate, selectedDate, setSelectedDate }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = 'd';
  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formattedDate = format(day, dateFormat);
      const cloneDay = day;

      days.push(
        <div
          className={`flex-1 p-1 text-center cursor-pointer ${
            !isSameMonth(day, monthStart)
              ? 'text-gray-400'
              : isSameDay(day, selectedDate)
              ? 'bg-purple-700 text-white rounded-full'
              : isToday(day)
              ? 'bg-purple-300 text-green-900 rounded-full'
              : ''
          }`}
          key={day}
          onClick={() => setSelectedDate(cloneDay)}
        >
          <span className="inline-block w-8 h-8 leading-8 text-sm md:w-10 md:h-10 md:leading-10">
            {formattedDate}
          </span>
        </div>
      );
      
      day = addDays(day, 1);
    }
    rows.push(
      <div className="flex px-2 md:px-0" key={day}>
        {days}
      </div>
    );
    days = [];
  }

  return <div>{rows}</div>;
};

export default CalendarCells;
