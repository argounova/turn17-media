import { getToken } from "next-auth/jwt"

const secret = process.env.NEXTAUTH_SECRET

export const hasToken = async (req) => {
  const token = await getToken({ req, secret })
  if(!token){
    return false
  }
  return true
}

export const hasTokenMiddleware = async (req, res, next) => {
    const token = await getToken({ req, secret })
    if(!token){
      return next(new Error('Not Allowed - Not logged in'))
    }
    next()
}