import { Schema, model, models,  } from "mongoose";

const ImageGallery = new Schema({
  image: String,

  name: {
    type: String,
    required: [true, "Image Name is required"],
  },
  publishDate: String,

  albumName: {
    _id: String,
    name: String,
  },
});

const ImageGallerySchema =
  models.ImageGallerySchema || model("ImageGallerySchema", ImageGallery);

export default ImageGallerySchema;
