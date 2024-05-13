"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemsButtonWrapper = ({ deleteAPi, modalText }) => {
  const [show, setShow] = useState(false)
  const handleDelete = () => {};

  return (
    <>
      <div className="item-btn-wrapper">
        <Link className="bg-primary" href={"/"}>
          View
        </Link>
        <Link className="bg-success" href={"/"}>
          Edit
        </Link>
        <Button className="bg-danger border-0">Delete</Button>
        {/* MODAL SECTION */}
        <Modal show={show}>
          <Modal.Header closeButton>
            <Modal.Title>{modalText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you wan to sure delete {modalText} </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ItemsButtonWrapper;
