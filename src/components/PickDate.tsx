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
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      filterDate={(date) => excludeDates(date)}
      name="date"
      required
      className="bg-slate-500 text-white placeholder-slate-400 rounded-xl p-2 outline-1 outline-slate-100"
      placeholderText="Select a date"
    />
  );
}

export default PickDate;