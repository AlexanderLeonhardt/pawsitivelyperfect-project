'use client'
import React, { useState } from 'react';

const PhoneInput = ({ name }: { name: string }) => {
  const [formattedValue, setFormattedValue] = useState('');

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
    const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      const [, area, central, line] = match;
      return [
        area && `(${area}`,
        central && `${area ? ') ' : ''}${central}`,
        line && `-${line}`,
      ]
        .filter(Boolean)
        .join('');
    }
    return value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatPhoneNumber(rawValue);
    setFormattedValue(formatted);
  };

  return (
    <input
      id={name}
      type="tel"
      name={name}
      value={formattedValue}
      onChange={handleChange}
      maxLength={14}
      autoComplete="on"
      required
      placeholder="(123) 456-7890"
      className="placeholder-slate-400 p-2 outline-1 outline-slate-300 bg-slate-100 w-8/12"
    />
  );
};

export default PhoneInput;
