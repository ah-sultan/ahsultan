import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const SingleImage = ({
  _id,
  image,
  name,
  handleShow,
  selectedImage,
  setSelectedImage,
}) => {
  const [loading, setLoading] = useState();
  const [file, setFile] = useState(0);

  // HANDLE DELETE
  const handleDelete = async () => {
    setLoading(true);
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
      console.log(res);
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
    </>
  );
};

export default SingleImage;
