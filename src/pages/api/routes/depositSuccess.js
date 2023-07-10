import clientPromise from "../../../../lib/mongodb"

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const update = JSON.parse(req.body)
      const client = await clientPromise
      const db = client.db("turn17_media")
      await db.collection("users").updateOne(
        { "email" : update.email },
        { $set: { "depositId" : update.depositId , "depositPaid" : update.depositPaid } },
        { upsert: true }
      )
      res.status(200).json({ update })
    } catch (e) {
      console.error(e)
    }
  }
}