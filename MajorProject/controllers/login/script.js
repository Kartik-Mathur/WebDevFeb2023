module.exports.getLogin = (req,res,next)=>{
    res.render('login',{
        msg: req.flash('msg')
    })
}   

