import clientPromise from "../../../lib/mongodb"

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise
      const db = client.db("turn17_media")
      const collection = await db.collection("media_clients")
      const mediaClients = await collection.find({}).toArray()

      res.status(200).json({ mediaClients })
    } catch (e) {
      console.error(e)
    }
  } else if (req.method === "POST") {
    try {
      const newMediaClient = JSON.parse(req.body)
      const client = await clientPromise
      const db = client.db("turn17_media")
      const collection = await db.collection("media_clients")
      const mediaClients = await collection.insertOne(newMediaClient)

      res.status(200).json({ mediaClients })
    } catch (e) {
      console.error(e)
    }
  }
}