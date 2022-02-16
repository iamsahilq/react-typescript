import * as React from 'react';

export interface IButtonProps {
  labelName: string;
  changeText: () => void;
}

export default function Button(props: IButtonProps) {
  const { labelName, changeText } = props;
  return (
    <div className="m-1 p-1">
      <button type="button" onClick={changeText}>
        {labelName}
      </button>
    </div>
  );
}
