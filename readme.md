# Rest-Inn RESTful API

## Summary

A travel rental booking web application of the company which allows to manage the properties, i.e, add, edit & delete provided rental properties. Additionally, the API also allows an administrator to manage Rest-Inn’s customers.

## Production Link(Heroku): 
- https://rest-inn-api.herokuapp.com/
## Github Repository link: 
- https://github.com/ZhenyaChan/WEB422-Assignment
- https://github.com/ZhenyaChan/Rest-Inn-Full-Stack-App/tree/master/back-end

## Customer End Points

#### GET /customers/:id

This end point allows to retrieve a customer based on the provided id

#### POST /customers

This end point allows to create a new customer. The following data needs to be submitted in the body of the request (as JSON) :

1) firstName (required)
2) lastName(required)
3) email (required)
4) password(required)
5) phoneNumbers(optional)

## Properties End Points

#### GET /properties/:id

This end point allows to retrieve a property based on the provided id

#### POST /properties

This end point allows to create a new property. The following data needs to be submitted in the body of the request (as JSON):

1) propertyTitle(required)
2) rentalPrice(required)
3) description
4) propertyType(required)
5) houseRules
6) amentities(required),
7) location(required),
8) bestSeller(required)
9) propertyPhoto

#### DELETE /properties

This end point allows to delete a property based on the provided id

#### PUT /properties

This end point allows to update the property data based on the provided id. Any of the following data can be submitted in the body of the request (as JSON):

1) propertyTitle
2) rentalPrice
3) description
4) propertyType
5) houseRules
6) amentities
7) location
8) bestSeller
9) propertyPhoto

#### GET /properties

This end point allows to retrieve all the properties

This end point also allows to filter the properties by passing any of the below query string parameters:

| Parameter         | Description                                    |
| ----------------- | ---------------------------------------------- |
| propertyType      | property type                                  |
| bestSeller        | bestseller or not                              |
| location          | properties with the same location              |


