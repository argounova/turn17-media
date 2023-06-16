import clientPromise from "../../../../lib/mongodb"

export default async function getProfile(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise
      const db = client.db("turn17_media")
      const collection = await db.collection("selections")
      const userEmail = 'putzstuck@gmail.com'
      const userSelections = await collection.find({ email: 'putzstuck@gmail.com' }).toArray()
      res.status(200).json({ userSelections })
    } catch (e) {
      console.error(e)
    }
  }
}