const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports.getAddProduct = (req, res, next) => {
    res.render('addproduct',{
        isAdmin: req.user.isAdmin
    });
}

module.exports.postAddProduct = (req, res, next) => {
    console.log(req.file);
    cloudinary.uploader.upload(`uploads/${req.file.filename}`, (error, result) => {
        console.log(result, error);
        res.send("OK");
    });

}