exports.createCustomerValidation = (req,res,next)=>{
    const errors = [];
   
    if(!req.body.firstName ||  req.body.firstName === "") {
        errors.push( {field: "firstName", message:"You must provide your first name"});
    }

    if(!req.body.lastName ||  req.body.lastName === "") {
        errors.push( {field: "lastName", message:"You must provide your last name"});
    }

    if(!req.body.email  || req.body.email === "" ) {
        errors.push( {field : "email", message :"You must provide your email"});
    }

    if(!req.body.email  || req.body.email === "" ) {
        errors.push( {field : "email", message :"You must provide your email"});
    }

    if(!req.body.password  || req.body.password === "" ) {
        errors.push( {field : "password", message :"You must enter the password"});
    }

    //THERE ARE ERROS 
    if(errors.length > 0){
        res.status(400).json({
        message : "Error: The customer was not created",
        data : errors  
        })
    } else {
        next(); // move on to the next middleware (route handler)
    }
};


exports.createPropertyValidation = (req,res,next)=>{
    const errors = [];
   
    if(!req.body.propertyTitle ||  req.body.propertyTitle === "") {
        errors.push( {field: "propertyTitle", message:"Property title must be entered"});
    }

    if(!req.body.rentalPrice ||  req.body.rentalPrice === "") {
        errors.push( {field: "rentalPrice", message:"Property rental price (per night) must be entered"});
    }

    if(!req.body.propertyType  || req.body.propertyType === "" ) {
        errors.push( {field : "propertyType", message :"Property type must be entered"});
    }

    if(!req.body.amentities  || req.body.amentities === "" ) {
        errors.push( {field : "amentities", message :"Property amentities must be entered"});
    }

    if(!req.body.location  || req.body.location === "" ) {
        errors.push( {field : "location", message :"Property location must be entered"});
    }

    if(typeof(req.body.bestSeller) != "boolean") {
        errors.push( {field : "bestSeller", message :"Bestseller indicator must be defined"});
    }
    //THERE ARE ERROS 
    if(errors.length > 0){
        res.status(400).json({
        message : "Error: The property was not created",
        data : errors  
        })
    } else {
        next(); // move on to the next middleware (route handler)
    }
};