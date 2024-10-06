// models/File.js
import { DataTypes } from 'sequelize';
import sequelize from './db.js';  // Assuming you have already set up the connection

const File = sequelize.define('File', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default File;
