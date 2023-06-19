const Food = require('../models/models');

const initialFood = [
    {name:"Paneer Murga"},
    {name:"Paneer Murga"}
];

module.exports.getItems =  async (req, res, next) => {
    try{
        let foods = await Food.find({});
        res.send(initialFood);
    }catch(err){
        res.send(err);
    }
}

module.exports.postItem = async (req, res, next) => {
    const {name,description,imageUrl} = req.body;
    try{
        await Food.create({name,description,imageUrl});
        res.redirect('/items');
    }   
    catch(err){
        res.send(err);
    }
}
