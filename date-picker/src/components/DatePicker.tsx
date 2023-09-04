import {
  getDaysInMonth,
  format,
} from "date-fns";
import { useEffect, useState } from "react";

interface Props {
  value: Date;
  onChange: (value: Date) => void;
}

export default function DatePicker({ value, onChange }: Props) {
  const [days, setDays] = useState<number[]>([]);
  const [displayedMonth, setDisplayedMonth] = useState<number>(
    value.getMonth()
  );
  const [displayedYear, setDisplayedYear] = useState<number>(
    value.getFullYear()
  );

  useEffect(() => {
    const daysInMonth = getDaysInMonth(
      new Date(displayedYear, displayedMonth, 1)
    );
    const newDays = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    );
    setDays(newDays);
  }, [displayedMonth, displayedYear]);

  const handleSubtractMonth = () => {
    setDisplayedMonth((prevMonth) => prevMonth - 1);
    if (displayedMonth === 0) {
      setDisplayedYear((prevYear) => prevYear - 1);
    }
  };

  const handleAddMonth = () => {
    setDisplayedMonth((prevMonth) => prevMonth + 1);
    if (displayedMonth === 11) {
      setDisplayedYear((prevYear) => prevYear + 1);
    }
  };

  return (
    <div className="date-container">
      {format(value, "dd-MM-yyyy")}
      <div className="date-header">
        <button onClick={handleSubtractMonth}>-</button>
        <div className="month-year">
          {format(new Date(displayedYear, displayedMonth, 1), "MMMM yyyy")}
        </div>
        <button onClick={handleAddMonth}>+</button>
      </div>
      <div className="days-container">
        {days.map((day) => (
          <button
            className={`${
              value.getDate() === day &&
              value.getMonth() === displayedMonth &&
              value.getFullYear() === displayedYear
                ? "active"
                : ""
            }`}
            key={day}
            onClick={() => {
              const newValue = new Date(displayedYear, displayedMonth, day);
              onChange(newValue);
            }}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
