import NextAuth  from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '../../../../models/user'
import dbConnect from '../../../../utils/dbConnect'

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'Email', type: 'email'},
                password: {label: 'Password', type: 'password'}
            },
            authorize: async (credentials) => {
                dbConnect()
                const user = await User.findOne({email: credentials.email}).select('+password')
                if(!user) { throw new Error('No user with a matching email was found.')}
                const pwValid = await user.comparePassword(credentials.password)
                if(!pwValid){ throw new Error('Your password is invalid') }
                return user
            }
        })
    ],
    callbacks: {
        // We can pass in additional information from the user document MongoDB returns
        // This could be avatars, role, display name, etc...
        async jwt({token, user}){
            if (user) {
                token.user = {
                    _id: user._id,
                    email: user.email,
                    role: user.role,
                }
            }
            return token
        },
        // If we want to access our extra user info from sessions we have to pass it the token here to get them in sync:
        session: async({session, token}) => {
            if(token){
                session.user = token.user
            }
            return session
        }
    },  
  pages: {
    // Here you can define your own custom pages for login, recover password, etc.
      signIn: '/login', // we are going to use a custom login page (we'll create this in just a second)
  },
})