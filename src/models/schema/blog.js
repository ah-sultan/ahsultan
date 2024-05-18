import { Schema, model, models } from "mongoose";

const blogContent = new Schema({
  blogTitle: {
    type: String,
    required: true,
  },
  publishedDate: String,
  blogBanner: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
  body : {
    type: String,
    required: true,
  },
  keywords: Array,
  comments : Array,
});

const BlogSchema = models.BlogSchema || model("BlogSchema", blogContent);

export default BlogSchema;
