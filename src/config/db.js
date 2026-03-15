const mongoose = require("mongoose");

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }

  // Connection Events
  mongoose.connection.on("error", (err) => {
    console.error("\x1b[31m%s\x1b[0m", "Mongoose Connection Error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn(
      "\x1b[33m%s\x1b[0m",
      "Mongoose disconnected. Attempting to reconnect..."
    );
  });

  mongoose.connection.on("connected", () => {
    console.log("\x1b[32m%s\x1b[0m", "Mongoose reconnected to the database");
  });

  // Graceful shutdown
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed on app termination");
    process.exit(0);
  });
}

module.exports = { connectDB };

/**
 * 1 st way
 * require("./config/db.js").connectDB();
 *
 * if only
 * Object { connectDB }	require().connectDB()
 *
 *
 * 2nd way
 * const connectDB = require("./config/db.js");
 * connectDB();
 *
 * Function connectDB	require() directly
 */
