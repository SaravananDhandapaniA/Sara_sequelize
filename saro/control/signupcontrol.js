const { Model } = require('sequelize');
const {sequelize,User} = require('../models');


var addUser = async (req, resp) => {

    const {userId, userName, Email, phoneNumber, password} = req.body;
    try{
    const insertData = await User.create({userId, userName, Email, phoneNumber, password});
    
    return resp.status(200).json(insertData);
    }
    catch(e)
    {
        return resp.status(500).json({"message": e});
    }
}

var getUser = async (req ,resp) => {
    const users = await User.findAll();
    return resp.status(200).json(users);
}

module.exports={addUser,getUser}