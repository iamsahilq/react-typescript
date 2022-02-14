import * as React from 'react';

export interface IButtonProps {
  labelName: string;
  changeText: Function;
}

export default function Button(props: IButtonProps) {
  return (
    <div className="m-2 p-2">
      <button
        type="button"
        onClick={() => props.changeText()}
        className="btn btn-primary"
      >
        {props.labelName}
      </button>
    </div>
  );
}
