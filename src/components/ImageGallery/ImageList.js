
// import { getImageGallery } from "@/lib/getData";
import getImages from './imageData'
import { useEffect } from "react";

// const getImages = await getImageGallery();


const ImageList = ({}) => {

  useEffect(() => {
    const ImageGalleryByDate = getImages.map((img) => {
        if(img.date){
            return{
                date : img.date,
                imagelist : [{...img}]
            }
        }
    } )
console.log(ImageGalleryByDate)
  })


  return (
    <>
      <div className="row">
        {Array.isArray(getImages) && getImages.map((imgList, index) => {

        })}
      </div>
    </>
  );
};

export default ImageList;
