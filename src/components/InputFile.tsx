import * as React from 'react';

export interface IInputFileProps {
  setSelectedFile: (value: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFile: any;
}

export default function InputFile(props: IInputFileProps) {
  const { setSelectedFile, selectedFile } = props;
  return (
    <div className="p-1 m-1">
      <h3>Input File</h3>
      <label>
        Click Me
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/png, image/jpeg"
          onChange={setSelectedFile}
          value={selectedFile}
        />
      </label>
    </div>
  );
}
