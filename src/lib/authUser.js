import UserSchema from "@/models/schema/user";
import { connectToDB } from "@/utils/database";
import argon2 from "argon2";
// import bcrypt from "bcryptjs-react";
export const authUser = async (credentials) => {
  if (credentials) {
    try {
      await connectToDB();

      const user = await UserSchema.findOne({
        email: credentials.email,
      });

      if (!user) throw new Error("wrong email address not found");
      // const isCorrect = await bcrypt.compare(credentials.password, user.password);
      const isCorrect = await argon2.verify(credentials.password, user.password);
      if (!isCorrect) throw new Error("Password did not match");
      return user;
    } catch (error) {
      return new Error("Wrong credentials. user not found");
    }
  } else {
    return new Error("Wrong credentials");
  }
};
