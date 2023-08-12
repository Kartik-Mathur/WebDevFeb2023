module.exports.getProfile = (req,res,next)=>{
    res.render('profile',{
        name: req.user.username,
        isAdmin: req.user.isAdmin
    });
}