import React, { useState } from "react";
import albumList from "./albumList";
import { Button, Modal, Overlay, Spinner } from "react-bootstrap";
import ReactImageUploading from "react-images-uploading";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UploadImages = ({ handleShow }) => {
  const [album, setAlbum] = useState(albumList[0]);
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const maxNumber = 69;

  //   HANDLE ONCHANGE
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    const getFiles = imageList.map((img) => {
      return img.file;
    });
    setFiles(getFiles);
  };

  //   HANDLE CANCEL
  const handleCancel = () => {
    setImages([]);
    setShowModal(false);
  };

  //    HANDLE UPLOAD
  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("albumName", JSON.stringify(album));
    files.forEach((file) => {
      formData.append("file", file);
    });

    try {
      const res = await fetch("/api/image-gallery", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        handleShow();
        setLoading(false);
        setShowModal(false);
      }else{
        setLoading(false)
      }
    } catch (error) {
      setLoading(false);
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
        <Modal.Header className="d-flex items-center">
          <Modal.Title id="contained-modal-title-vcenter">
            Upload images
          </Modal.Title>
          {
            <select
              className="col-3 dash-input-form mb-0 text-capitalize"
              style={{ width: "250px" }}
            >
              {Array.isArray(albumList) &&
                albumList.map((data, index) => {
                  return (
                    <option
                      className="text-capitalize"
                      key={index}
                      onClick={() => setAlbum(data)}
                    >
                      {data.name}
                    </option>
                  );
                })}
            </select>
          }
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
          <Button onClick={() => handleCancel()} variant="danger">
            Cancel
          </Button>
          <Button
            disabled={images.length <= 0}
            onClick={() => handleUpload()}
            variant="warning"
          >
            Upload
          </Button>
        </Modal.Footer>
        {/* IS LOADING ON UPLOADING */}
        {loading && (
            <div className="position-absolute left-0 right-0 top-0 bottom-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{background:"rgba(0,0,0,0.7)"}}>
                <Spinner />
              
            </div>
          )}
      </Modal>
    </div>
  );
};

export default UploadImages;
