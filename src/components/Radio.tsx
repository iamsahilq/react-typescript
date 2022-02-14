import * as React from 'react';

export interface IRadioProps {
  //   checked: string;
  onChange: Function;
  id: string;
}

export default function Radio(props: IRadioProps) {
  return (
    <div id={props.id} onChange={(e) => props.onChange(e)}>
      <input type="radio" value="MALE" name="gender" /> Male
      <input type="radio" value="FEMALE" name="gender" /> Female
    </div>
  );
}
