import Image from "next/image";
import React from "react";

const SingleImage = ({ _id, image, name }) => {
  return (
    <>
      <div
        className="w-100 h-100 border d-flex align-item-center justify-content-center"
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
      </div>
    </>
  );
};

export default SingleImage;
