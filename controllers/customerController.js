const express = require('express');
const router = express.Router();
const customerService = require("../services/customerService.js");
const {createCustomerValidation} = require("../middleware/validation.js");

//Get All Customers
router.get("/", customerService.getAllCustomers);

//Create A Customer
router.post("/", createCustomerValidation, customerService.createACustomer);

//Get A Customer
router.get("/:id", customerService.getACustomer);

//Delete A Customer
router.delete("/:id", customerService.deleteACustomer);

module.exports = router;