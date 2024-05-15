"use client";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ImageList from "./ImageList";
import Image from "next/image";
import UploadImages from "./UploadImages";

const ImageGallery = ({}) => {
  const [show, setShow] = useState(false);
  const [images, setImages] = useState(["/images/blogs/blog-details.jpg","/images/blogs/blog-details.jpg"]);

  return (
    <>
      <div className="image-gallery">
        <div className="image-gallery-header">
          <div className="image-gallery-upload-btn">
            <Image
              width={300}
              height={300}
              src="/images/dashboard/upload-img-btn.png"
              alt="UPLOAD IMG"
              className="cursor-pointer"
              onClick={() => setShow(true)}
            />
          </div>
          {Array.isArray(images) &&
            images.map((img, index) => {
              return(
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
              )
            })}
        </div>
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
          <Modal.Header>
            <Modal.Title as={"div"} className="w-100">
              <div className="d-flex align-items-center justify-content-between">
                <h3>Image Gallery</h3>
                <div className="d-flex align-items-center justify-content-end gap-2">
                  <UploadImages/>
                  <Button variant="primary" size="sm">
                    Select Image
                  </Button>
                  <Button variant="danger" size="sm">
                    Close
                  </Button>
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ImageList />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ImageGallery;
