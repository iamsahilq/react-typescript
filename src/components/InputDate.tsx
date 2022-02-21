import * as React from 'react';

export interface IInputFileProps {
  setDate: (value: React.ChangeEvent<HTMLInputElement>) => void;
  selectedDate: Date;
  name?: string;
  id?: string;
}

export default function InputFile(props: IInputFileProps) {
  const { setDate, selectedDate, name = 'date', id = 'date' } = props;
  return (
    <div className="p-1 m-1">
      <h3>Input File</h3>
      <label>
        Date:
        <input
          value={selectedDate.toString()}
          onChange={setDate}
          type="date"
          id={id}
          name={name}
        ></input>
      </label>
    </div>
  );
}
