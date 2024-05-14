"use client";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import ImageList from "./ImageList";

const getImages = () => {

}

const ImageGallery = ({ setShow= () =>{} }) => {



  return (
    <>
    <ImageList/>
      {/* <Modal show={true} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title as={"div"} className="w-100">
            <div className="d-flex align-items-center justify-content-between">
              <h3>Image Gallery</h3>
              <div className="d-flex align-items-center justify-content-end gap-2">
                <Button variant="secondary" size="sm">
                  📤 Upload Image
                </Button>
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
        <Modal.Body>Modal body content</Modal.Body>
      </Modal> */}
    </>
  );
};

export default ImageGallery;
