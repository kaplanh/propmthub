import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });

      //burrasi
      session.user.id = sessionUser?._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        const userAlreadyExists = await User.findOne({
          email: profile.email,
        });
        if (!userAlreadyExists) {
          console.log(profile, "profile")
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
            prompts: [],
          });
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
