import { Schema, model, models } from "mongoose";

const ImageGallery = new Schema({
  image: String,
  albumName: {
    type: String,
    required: [true, "Select Album"],
  },
  name: {
    type: String,
    required: [true, "Image Name is required"],
  },
  publishDate: {
    _id : String,
    name: String
  },
});

const ImageGallerySchema =
  models.ImageGallerySchema || model("ImageGallerySchema", ImageGallery);

export default ImageGallerySchema;
