//////////////////////////////
// Import our Dependencies
//////////////////////////////
require("dotenv").config() // read our .env
const mongoose = require("mongoose")

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL

// Establish Connection
mongoose.connect(DATABASE_URL)

// Events for when connection opens/disconnects/errors
mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

////////////////////////////////////
// export connection
////////////////////////////////////
module.exports = mongoose