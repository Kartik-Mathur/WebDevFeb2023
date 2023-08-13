const Products = require('../../models/Products');

module.exports.getProfile = (req, res, next) => {
    res.render('profile', {
        name: req.user.username,
        isAdmin: req.user.isAdmin
    });
}


module.exports.getProducts = async (req, res, next) => {
    try {
        let products = await Products.find({});

        res.render('shop/products', {
            products,
            isAdmin: req.user.isAdmin
        });
    }
    catch (err) {
        next(err);
    }
}