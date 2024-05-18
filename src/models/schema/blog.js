import { Schema, model, models } from "mongoose";

const blogContent = new Schema({
  title: {
    type: String,
    required: true,
  },
  publishedDate: String,
  thumbnail: String,
  blogBanner: {
    type: String,
    required: true,
  },

  category: {
    _id: String,
    title: String,
  },
  body: {
    type: String,
    required: true,
  },
  keywords: Array,
  comments: Array,
});

const BlogSchema = models.BlogSchema || model("BlogSchema", blogContent);

export default BlogSchema;
