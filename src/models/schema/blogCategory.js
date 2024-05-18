import { Schema, model, models } from "mongoose";

const BlogCategory = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  date: String,
  subCategory : Array
});

const BlogCategorySchema =
  models.BlogCategorySchema || model("BlogCategorySchema", BlogCategory);

export default BlogCategorySchema;
