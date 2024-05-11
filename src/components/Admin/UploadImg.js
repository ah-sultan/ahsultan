import Image from "next/image";
import React, { useCallback, useState } from "react";

const UploadImg = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  //   HANDLE CHANGE
  const handleChanged = useCallback((e) => {
    const allFiles = e.target.files || [];

    [...allFiles].forEach((file, index) => {
      file.id = `_uploadImg_${index}`;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const imageSrc = e.target.result;
        setSelectedImages((prevSelectedImages) => [
          ...prevSelectedImages,
          { ...file, livePreview: imageSrc },
        ]);
      };
    });
  }, []);


  const handleDelete = useCallback((id) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.filter((image) => image.id !== id)
    );
  }, []);

  console.log(selectedImages)

  return (
    <>
      <div className="dash-upload-img">
        <div className="dash-upload-area">
          <Image
            width={300}
            height={300}
            src="/images/dashboard/upload-img-btn.png"
            alt="UPLOAD IMG"
          />
          <input
            type="file"
            className="dash-input"
            onChange={(e) => handleChanged(e)}
            multiple
          />
        </div>
        {Array.isArray(selectedImages) &&
          selectedImages.map((data, index) => {
            return (
              <div className="dash-selected-img" key={index}>
                <img
                  width={300}
                  height={300}
                  src={data.livePreview}
                  alt="UPLOAD IMG"
                />
                <span className="selected-img-remove" onClick={() => handleDelete(data.id)}>X</span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UploadImg;
