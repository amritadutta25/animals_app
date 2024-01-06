/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config() // Load env variables
const express = require("express") // import express
const morgan = require("morgan") //import morgan
const methodOverride = require("method-override")
const mongoose = require("mongoose")

const app = express()


////////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////////
app.use(morgan("dev")) //logger
app.use(methodOverride("_method")) // override form submissions
app.use(express.urlencoded({ extended: true })) // parse urlencoded bodies
app.use(express.static("public")) // serve files from public folder



/////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////
app.get("/", (req, res) => {
    res.send("server is running...")
})
  
  ///////////////////////////////////////////////////////
  // Server Listener
  ////////////////////////////////////////////////////////
  const PORT = process.env.PORT || 4000
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
  })