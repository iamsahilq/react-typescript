import * as React from 'react';
export interface ISelectProps {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  selected?: string | number;
}

export default function Select(props: ISelectProps) {
  const { options, onChange, id = 'select', selected } = props;
  return (
    <div className="m-1 p-2">
      <select
        id={id}
        className="form-select"
        value={selected}
        onChange={onChange}
      >
        {options.map((op, i) => (
          <option key={i} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}
