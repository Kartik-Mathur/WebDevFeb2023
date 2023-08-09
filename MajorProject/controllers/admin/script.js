module.exports.getAddProduct = (req,res,next)=>{
    res.render('addproduct');
}

module.exports.postAddProduct = (req,res,next)=>{
    console.log(req.file);
    res.send("OK");
}