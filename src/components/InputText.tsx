import * as React from 'react';

export interface IInputTextProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  id?: string;
  validationFunction?: Function | null;
  type?: string;
  name?: string;
  required?: boolean;
  match?: string;
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
  const {
    handleChange,
    value = '',
    label,
    id = 'input',
    type = 'text',
    name = 'input',
    required = false,
  } = props;
  return (
    <div className="m-1 p-1">
      {/* <InputLabel value={props.value} label={props.label} /> */}
      <input
        placeholder={label}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        id={id}
        autoComplete="off"
        required={required}
      />
    </div>
  );
}
