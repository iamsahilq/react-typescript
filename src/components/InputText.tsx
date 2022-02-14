import * as React from 'react';

export interface IInputTextProps {
  handleChange: Function;
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
  return (
    <div>
      {/* <InputLabel value={props.value} label={props.label} /> */}
      <input
        placeholder={props.label}
        name="input"
        type="text"
        value={props.value}
        onChange={(e) => props.handleChange(e.target.value)}
      />
    </div>
  );
}
