import clientPromise from "../../../../lib/mongodb"

export default async function getProfile(req, res) {
   if (req.method === "GET") {
    try {
      const client = await clientPromise
      const db = client.db("turn17_media")
      const collection = await db.collection("users")
      const users = await collection.find().toArray()
      res.status(200).json({ users })
    } catch (e) {
      console.error(e)
    }
  }
}