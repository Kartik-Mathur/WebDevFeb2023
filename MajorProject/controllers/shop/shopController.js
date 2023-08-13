const Products = require('../../models/Products');

module.exports.getProfile = (req, res, next) => {
    res.render('profile', {
        name: req.user.username,
        isAdmin: req.user.isAdmin,
        cartCount: req.user.cart.length
    });
}


module.exports.getProducts = async (req, res, next) => {
    try {
        let products = await Products.find({});

        res.render('shop/products', {
            products,
            isAdmin: req.user.isAdmin,
            cartCount: req.user.cart.length
        });
    }
    catch (err) {
        next(err);
    }
}

module.exports.getAddToCart = async (req, res, next) => {
    try {
        let { productId } = req.query;
        let indx = -1;
        console.log(req.user.cart);
        req.user.cart.forEach((p, i) => {
            if (p.id == productId) indx = i;
        })
        console.log(indx);
        if (indx == -1) {
            req.user.cart.unshift({
                id: productId,
                quantity: 1
            })
        }
        else {
            req.user.cart[indx].quantity+=1;
        }
        await req.user.save();
        res.send({
            msg: 'Item added success',
            cartCount: req.user.cart.length
        })
    }
    catch (err) {
        next(err);
    }
}