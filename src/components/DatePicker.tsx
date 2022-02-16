import * as React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export interface IDatePickerCProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

export default function DatePickerC(props: IDatePickerCProps) {
  const { date, onDateChange } = props;
  return (
    <div className="p-1 m-1">
      <h3>Date Picker</h3>
      <DatePicker selected={date} onChange={onDateChange} />
    </div>
  );
}
