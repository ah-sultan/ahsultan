// import { getImageGallery } from "@/lib/getData";
"use client";
import SingleImage from "./SingleImage";
import getImages from "./imageData";
import { useEffect, useState } from "react";

const ImageList = ({}) => {
  const [images, setImages] = useState(getImages);
  const [publishDate, setPublishDate] = useState([]);

  useEffect(() => {
    const getPublishDates = getImages.map((img) => img.publishDate);
    const uniquePublishDate = [...new Set(getPublishDates)];
    setPublishDate(uniquePublishDate);
  }, [getImages, publishDate]);

  return (
    <>
      <div className="gallery-images-warper mt-4">
        {Array.isArray(publishDate) &&
          publishDate.map((date, index) => {
            return (
              <div className="gallery-image-list" key={index}>
                <h6>{date}</h6>
                <hr />
                <div className="row g-3 mb-4 pb-4">
                {Array.isArray(images) &&
                  images.map((data, idx) => {
                    return (
                      <div key={idx} className="col-lg-2">
                        <SingleImage {...data} />
                      </div>
                    );
                  })}
                  </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ImageList;