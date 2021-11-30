'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    userId: 
    {
      type:DataTypes.INTEGER,
      primaryKey:true,
      
    },
    userName:
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    Email: DataTypes.STRING,
    phoneNumber: DataTypes.BIGINT,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'userinfo'
  });
  return User;
};