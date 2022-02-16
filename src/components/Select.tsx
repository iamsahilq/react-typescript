import * as React from 'react';
export interface ISelectProps {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select(props: ISelectProps) {
  const { options, onChange } = props;
  return (
    <div className="m-1 p-2">
      Simple select element of react-bootstrap
      <hr />
      Select any color :
      <select
        defaultValue={options[0]}
        className="form-select"
        onChange={onChange}
      >
        {options.map((op, i) => (
          <option key={i} value={op} selected>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}
