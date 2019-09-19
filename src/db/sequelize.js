let Sequelize       = require('sequelize'),
    Profiles        = require('../models/profiles');

if (!process.env.DATABASE_URL) {
    require('dotenv').config()
}

let options = {
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false,
    logging: false
}

if (process.env.POSTGRESQL_SERVICE_HOST) {
    console.log("POSTGRESQL_SERVICE_HOST: " + process.env.POSTGRESQL_SERVICE_HOST);
    options.host = process.env.POSTGRESQL_SERVICE_HOST;
}

if(process.env.POSTGRESQL_SERVICE_PORT) {
    console.log("POSTGRESQL_SERVICE_PORT: " + process.env.POSTGRESQL_SERVICE_PORT);
    options.post = process.env.POSTGRESQL_SERVICE_PORT;
}

let sequelize = new Sequelize(process.env.DATABASE_URL, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, options);

/**
 * Define Models
 */

sequelize.profiles = Profiles.init_table(sequelize);

/**
 * Define Relationships
 */



module.exports = sequelize;