import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import sequelize from '../db/sequelize';

class Profile extends Model {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public bio!: string;
    public imageUrl!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Profile.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        // require: true,
        primaryKey: true
    },
    // TODO: Consider names in an internationalization context.
    firstName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        // require: true,
        unique: false
    },
    lastName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        // require: true,
        unique: false
    },
    bio: {
        type: new DataTypes.STRING(1024),
        allowNull: true,
        // require: false,
        unique: false
    },
    imageUrl: {
        type: new DataTypes.STRING(256),
        allowNull: true,
        // require: false,
        unique: false
    }
}, {
    sequelize,
    tableName: 'profiles',
});

export { Profile }