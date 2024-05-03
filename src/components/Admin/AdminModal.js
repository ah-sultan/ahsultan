"use client";

import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

const AdminModal = ({ showModal, setShowModal, handleDelete }) => {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Offcanvas
      show={showModal}
      onHide={handleClose}
      placement="top"
      className="admin-modal"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body></Offcanvas.Body>
      <div className="admin-modal-body">
        <h6>!Are you sure to delate</h6>
        <div className="btn-wrapper">
          <Button type="button" variant="danger" onClick={() => handleDelete()}>
            Delete
          </Button>
          <Button
            type="button"
            variant="primary"
            onClick={() => {
              handleClose();

            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Offcanvas>
  );
};

export default AdminModal;
