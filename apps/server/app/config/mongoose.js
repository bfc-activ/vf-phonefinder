const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect;
}

const { MongoClient, ServerApiVersion } = require("mongodb");
const fs = require("fs");

const credentials = "<path_to_certificate>";

const client = new MongoClient(
  "mongodb+srv://phonefindercluster.dzuzji3.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority",
  {
    sslKey: credentials,
    sslCert: credentials,
    serverApi: ServerApiVersion.v1,
  }
);

async function run() {
  try {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("testCol");
    const docCount = await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

// import mongoose from "mongoose";

// const connectToMongo = async () => {
//   const MONGO_URI = process.env.MONGO_URI;
//   if (!MONGO_URI) throw new Error("MONGO_URI is not defined");

//   try {
//     const conn = await mongoose.connect(MONGO_URI);
//     const duration = Date.now() - start;
//     console.log(

//         `✅ MongoDB ${conn.version} connected to ${conn.connection.host}`
//     );
//     console.log(`   - Database: ${conn.connection.name}`);
//     console.log(

//         `   - Collections: ${Object.keys(conn.connection.collections)}`
//     );
//     console.log(`   - Time taken: ${duration}ms`);
//   } catch (error) {
//     console.error(`❌ Something went wrong connecting to MongoDB: ${error}`);
//     process.exit(1);
//   }
// };

// export default connectToMongo;

// Connect to the MongoDB Database

// import connectToMongo from "../database";
// connectToMongo();
