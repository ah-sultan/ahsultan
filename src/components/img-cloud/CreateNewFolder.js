import Image from "next/image";
import React, { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const CreateNewFolder = ({ currentPath = false }) => {
  const [showModal, setShowModal] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  // HANDLE CREATE FOLDER ON LOCAL DIRECTORY
  const handleCreate = async (dir) => {
    setIsAlert(false);
    try {
      const res = await fetch("/api/cloudFolder/", {
        method: "POST",
        body: JSON.stringify({
          path: dir,
        }),
      });

     

      if (res.ok) {
        setShowModal(false)
        toast(`${folderName} has Created`);
        setFolderName("")
      }
    } catch (error) {
      toast("Error Create Folder");
    }
  };

  const createFolderData = {
    folderName: folderName,
    folderPath: `imgCloud/${currentPath}${folderName.replace(/ /g, "_")}`,
    imgPath:"",
  };

  // HANDLE SAVE FOLDER ON DATABASE
  const handleSaveFolder = async () => {
    if (folderName.length > 0) {
      try {
        const res = await fetch("/api/imgCloudFiles", {
          method: "POST",
          body: JSON.stringify(createFolderData),
        });

        if (res.ok) {
          handleCreate(createFolderData.folderPath);
        }
      } catch (error) {
        toast("Folder Not created");
      }
    } else {
      setIsAlert("Please type Folder Name");
    }
  };

  // HANDLE FIND EXIST FOLDER
  const handleFindFolder = async () => {
    try {
      const res = await fetch(
        `/api/cloudFolder/?id=${createFolderData.folderPath}`,
        {
          method: "GET",
        }
      );

      if (res.statusText === "false") {
        handleSaveFolder();
        setIsAlert(false)
      } else {
        setIsAlert(`${folderName} already exist`);
      }
    } catch (error) {
      setIsAlert("Something went wrong Please try Again");
    }
  };

  return (
    <div>
      <Image
        src="/images/dashboard/create-new-folder-icon.jpg"
        alt="Folder"
        width={400}
        height={400}
        onClick={() => setShowModal(true)}
      />

      <Modal show={showModal} onHide={() => setShowModal(true)}>
        <Modal.Header closeButton>
          <Modal.Title>Write Folder Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            className="dash-input-form mt-3"
          />
          {isAlert && (
            <Alert key={"danger"} variant="warning">
              {isAlert}
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFindFolder}>
            Save Folder
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateNewFolder;
