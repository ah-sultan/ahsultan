import React, { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import UploadImage from "../Admin/UploadImage";
import ReactImageUploading from "react-images-uploading";
import Image from "next/image";

const UploadImages = () => {
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const maxNumber = 69;

  //   HANDLE ONCHANGE
  const onChange = (imageList, addUpdateIndex) => {
    const getFiles = imageList.map((img) => img.file);

    setFiles(getFiles);
  };

  //   HANDLE CANCEL
  const handleCancel = () => {
    setImages([]);
    setShowModal(false);
  };

  //    HANDLE UPLOAD
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', files)
    try {
      const res = await fetch("/api/upload-gallery-img", {
        method: "POST",
        body: JSON.parse(formData)
      });

      console.log(res)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <Button variant="secondary" size="sm" onClick={() => setShowModal(true)}>
        📤 Upload Image
      </Button>

      <Modal
        show={showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        data-bs-theme="dark"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Upload images
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="gallery-img-upload-zone">
          <ReactImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <div
                  className="Uploaded-img-btn"
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <Image
                    width={300}
                    height={300}
                    src="/images/dashboard/upload-img-btn.png"
                    alt="UPLOAD IMG"
                    className="cursor-pointer img-fluid"
                  />
                </div>
                {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <Image
                      src={image["data_url"]}
                      alt="UPLOADED IMG"
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                    <div className="image-item__btn-wrapper">
                      <span
                        className="selected-img-remove"
                        onClick={() => onImageRemove(index)}
                      >
                        X
                      </span>
                      <span
                        className="selected-img-remove bg-primary"
                        onClick={() => onImageUpdate(index)}
                      >
                        ✎
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ReactImageUploading>
        </Modal.Body>
        <Modal.Footer>
          {loading && <Spinner />}
          <Button onClick={() => handleCancel()} variant="danger">
            Cancel
          </Button>
          <Button
            disabled={images.length <= 0}
            onClick={() => {
              handleUpload();
            }}
            variant="warning"
          >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UploadImages;
