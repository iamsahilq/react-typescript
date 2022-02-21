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

const { useState } = React;

export default function InputText(props: IInputTextProps) {
  const [valError, setValError] = useState('');
  const {
    handleChange,
    value = '',
    label,
    id = 'input',
    validationFunction = null,
    type = 'text',
    name = 'input',
    required = false,
    match,
  } = props;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validationFunction) {
      const err = validationFunction(event.target.value);
      setValError(err);
    }
    if (match && event.target.value !== match) {
      setValError('Password does not match');
    }
    handleChange(event);
  };
  return (
    <div className="m-1 p-1">
      {/* <InputLabel value={props.value} label={props.label} /> */}
      {valError.length ? <p className="text-danger">{valError}</p> : null}
      <input
        placeholder={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        autoComplete="off"
        required={required}
      />
    </div>
  );
}
