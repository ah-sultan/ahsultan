import { handlers, signIn } from "@/auth"; // Referring to the auth.ts we just created
import UserSchema from "@/models/schema/user";
import { connectToDB } from "@/utils/database";
import CredentialsProvider from "next-auth/providers/credentials";
export const { GET, POST } = handlers;
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    await connectToDB();

    const user = await UserSchema.findOne({ email: credentials.email });
    if (!user) throw new Error("The email address is wrong");
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if (isCorrect) throw new Error("The password is wrong");
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const authOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        try {
          user = await login(credentials);
          return user;
        } catch (error) {
          console.log(error);
          return (user = null);
        }
      },
    }),
  ],
};
