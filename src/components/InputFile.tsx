import * as React from 'react';

export interface IInputFileProps {
  setSelectedFile: (value: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFile: any;
  id?: string;
}

export default function InputFile(props: IInputFileProps) {
  const { setSelectedFile, id = 'photo' } = props;
  return (
    <div className="p-1 m-1">
      <label>
        Click Me
        <input
          type="file"
          id={id}
          name="photo"
          accept="image/png, image/jpeg"
          onChange={setSelectedFile}
        />
      </label>
    </div>
  );
}
