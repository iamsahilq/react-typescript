import axios from 'axios';
import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET } from '../config/config';

import logging from '../config/logging';

export interface IModalProps {
  show: boolean;
  toggleModal: () => void;
  modalHeading: string;
  modalBody: string;
}

const { useState } = React;
export default function ModalComponent(props: IModalProps) {
  const [selectedImage, setImage] = useState<File | undefined>();
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [modalError, setError] = useState('');
  const {
    show,
    toggleModal,
    modalHeading = 'Modal heading',
    modalBody = "Woohoo, you're reading this text in a modal!",
  } = props;
  interface ISaveToDbAndClose {
    name: string;
    url: string;
  }

  const uploadFileToCloudinary = async (file: File) => {
    await axios('http://localhost:8000/images').catch((err) => {
      logging.error('err :>> ', err);
      throw new Error(err.message);
    });
    if (!CLOUDINARY_UPLOAD_PRESET || !CLOUDINARY_URL) {
      throw new Error('CLOUDINARY_UPLOAD_PRESET or CLOUDINARY_URL not defined');
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    const response = await axios.post(CLOUDINARY_URL, formData);
    return response.data.secure_url;
  };
  const saveToDbAndCloseModal = (data: ISaveToDbAndClose) => {
    axios
      .post('http://localhost:8000/images', data)
      .then((res) => {
        setImage(undefined);
        setUrl('');
        setName('');
      })
      .then(() => {
        toggleModal();
      })
      .catch((err) => {
        logging.error('err :>> ', err);
        setError(err.message);
      });
  };
  const uploadImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    let imgUrl = '';
    let imgName = name.length
      ? name
      : selectedImage?.name
      ? selectedImage.name
      : '';
    if (!selectedImage && !url.length) {
      setError('Please select an image or provide url');
      return;
    }
    if (selectedImage && url.length) {
      setError('Please provide either image or url');
      return;
    }
    if (!imgName.length) {
      setError('Please provide a name for the image');
      return;
    }
    if (url && url.length) {
      imgUrl = url;
      saveToDbAndCloseModal({ name: imgName, url: imgUrl });
    } else if (selectedImage) {
      uploadFileToCloudinary(selectedImage)
        .then((url) => {
          imgUrl = url;
          saveToDbAndCloseModal({ name: imgName, url: imgUrl });
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event?.target?.files?.[0]);
  };
  return (
    <div>
      <Modal show={show} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalError.length ? (
              <div className="text-danger">{modalError}</div>
            ) : (
              modalHeading
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{modalBody}</div>
          <div>
            <input
              type="text"
              placeholder="Image name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Image url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <input type="file" onChange={selectImage} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={uploadImage}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
