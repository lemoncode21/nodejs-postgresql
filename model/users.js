const Sequelize = require("sequelize");
const db = require("../config/config");

const users = db.define(
    "users",
    {
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING
    },
    {
        tableName: "users",
        timestamps: true
    }
);

module.exports = users