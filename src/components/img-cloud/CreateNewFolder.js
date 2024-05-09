import Image from "next/image";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CreateNewFolder = ({currentPath}) => {
  const [showModal, setShowModal] = useState(false)

  const handleCreateFolder = async () => {
    try {
      const res = ""
    } catch (error) {
      
    }

  }



  return (
    <div>
      <Image
        src="/images/dashboard/create-new-folder-icon.jpg"
        alt="Folder"
        width={400}
        height={400}
        onClick={() => setShowModal(true)}
      />

      <Modal show={showModal}  onHide={() => setShowModal(true)}>
        <Modal.Header closeButton>
          <Modal.Title>Write Folder Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="email" placeholder="Enter email" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateFolder}>
            Save Folder
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateNewFolder;
