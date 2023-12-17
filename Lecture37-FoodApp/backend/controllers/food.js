const Food = require('../models/foodModel');

module.exports.getFoods = async (req,res,next)=>{
    let foods = await Food.find({});    
    console.log(foods);
    res.status(200).send(foods);
}