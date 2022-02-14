import * as React from 'react';

import { Form } from 'react-bootstrap';
export interface ISelectProps {
  options: string[];
  onChange: Function;
}

export default function Select(props: ISelectProps) {
  return (
    <div>
      Simple select element of react-bootstrap
      <hr />
      Select any color :
      <Form.Control
        as="select"
        onChange={(e) => props.onChange(e.target.value)}
      >
        {props.options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </Form.Control>
    </div>
  );
}
