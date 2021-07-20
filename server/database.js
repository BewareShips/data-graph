const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
   "id",
   "first_name",
   "last_name",
   "email",
   "gender",
   "ip_address",
   {
      dialect: "sqlite",
      host: "./dev.sqlite",
   }
);

module.exports = sequelize;
