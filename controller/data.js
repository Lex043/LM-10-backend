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
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.getProductByCategory = (req, res, next) => {
    const category = req.params.category;
    Data.find({ category: category })
        .then((products) => {
            if (products.length === 0) {
                const error = new Error(
                    "No products found for the specified category "
                );
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({
                message: `Fetched ${category} category successfully`,
                products: products,
            });
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
