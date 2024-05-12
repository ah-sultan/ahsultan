import Image from "next/image";
import React, { useState } from "react";
import ReactImageUploading from "react-images-uploading";

const UploadImage = ({ getImages = () => {} }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    getImages(imageList);
    setImages(imageList);
  };

  return (
    <div className="dash-upload-img">
      <ReactImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <div
              className="dash-upload-area"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <Image
                width={300}
                height={300}
                src="/images/dashboard/upload-img-btn.png"
                alt="UPLOAD IMG"
              />
            </div>
            {imageList.length > 0 &&
              imageList.map((image, index) => (
                <div key={index} className="image-item dash-selected-img">
                  <Image
                    src={image["data_url"]}
                    alt="UPLOAD IMAGE"
                    width={300}
                    height={300}
                  />
                  <div className="image-item__btn-wrapper">
                    <span
                      className="selected-img-remove"
                      onClick={() => onImageRemove(index)}
                    >
                      X
                    </span>
                    <span
                      className="selected-img-remove"
                      onClick={() => onImageRemove(index)}
                    >
                      X
                    </span>
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </ReactImageUploading>
    </div>
  );
};

export default UploadImage;
