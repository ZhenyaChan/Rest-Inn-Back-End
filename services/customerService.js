const bcrypt = require('bcryptjs');
const customerModel = require("../models/customerModel.js");

exports.getAllCustomers = async (req, res) => {
    try {
        const customer = await customerModel.find();

        res.json({
            message: "A list of customers",
            data: customer,
            totalCustomers: customer.length
        });
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
};

exports.createACustomer  = (req, res)=>{

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;

    const customer = new customerModel(req.body);

    customer.save()
    .then((newCustomer)=>{
        res.json({
            message: "The customer was successfully created and stored in the database.",
            data: newCustomer
        });
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        });
    });
};

exports.getACustomer = (req, res) => {
    customerModel.findById(req.params.id)
        .then(customer => {
            if (customer) {
                res.json({
                    message: `Customer with the ID ${req.params.id}.`,
                    data: customer
                });
            } else {
                res.status(404).json({
                    message: `There is no customer with the ID ${req.params.id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
};

exports.deleteACustomer = async (req, res) => {
    try {
        const customer = await customerModel.findByIdAndRemove(req.params.id);
        if (!customer) {
            res.status(404).json({
                message: `Customer with the ID ${req.params.id} was not found.`
            });
        } else {
            res.json({
                message: `The customer with the ID ${req.params.id} was deleted.`
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
};