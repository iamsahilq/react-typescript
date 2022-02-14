import * as React from 'react';

export interface ITextProps {
  message: String;
}

export default function Text(props: ITextProps) {
  return <div className="text-primary">{props.message}</div>;
}
