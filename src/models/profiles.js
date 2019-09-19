const Sequelize = require("sequelize");

export function init_table(sequelize) {
    return sequelize.define('profiles', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            require: true,
            primaryKey: true
        },
        // TODO: Consider names in an internationalization context.
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true,
            unique: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true,
            unique: false
        },
        bio: {
            type: Sequelize.STRING,
            allowNull: true,
            require: false,
            unique: false
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: true,
            require: false,
            unique: false
        }
    });
}