const express = require('express');
const router = express.Router();
const propertyService = require("../services/propertyService.js");
const {createPropertyValidation} = require("../middleware/validation.js");

//Get All Property Types
router.get("/types", propertyService.getAllTypes);

//Create A Property
router.post("/", createPropertyValidation, propertyService.createAProperty);

//Get All Properties
router.get("/", propertyService.getAllProperties);

//Get A Property
router.get("/:id", propertyService.getAProperty);

//Update A Property
router.put("/:id", propertyService.updateAProperty);

//Delete A Property
router.delete("/:id", propertyService.deleteAPropery);


module.exports = router;