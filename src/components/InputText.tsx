import * as React from 'react';

export interface IInputTextProps {
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
}

// interface LabelInterface {
//   value: string;
//   label: string;
// }

// function InputLabel(props: LabelInterface) {
//   if (props.value.length) {
//     return null;
//   }

//   return <label htmlFor="input">{props.label}</label>;
// }

export default function InputText(props: IInputTextProps) {
  const { handleChange, value, label } = props;
  return (
    <div className="m-1 p-1">
      {/* <InputLabel value={props.value} label={props.label} /> */}
      <h3>Input Text</h3>
      <input
        placeholder={label}
        name="input"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
