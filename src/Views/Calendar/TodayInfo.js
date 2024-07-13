import React from 'react';

const TodayInfo = ({ today }) => {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-semibold">Today is:</h2>
      <p className="text-sm md:text-lg">{today}</p>
    </div>
  );
};

export default TodayInfo;
