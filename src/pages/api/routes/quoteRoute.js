import clientPromise from "../../../../lib/mongodb"

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise
      const db = client.db("turn17_media")
      const collection = await db.collection("selections")
      const mediaClients = await collection.find({}).toArray()

      res.status(200).json({ mediaClients })
    } catch (e) {
      console.error(e)
    }
  } else if (req.method === "POST") {
    try {
      const quoteData = JSON.parse(req.body)
      const client = await clientPromise
      const db = client.db("turn17_media")
      await db.collection("users").insertOne(quoteData)
      res.status(200).json({ quoteData })
    } catch (e) {
      console.error(e)
    }
  } else if (req.method === "PUT") {
    try {
      const update = JSON.parse(req.body)
      const client = await clientPromise
      const db = client.db("turn17_media")
      await db.collection("users").updateOne(
        { "email" : update.email },
        { $set: { 
          "siteType" : update.siteType,
          "siteExamples" : update.siteExs,
          "siteExampleBypass" : update.siteExBypass,
          "siteCost" : update.siteCost,
          "status" : update.projectStatus,
          "etc" : update.etc,
          "onTrack" : update.onTrack
        } },
        { upsert: true }
      )
      res.status(200).json({ update })
    } catch (e) {
      console.error(e)
    }
  }
}