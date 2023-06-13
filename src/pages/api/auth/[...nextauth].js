import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../../lib/mongodb"
import dbConnect from "../../../../lib/dbConnect"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider from "next-auth/providers/linkedin"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "../../../../models/user"
// import { compare } from 'bcrypt'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      token_endpoint_auth_method: "client_secret_post"
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      async authorize(credentials) {
        await dbConnect()
        const user = await User.findOne({
          email: credentials.email
        })
        if (!user) {
          throw new Error('An account with that email does not exist.')
        }
        // const comparePassword = await compare(
        //   credentials.password,
        //   user.hashedPassword
        // )
        // if (!comparePassword) {
        //   throw new Error('Incorrect password.')
        // }
        const p1 = credentials.password
        const p2 = user.hashedPassword
        if (p1 != p2) {
          throw new Error('Incorrect password.')
        }
        return user
      }
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/'
  },
  debug: process.env.NODE_ENV !== "production",
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)