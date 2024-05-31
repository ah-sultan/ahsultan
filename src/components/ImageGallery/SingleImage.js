import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const SingleImage = ({
  _id,
  image,
  name,
  handleShow,
  selectedImage,
  setSelectedImage,
  type,
}) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState(image);

  // HANDLE DELETE
  const handleDelete = async () => {
    setLoading(true);

    if (type === "local") {
      localDelete();
    }

    if (type === "url") {
      urlDelete();
    }
  };

  // Local Delete
  const localDelete = async () => {
    try {
      const res = await fetch(`/api/image-gallery?id=${_id}`, {
        method: "DELETE",
        body: JSON.stringify({
          _id,
          image,
          name,
        }),
      });

      if (res.ok || res.statusText === "OK") {
        setLoading(false);
        toast.success("Image Deleted Successfully");
        handleShow();
      } else {
        setLoading(false);
      }
    } catch (error) {
      toast.error("Error: Something went wrong try again");
      setLoading(false);
    }
  };

  // URL DELETE
  const urlDelete = async () => {
    try {
      const res = await fetch(`/api/image-gallery/upload-by-url?id=${_id}`, {
        method: "DELETE",
        body: JSON.stringify({
          _id,
        }),
      });

      if (res.ok || res.statusText === "OK") {
        setLoading(false);
        toast.success("Image Deleted Successfully");
        handleShow();
      } else {
        setLoading(false);
      }
    } catch (error) {
      toast.error("Error: Something went wrong try again");
      setLoading(false);
    }
  };

  // HANDLE UPDATE IMAGE
  const handleChange = async (getFiles) => {
    setLoading(true);
    const file = getFiles[0];
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch(`/api/image-gallery?id=${_id}`, {
        method: "PATCH",
        body: formData,
      });

      if (res.ok || res.statusText === "OK") {
        handleShow();
        setLoading(false);
        setFile(null);
      } else {
        setLoading(false);
        setFile(null);
      }
    } catch (error) {
      toast.error("Failed to update image");
      setFile[null];
    }
  };

  // HANDLE SELECT IMAGE
  const handleSelectImage = (e) => {
    if (e.target.checked) {
      setSelectedImage(image);
    } else {
      setSelectedImage("");
    }
  };

  // HANDLE DELETE IMAGE BY URL
  const handleUpdateUrl = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/image-gallery/upload-by-url?id=${_id}`, {
        method: "PATCH",
        body: JSON.stringify({
          image: url,
        }),
      });

      if (res.ok || res.statusText === "OK") {
        setLoading(false);
        toast.success("Image Update Successfully");
        handleShow();
      } else {
        setLoading(false);
      }
    } catch (error) {
      toast.error("Error: Something went wrong try again");
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="w-100 h-100 border d-flex align-item-center justify-content-center position-relative image-gallery-single-image"
        style={{ borderColor: "f5f5f5", borderRadius: "10px" }}
      >
        <Image
          src={image}
          width={400}
          height={400}
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "100%",
            flexShrink: 0,
          }}
          alt={name}
        />
        <div className="image-item__btn-wrapper">
          {type === "local" && (
            <Button variant="primary" className="position-relative">
              ✎
              <input
                type="file"
                name="update-image-gallery-file"
                className="position-absolute w-100 h-100 left-0 top-0 p-0"
                style={{ opacity: 0 }}
                onChange={(e) => {
                  handleChange(e.target.files);
                  setFile(e.target.files);
                }}
              />
            </Button>
          )}

          {type === "url" && (
            <Button
              variant="primary"
              className="position-relative"
              type="button"
              onClick={() => setShowModal({ _id, image, show: true })}
            >
              ✎
            </Button>
          )}
          <Button variant="danger" onClick={() => handleDelete()}>
            X
          </Button>
        </div>
        {/* IS LOADING ON UPLOADING */}
        {loading && (
          <div
            className="position-absolute left-0 right-0 top-0 bottom-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ background: "rgba(0,0,0,0.7)" }}
          >
            <Spinner />
          </div>
        )}

        <input
          type="checkbox"
          checked={selectedImage === image}
          onChange={handleSelectImage}
          className="position-absolute"
          style={{ left: 10, top: 10, width: 20, height: 20 }}
        />
      </div>

      <Modal show={showModal}>
        <Modal.Header>
          <h6>Update Image url</h6>
        </Modal.Header>
        <Modal.Body>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="dash-input-form"
          />
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center">
          {loading && <Spinner/>}
          <Button type="button" variant="primary" onClick={handleUpdateUrl}>
            Update
          </Button>
          <Button type="button" variant="danger" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleImage;
