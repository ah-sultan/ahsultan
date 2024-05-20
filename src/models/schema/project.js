import { Schema, model, models } from "mongoose";

const projectContent = new Schema({
  title: {
    type: String,
    require: true,
  },

  thumbnail: {
    type: String,
    require: true,
  },

  summary: {
    type: String,
    require: true,
  },

  bannerImage: {
    type: String,
    require: true,
  },

  category: {
    type: String,
    require: true,
  },

  viewProject: {
    type: String,
    require: true,
  },

  duration: {
    type: String,
    require: true,
  },

  technologies: {
    type: String,
    require: true,
  },
  publishDate: {
    type: String,
    require: true,
  },

  body: {
    type: String,
    require: true,
  },
});

const ProjectSchema =
  models.ProjectSchema || model("ProjectSchema", projectContent);

export default ProjectSchema;
