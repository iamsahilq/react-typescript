import * as React from 'react';

export interface ITextProps {
  message: String;
}

export default function Text(props: ITextProps) {
  const { message = '' } = props;
  return (
    <div className="m-1 p-1">
      <h3>Text</h3>
      <div>{message}</div>
    </div>
  );
}
