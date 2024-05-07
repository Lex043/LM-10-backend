const Data = require("../models/data");

exports.getProducts = (req, res, next) => {
    Data.find()
        .then((products) => {
            res.status(200).json({
                message: "Fetched products successfully",
                products: products,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getProductByCategory = (req, res, next) => {
    const category = req.params.category;
    Data.find({ category: category })
        .then((products) => {
            res.status(200).json({
                message: "Fetched category successfully",
                products: products,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
