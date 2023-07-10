import clientPromise from "../../../lib/mongodb"
import User from "../../../models/user"
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
        const { name, email, password } = JSON.parse(req.body)
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            name,
            email,
            hashedPassword,
        })
      const client = await clientPromise
      const db = client.db("turn17_media")
      const collection = await db.collection("users")
      const users = await collection.insertOne(newUser)

      res.status(200).json({ users })
    } catch (e) {
      console.error(e)
    }
  }
}