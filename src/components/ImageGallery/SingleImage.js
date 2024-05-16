import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";

const SingleImage = ({ _id, image, name }) => {
  
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
          <Button variant="primary" onClick={() => onImageRemove(index)}>
            ✎
          </Button>
          <Button variant="danger" onClick={() => onImageRemove(index)}>
            X
          </Button>
        </div>
         {/* IS LOADING ON UPLOADING */}
         {loading && (
            <div className="position-absolute left-0 right-0 top-0 bottom-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{background:"rgba(0,0,0,0.7)"}}>
                <Spinner />
              
            </div>
          )}
      </div>
    </>
  );
};

export default SingleImage;
