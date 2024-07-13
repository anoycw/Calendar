import React, { useState } from 'react';
import { addMonths, subMonths, format } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import CalendarCells from './CalendarCells';
import TodayInfo from './TodayInfo';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  // Set "Today" dynamically based on selectedDate
  const today = selectedDate ? format(selectedDate, 'dd MMMM yyyy, EEEE') : format(new Date(), 'dd MMMM yyyy, EEEE');

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md md:max-w-2xl">
        
        <div className="block md:hidden mb-4">
          <TodayInfo today={today} />
        </div>
        
        <div className="flex-1 mb-4 md:mb-0">
          <CalendarHeader 
            currentDate={currentDate} 
            nextMonth={nextMonth} 
            prevMonth={prevMonth} 
          />
          <CalendarCells 
            currentDate={currentDate} 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate} 
          />
        </div>
        
        <div className="hidden md:block md:w-1/3 ml-4 p-4 bg-gray-100 rounded-lg shadow-md">
          <TodayInfo today={today} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
