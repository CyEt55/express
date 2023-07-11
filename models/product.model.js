const sequelize = require(".");
const Sequelize = require(".");
const products = require(".");

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product",{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: Sequelize.STRING
        },
        price:{
            type: Sequelize.DECIMAL
        },
        description:{
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    });

    return Product;
};