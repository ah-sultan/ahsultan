import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const UploadImg = ({ getImages = () => {} }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [preview, setPreview] = useState([]);

  //   HANDLE FOR DATA
  const handleFormData = (value) => {
    const formData = new FormData();
    [...value].forEach((file) => {
      formData.append("file", file);
      getImages(formData);
    });
  };

  //   HANDLE PREVIEW DATA
  const handlePreview = (value) => {
    value.forEach((file, index) => {
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageSrc = e.target.result;
          setPreview((previousImg) => [...previousImg, { image: imageSrc, index }]);
        };
        reader.readAsDataURL(file);
      }
    });
  };


  //   HANDLE DELETE
  const handleDelate = (index) => {
    const updatedData = selectedImages; // Create a copy of the selectedImages array
    updatedData.splice(index, 1); // Remove one element at the specified index
    setSelectedImages(updatedData);
    handleFormData(updatedData);
    handlePreview(updatedData);
  };

  //   HANDLE CHANGE
  const handleChanged = (e) => {
    const allFiles = e.target.files;
    const imagesArray = Array.from(allFiles);
    const newData = [...selectedImages, ...imagesArray];
    setSelectedImages(newData);
    handleFormData(newData);
    handlePreview(newData);
  };

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

        {Array.isArray(preview) &&
          preview.map((data, index) => {
            return (
              <div className="dash-selected-img" key={index}>
                <Image
                  width={300}
                  height={300}
                  src={data.image}
                  alt="UPLOAD IMG"
                />
                <span
                  className="selected-img-remove"
                  onClick={() => handleDelate(index)}
                >
                  X
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UploadImg;
