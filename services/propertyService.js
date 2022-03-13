const propertyModel = require("../models/propertyModel.js");

exports.getAllTypes = (req, res)=>{
    let count = 0;
    const propertyArr = [];
    propertyModel.find()
    .then(properties=>{
        // properties.forEach(property=>typesArr.push(property.propertyType)); //push all the property types into array
        // let uniqueTypes = typesObj.filter((item, index, array) => array.indexOf(item) === index); //filter the array excluding duplicates
        // uniqueTypes.forEach(types=>typesObj.push({typeID: ++count, type: types})); //creating json object for each type and pushing into an array

        // add all property ids, types, images to the array
        for (let i = 0; i < properties.length; i++) {
            propertyArr.push({ typeID: ++count, type: properties[i].propertyType, image: properties[i].propertyPhoto });
        }
        // filter property objects based on the unique type and save to unique array
        const unique = propertyArr.filter((elem, index) => propertyArr.findIndex(obj => obj.type === elem.type) === index);

        res.json({
            message: "A list of property types",
            data: unique,
            totalPropertyTypes: unique.length
        });
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        });
    });
}

exports.createAProperty = (req, res)=>{
    const property = new propertyModel(req.body);

    property.save()
    .then((newProperty)=>{
        res.json({
            message: "The property was successfully created and stored in the database.",
            data: newProperty
        });
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        });
    });
};

exports.getAllProperties = async (req, res) => {

    const queryStringObj = {};

    if (req.query.propertyType) {
        queryStringObj.propertyType = req.query.propertyType;
    }

    if (req.query.location) {
        queryStringObj.location = req.query.location;
    }

    if (req.query.bestSeller) {
        queryStringObj.bestSeller = req.query.bestSeller;
    }

    try {
        const property = await propertyModel.find(queryStringObj);

        res.json({
            message: "A list of properties",
            data: property,
            totalProperties: property.length
        });
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
};

exports.getAProperty = (req, res) => {
    propertyModel.findById(req.params.id)
        .then(property => {
            if (property) {
                res.json({
                    message: `Property with the ID ${req.params.id}.`,
                    data: property
                });
            } else {
                res.status(404).json({
                    message: `There is no property with the ID ${req.params.id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
};

exports.updateAProperty = (req, res) => {
    propertyModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(property => {
            if (property) {
                res.json({
                    message: `The property with the ID ${req.params.id} was updated.`,
                    data: property
                });
            } else {
                res.status(404).json({
                    message: `Property with the ID ${req.params.id} was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
};

exports.deleteAPropery = async (req, res) => {
    try {
        const property = await propertyModel.findByIdAndRemove(req.params.id);
        if (!property) {
            res.status(404).json({
                message: `Property with the ID ${req.params.id} was not found.`
            });
        } else {
            res.json({
                message: `The property with the ID ${req.params.id} was deleted.`
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
};