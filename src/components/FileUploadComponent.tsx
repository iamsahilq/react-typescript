import { useEffect, useState } from 'react';

interface IFProps {
  onFileChange?: (file: File) => void;
}

export const FileUploadComponent = (props: IFProps) => {
  const { onFileChange } = props;
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | undefined>();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(files[0]);
    if (onFileChange) {
      onFileChange(files[0]);
    }
  };

  return (
    <div>
      <input type="file" onChange={onSelectFile} />
      {selectedFile && <img src={preview} width="200" alt="Invalid" />}
    </div>
  );
};
