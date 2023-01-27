import mongoose from "mongoose";

const connectToMongo = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) throw new Error("MONGO_URI is not defined");

  try {
    const conn = await mongoose.connect(MONGO_URI);
    const duration = Date.now() - start;
    console.log(

        `✅ MongoDB ${conn.version} connected to ${conn.connection.host}`
    );
    console.log(`   - Database: ${conn.connection.name}`);
    console.log(

        `   - Collections: ${Object.keys(conn.connection.collections)}`
    );
    console.log(`   - Time taken: ${duration}ms`);
  } catch (error) {
    console.error(`❌ Something went wrong connecting to MongoDB: ${error}`);
    process.exit(1);
  }
};

// export default connectToMongo;
//
// Connect to the MongoDB Database
//
// import connectToMongo from "../database";
connectToMongo();
