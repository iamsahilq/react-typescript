import * as React from 'react';

export interface IInputFileProps {
  setSelectedFile: Function;
  selectedFile: any;
}

export default function InputFile(props: IInputFileProps) {
  return (
    <div className="photo">
      <label>
        Click Me
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/png, image/jpeg"
          onChange={(e) => props.setSelectedFile(e)}
          value={props.selectedFile}
        />
      </label>
    </div>
  );
}
