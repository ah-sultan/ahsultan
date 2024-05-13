"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const ItemsButtonWrapper = ({
  api,
  modalText,
  _id,
  image,
  updatePath = false,
}) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  // HANDLE DELETE ITEMS FROM DATABASE
  const handleDelete = async () => {
    setShow(true)
    try {
      const res = await fetch(`${api}?id=${_id}`, {
        method: "DELETE",
      });

      if (res.statusText === "OK") {
        handleDeleteImg();
        router.refresh();
      }
    } catch (error) {
      if (error) {
        toast.error("Error: Testimonial didn't delete");
      }
    }
  };


  // HANDLE DELETE IMG FROM LOCAL HOST
  const handleDeleteImg = async () => {
    try {
      const res = await fetch(`/api/uploadFile?filePath=${image}`, {
        method: "DELETE",
      });

      if (res.statusText === "OK") {
        toast.success(`${modalText} deleted Successfully`);
      }
    } catch (error) {
      toast.error(`${modalText} deleted but image didn't deleted`);
    }
  };

  return (
    <>
      <div className="item-btn-wrapper">
        <Link className="bg-primary" href="/">
          View
        </Link>
        <Link
          className="bg-success"
          href={{
            query: {
              id: _id,
            },
            pathname: updatePath ? updatePath : pathName + "/update",
          }}
        >
          Edit
        </Link>
        <Button className="bg-danger border-0" onClick={() => setShow(true)}>
          Delete
        </Button>
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
            <Button variant="danger" onClick={() => handleDelete()}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ItemsButtonWrapper;
