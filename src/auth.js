import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authUser } from "./lib/authUser";
import { signInSchema } from "./lib/zod";
import { ZodError } from "zod";

const authConfig = {
  //...
  providers: [Credentials], // Add providers with an empty array for now
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  ...authConfig,
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          // logic to verify if user exists
          user = await authUser({ email, password });

          if (!user || user === null) {
            throw new Error("User not found.");
          }
          // return json object with the user data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userName = user.userName;
        token.email = user.email;
        token.id = user.id;
        token.role = user.role;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.userName = token.userName;
        session.user.email = token.userEmail;
        session.user.userId = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },

});
