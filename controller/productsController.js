const ProductModel = require('../models/productModel')


exports.getProducts =async (req, res, next) => {

    const products = await ProductModel.find({});


    res.json({
        success:true,
        products
    })

}
exports.getSingleProducts =(req, res, next) => {
    res.json({
        success:true,
        message: 'Get Single Products working'
    })

}