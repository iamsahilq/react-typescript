import * as React from 'react';

export interface IRadioProps {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

export default function Radio(props: IRadioProps) {
  const { onChange, id } = props;
  return (
    <div className="p-1 m-1">
      <h3>Radio</h3>
      <div id={id} onChange={onChange}>
        <input type="radio" value="OPTION 1" name="radio" /> OPTION 1
        <input type="radio" value="OPTION 2" name="radio" /> OPTION 2
      </div>
    </div>
  );
}
