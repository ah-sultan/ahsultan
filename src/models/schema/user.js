import { Schema, model, models } from "mongoose";

const userContent = new Schema({
  userName: {
    type: String,
    required: [true, "Client Name is required"],
  },

  fullName: {
    type: String,
    required: [true, "full name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: String,
  image: String,
  registerDate: String,
});

const UserSchema = models?.UserSchema || model("UserSchema", userContent);

export default UserSchema;
