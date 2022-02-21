import * as React from 'react';

export interface IRadioProps {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  options: string[];
}

export default function Radio(props: IRadioProps) {
  const { onChange, id, options = [] } = props;
  return (
    <div className="p-1 m-1">
      {options.map((op, i) => (
        <div className="d-compact" key={i}>
          <input
            id={id}
            onChange={onChange}
            type="radio"
            value={op}
            defaultChecked={op === options[0]}
            name={id}
          />
          {op}
        </div>
      ))}
    </div>
  );
}
