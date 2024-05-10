import { Schema, model, models } from "mongoose";

const imgCloudContent = new Schema({
  folderName : String,
  folderPath : String,
  imgPath : String,
  date : String,
});

const ImgCloudSchema =
  models.ImgCloudSchema || model("ImgCloudSchema", imgCloudContent);

export default ImgCloudSchema;
