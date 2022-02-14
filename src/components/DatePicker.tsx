import * as React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export interface IDatePickerCProps {
  date: Date;
  onDateChange: Function;
}

export default function DatePickerC(props: IDatePickerCProps) {
  return (
    <div>
      <DatePicker
        selected={props.date}
        onChange={(date) => props.onDateChange(date)}
      />
    </div>
  );
}
