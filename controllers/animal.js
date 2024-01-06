//////////////////////////////////////
//Import Dependencies
///////////////////////////////////////
const express = require("express")
const Animal = require("../models/animal.js")
const seedData = require("../models/seed.js")

//////////////////////////////////////
// Create the Router
///////////////////////////////////////
const router = express.Router()


//////////////////////
// Route Controllers
////////////////////////

// index route
router.get("/", async (req, res) => {
    try {
      // get all animals
      let animals = await Animal.find({})
      // render a template
      // animals/index.ejs = ./views/animals/index.ejs
      res.render("animals/index.ejs", { animals });
    } catch (error) {
      console.log("-----", error.message, "------");
      res.status(400).send("error, read logs for details");
    }
  })

// seed route
router.get("/seed", async (req, res) => {
    try {
      // Delete All Animals
      await Animal.deleteMany({});
  
      // Seed my starter animals
      const animals = await Animal.create(seedData);
  
      // send animals as response
      res.json(animals);
    } catch (error) {
      console.log(error.message);
      res.send("There was error, read logs for error details");
    }
  });

//////////////////////
// EXPORTS
////////////////////////
module.exports = router