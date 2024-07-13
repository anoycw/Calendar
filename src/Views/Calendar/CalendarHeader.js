import React from 'react';
import { format } from 'date-fns';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CalendarHeader = ({ currentDate, nextMonth, prevMonth }) => {
  const dateFormat = 'MMMM yyyy';
  
  return (
    <div className="flex justify-between items-center mb-4 px-2 md:px-4">
      <div className="cursor-pointer" onClick={prevMonth} aria-label="Previous month">
        <FaChevronLeft />
      </div>
      <div>
        <span className="text-lg font-semibold">{format(currentDate, dateFormat)}</span>
      </div>
      <div className="cursor-pointer" onClick={nextMonth} aria-label="Next month">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default CalendarHeader;
