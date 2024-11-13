'use client';
import { useState } from "react";
import { getDay, subDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PickDate = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const excludeDates = (date: Date) => {
    const day = getDay(date);
    return day !== 0 && date > subDays(new Date(), 1);
  };

  return (
    <DatePicker
      id="date"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      filterDate={(date) => excludeDates(date)}
      name="date"
      required
      className="placeholder-slate-400 p-2 outline-1 outline-slate-300 bg-slate-100 max-w-full"
      wrapperClassName="!block"
      placeholderText="Select a date"
    />
  );
}

export default PickDate;