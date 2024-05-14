import { Schema, model, models } from "mongoose";

const ImageGallery = new Schema({
  image: String,
  albumName: {
    type: String,
    required: [true, "Select Album"],
  },
  date: String,
  name: {
    type: String,
    required: [true, "Image Name is required"],
  },
});

const ImageGallerySchema =
  models.ImgCloudSchema || model("ImageGallerySchema", ImageGallery);

export default ImageGallerySchema;
