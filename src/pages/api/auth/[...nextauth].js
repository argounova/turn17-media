import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../../lib/mongodb"
import dbConnect from "../../../../lib/dbConnect"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider from "next-auth/providers/linkedin"
// import Auth0Provider from "next-auth/providers/auth0"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_ID,
    //   clientSecret: process.env.AUTH0_SECRET,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      token_endpoint_auth_method: "client_secret_post"
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
//   callbacks: {
//     async jwt({ token }) {
//       token.userRole = "admin"
//       return token
//     },
//   },
  adapter: MongoDBAdapter(clientPromise),
}

export default NextAuth(authOptions)