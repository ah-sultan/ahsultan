import UserSchema from "@/models/schema/user";
import { connectToDB } from "@/utils/database";
import bcrypt from "bcrypt";
export const authUser = async (credentials) => {
  if (credentials) {
    try {
      await connectToDB();

      const user = await UserSchema.findOne({
        email: credentials?.email,
      });


      if (!user) throw new Error("wrong email address not found");
      const isCorrect = await bcrypt.compare(
        credentials?.password,
        user?.password
      );
      
      // const isCorrect = await argon2.verify(credentials.password, user.password);
      if (!isCorrect) throw new Error("Password did not match");
      return user;
    } catch (error) {
      console.log(error);
      return new Error(error);
    }
  } else {
    return new Error("Wrong credentials");
  }
};
