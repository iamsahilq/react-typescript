import * as React from 'react';
import axios from 'axios';
import ModalComponent from '../components/Modal';
import { BsFilePlus } from 'react-icons/bs';

export interface IImageListProps {}

interface IImage {
  id: string | number;
  name: string;
  url: string;
}
const { useEffect, useState } = React;

export default function ImageList(props: IImageListProps) {
  const [images, setImages] = useState([]);
  const [modalOpen, setModal] = useState(false);
  const [imageListError, setError] = useState('');

  const toggleModal = () => {
    setModal(!modalOpen);
  };
  useEffect(() => {
    axios('http://localhost:8000/images')
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <div className="row">
      {imageListError.length ? (
        <div>{imageListError}</div>
      ) : (
        <>
          <div className="col-11">
            {images.map((image: IImage) =>
              image.url ? (
                <img
                  className="img-thumbnail m-2 p-2"
                  width={200}
                  key={image.id}
                  src={image.url}
                  //   onError={(event: React.ChangeEvent<HTMLImageElement>) =>
                  //     (event.target.style.display = 'none')
                  //   }
                  alt={image.url}
                />
              ) : null,
            )}
          </div>
          <BsFilePlus className="col-1 btn" size={60} onClick={toggleModal} />
          <ModalComponent
            show={modalOpen}
            toggleModal={toggleModal}
            modalHeading="Add Image"
            modalBody="Add an image to the list"
          ></ModalComponent>
        </>
      )}
    </div>
  );
}
