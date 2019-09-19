const Sequelize = require('sequelize');

export function init_table(sequelize) {
    return sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            require: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true,
            unique: true,
            primaryKey: true,
            validate: {
                isAlphanumeric: true
            }
        },
    });
}