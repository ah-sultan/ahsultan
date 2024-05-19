import { Schema, model, models } from "mongoose";

const serviceContent = new Schema({
  title : String,
  serviceNo : String,
  description : String,
  body : String,
});

const ServiceSchema =
  models.ServiceSchema || model("ServiceSchema", serviceContent);

export default ServiceSchema;
