// Import Dependencies and Connection
/////////////////////////////////
const mongoose = require("./connection.js")

/////////////////////////////////////////
// Create Our Animals Model
/////////////////////////////////////////
// destructure Schema and model into their own variables
const { Schema, model } = mongoose
// same as :
// const Schema = mongoose.Schema
// const model = mongoose.model

// Schema - Shape of the Data
const animalSchema = new Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})

// Model - object for interacting with the database
const Fruit = model("Animal", animalSchema)

//////////////////////////////////
// export the model
/////////////////////////////////
module.exports = Animal