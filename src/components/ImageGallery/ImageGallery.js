"use client";
import React, { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import ImageList from "./ImageList";
import Image from "next/image";
import UploadImages from "./UploadImages";
import { toast } from "react-toastify";
import UploadByUrl from "./UploadByUrl";

const ImageGallery = ({
  prevImages,
  getSingleImage = () => {},
  handleRemoveImage = () => {},
  gridCols = 7,
}) => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(false);

  // HANDLE SHOW IMAGE GALLERY
  const handleShow = async () => {
    setShow(true);
    setLoading(true);
    setSelectedImage(false);
    try {
      const res = await fetch("/api/image-gallery", {
        method: "GET",
      });

      const data = await res.json();
      setLoading(false);
      if (res.ok) {
        setGalleryImages(data.data);
      } else {
        setGalleryImages([]);
      }
    } catch (error) {
      setGalleryImages([]);
      setLoading(false);
    }
  };

  // HANDLE SELECT IMAGE
  const handleSelectImage = () => {
    if (selectedImage) {
      getSingleImage(selectedImage);
      setShow(false);
    } else {
      toast.error("Please Selected any Image");
    }
  };

  return (
    <>
      <div className="image-gallery">
        <div
          className="image-gallery-header"
          style={{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }}
        >
          <div className="image-gallery-upload-btn">
            <Image
              width={300}
              height={300}
              src="/images/dashboard/upload-img-btn.png"
              alt="UPLOAD IMG"
              className="cursor-pointer"
              onClick={() => handleShow()}
            />
          </div>
          {prevImages &&
            Array.isArray(prevImages) &&
            prevImages.map((img, index) => {
              return (
                <div key={index} className="image-gallery-uploaded-img">
                  <Image
                    src={img}
                    alt="UPLOAD IMAGE"
                    width={300}
                    height={300}
                  />
                  <div className="image-item__btn-wrapper">
                    <span
                      className="selected-img-remove"
                      onClick={() => handleRemoveImage()}
                    >
                      X
                    </span>
                    <span
                      className="selected-img-remove bg-primary"
                      onClick={() => handleShow()}
                    >
                      ✎
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
          <Modal.Header>
            <Modal.Title as={"div"} className="w-100">
              <div className="d-flex align-items-center justify-content-between">
                <h3>Image Gallery</h3>
                <UploadByUrl handleShow={ handleShow}/>
                <div className="d-flex align-items-center justify-content-end gap-2">
                  <UploadImages handleShow={handleShow} />
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleSelectImage}
                  >
                    Select Image
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => setShow(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!loading && galleryImages.length === 0 && (
              <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <div>
                  <h4>Images Not Found</h4>
                  <Button variant="secondary">Try Again</Button>
                </div>
              </div>
            )}
            {loading ? (
              <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <Spinner />
              </div>
            ) : (
              <ImageList
                galleryImages={galleryImages}
                handleShow={handleShow}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            )}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ImageGallery;
