import React from "react";

const DateDisplay: React.FC = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date().toLocaleDateString("en-US", options);

  return <div className="date-display">{today}</div>;
};

export default DateDisplay;
