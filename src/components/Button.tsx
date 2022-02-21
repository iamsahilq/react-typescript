import * as React from 'react';

export interface IButtonProps {
  labelName: string;
  onClick: () => void;
}

export default function Button(props: IButtonProps) {
  const { labelName, onClick } = props;
  return (
    <div className="m-1 p-1">
      <button type="button" onClick={onClick}>
        {labelName}
      </button>
    </div>
  );
}
