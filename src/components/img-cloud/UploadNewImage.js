import Image from "next/image";
import React from "react";

const UploadNewImage = () => {
  return (
    <>
      <div>
        <Image
          src="/images/dashboard/upload-img-icon.jpg"
          alt="Folder"
          width={400}
          height={400}
        />
      </div>
    </>
  );
};

export default UploadNewImage;
