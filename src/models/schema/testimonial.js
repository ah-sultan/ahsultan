import { Schema, model, models } from "mongoose";

const testimonialContent = new Schema({
  clientName: {
    type: String,
    required: [true, "Client Name is required"],
  },

  clientTitle: String,
  reviewText: {
    type: String,
    required: [true, "Review text Name is required"],
  },

  image: String,
  publishedDate: String,
});

const TestimonialSchema =
  models.TestimonialSchema || model("TestimonialSchema", testimonialContent);

export default TestimonialSchema;
