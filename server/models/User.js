const {Model,DataTypes} = require('sequelize');
const sequelize = require('../database');

class User extends Model{

}

User.init({
  id:{
    type: DataTypes.NUMBER
  },
  first_name:{
    type: DataTypes.STRING
  },
  last_name:{
    type: DataTypes.STRING
  },
  email:{
    type: DataTypes.STRING
  },
  gender:{
    type: DataTypes.STRING
  },
  ip_address:{
    type: DataTypes.STRING
  }
},{
  sequelize,
  modelName: 'user'

})

module.exports = User;