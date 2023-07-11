const db = require('../models');
const Product = db.products;
const Op = db.Sequelize.Op;

/*exports.create = (request, response) => {

};*/

exports.findAll = (request, response) => {
    Product.findAll().then(data => {
        response.send(data);
    }).catch(err => {
        response.status(500).send({
            message:
                err.message || "Some error ocurred while retrieving products."
        });
    });
};

exports.findOne = (request, response) => {
    const id = request.params.id;
    
    Product.findByPk(id).then(data => {
        if(data){
            response.send(data);
        }else{
            response.status(404).send({
                message: "Cannot find product with id = ${id}."
            });
        }
    }).catch(err => {
        response.status(500).send({
            message: "Error retrieving product with id = " + id
        });
    });
};/*

exports.update = (request, response) => {

};

exports.delete = (request, response) => {

};

exports.deleteAll = (request, response) => {

};*/